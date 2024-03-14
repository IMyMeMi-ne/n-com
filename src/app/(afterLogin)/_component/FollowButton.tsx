'use client';

import style from './followButton.module.css';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { User } from '@/app/model/User';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import cx from 'classnames';
type Props = {
  user: User;
};
export default function FollowButton({ user }: Props) {
  const router = useRouter();
  const { data: session } = useSession();

  const followed = !!user.Followers.find(
    (v) => v.userId === session?.user?.email
  );
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
    onMutate: (userId: string) => {
      const value: User[] | undefined = queryClient.getQueryData([
        'users',
        'followRecommends',
      ]);

      if (value) {
        const index = value.findIndex((v) => v.id === userId);
        const shallow = [...value];
        shallow[index] = {
          ...shallow[index],
          Followers: [{ userId: session?.user?.email as string }],
          _count: {
            ...shallow[index]._count,
            Followers: shallow[index]._count.Followers + 1,
          },
        };
        queryClient.setQueryData(['users', 'followRecommends'], shallow);
      }
    },
    onError: () => {
      console.error('err');
    },
  });
  const unFollow = useMutation({
    mutationFn: (userId: string) => {
      return fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${userId}/follow`,
        {
          credentials: 'include',
          method: 'DELETE',
        }
      );
    },
    onMutate: (userId: string) => {
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
            (v) => v.userId !== session?.user?.email
          ),
          _count: {
            ...shallow[index]._count,
            Followers: shallow[index]._count.Followers - 1,
          },
        };
        queryClient.setQueryData(['users', 'followRecommends'], shallow);
      }
    },
    onError: () => {
      console.error('err');
    },
  });
  const onFollow = () => {
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
      {followed ? '언팔로우' : '팔로우'}
    </button>
  );
}
