'use client';

import style from './followButton.module.css';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { User } from '@/app/model/User';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import cx from 'classnames';
import { MouseEventHandler } from 'react';
type Props = {
  user: User;
};
export default function FollowButton({ user }: Props) {
  const router = useRouter();
  const { data: session } = useSession();

  const followed = !!user?.Followers.find((v) => v.id === session?.user?.email);
  const queryClient = useQueryClient();
  const follow = useMutation({
    mutationFn: (userId: string) => {
      return fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${userId}/follow`,
        {
          credentials: 'include',
          method: 'POST',
        }
      );
    },
    onMutate(userId: string) {
      const value: User[] | undefined = queryClient.getQueryData([
        'users',
        'followRecommends',
      ]);
      if (value) {
        const index = value.findIndex((v) => v.id === userId);
        const shallow = [...value];
        shallow[index] = {
          ...shallow[index],
          Followers: [{ id: session?.user?.email as string }],
          _count: {
            ...shallow[index]._count,
            Followers: shallow[index]._count?.Followers + 1,
          },
        };
        queryClient.setQueryData(['users', 'followRecommends'], shallow);
      }
      const value2: User | undefined = queryClient.getQueryData([
        'users',
        userId,
      ]);
      if (value2) {
        const shallow = {
          ...value2,
          Followers: [{ id: session?.user?.email as string }],
          _count: {
            ...value2._count,
            Followers: value2._count?.Followers + 1,
          },
        };
        queryClient.setQueryData(['users', userId], shallow);
      }
    },
    onError(error, userId: string) {
      const value: User[] | undefined = queryClient.getQueryData([
        'users',
        'followRecommends',
      ]);
      if (value) {
        const index = value.findIndex((v) => v.id === userId);
        const shallow = [...value];
        shallow[index] = {
          ...shallow[index],
          Followers: shallow[index].Followers.filter(
            (v) => v.id !== session?.user?.email
          ),
          _count: {
            ...shallow[index]._count,
            Followers: shallow[index]._count?.Followers - 1,
          },
        };
        queryClient.setQueryData(['users', 'followRecommends'], shallow);
        const value2: User | undefined = queryClient.getQueryData([
          'users',
          userId,
        ]);
        if (value2) {
          const shallow = {
            ...value2,
            Followers: value2.Followers.filter(
              (v) => v.id !== session?.user?.email
            ),
            _count: {
              ...value2._count,
              Followers: value2._count?.Followers - 1,
            },
          };
          queryClient.setQueryData(['users', userId], shallow);
        }
      }
    },
  });
  const unFollow = useMutation({
    mutationFn: (userId: string) => {
      return fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${userId}/follow`,
        {
          credentials: 'include',
          method: 'delete',
        }
      );
    },
    onMutate(userId: string) {
      const value: User[] | undefined = queryClient.getQueryData([
        'users',
        'followRecommends',
      ]);
      if (value) {
        const index = value.findIndex((v) => v.id === userId);
        const shallow = [...value];
        shallow[index] = {
          ...shallow[index],
          Followers: shallow[index].Followers.filter(
            (v) => v.id !== session?.user?.email
          ),
          _count: {
            ...shallow[index]._count,
            Followers: shallow[index]._count?.Followers - 1,
          },
        };
        queryClient.setQueryData(['users', 'followRecommends'], shallow);
        const value2: User | undefined = queryClient.getQueryData([
          'users',
          userId,
        ]);
        if (value2) {
          const shallow = {
            ...value2,
            Followers: value2.Followers.filter(
              (v) => v.id !== session?.user?.email
            ),
            _count: {
              ...value2._count,
              Followers: value2._count?.Followers - 1,
            },
          };
          queryClient.setQueryData(['users', userId], shallow);
        }
      }
    },
    onError(error, userId: string) {
      const value: User[] | undefined = queryClient.getQueryData([
        'users',
        'followRecommends',
      ]);
      if (value) {
        const index = value.findIndex((v) => v.id === userId);
        const shallow = [...value];
        shallow[index] = {
          ...shallow[index],
          Followers: [{ id: session?.user?.email as string }],
          _count: {
            ...shallow[index]._count,
            Followers: shallow[index]._count?.Followers + 1,
          },
        };
        queryClient.setQueryData(['users', 'followRecommends'], shallow);
      }
      const value2: User | undefined = queryClient.getQueryData([
        'users',
        userId,
      ]);
      if (value2) {
        const shallow = {
          ...value2,
          Followers: [{ id: session?.user?.email as string }],
          _count: {
            ...value2._count,
            Followers: value2._count?.Followers + 1,
          },
        };
        queryClient.setQueryData(['users', userId], shallow);
      }
    },
  });
  const onFollow: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!session) {
      router.push('/login');
    }
    if (followed) {
      unFollow.mutate(user.id);
    } else {
      follow.mutate(user.id);
    }
  };
  return (
    <button
      className={cx(style.followButton, followed && style.followed)}
      onClick={onFollow}
    >
      {followed ? '팔로잉' : '팔로우'}
    </button>
  );
}
