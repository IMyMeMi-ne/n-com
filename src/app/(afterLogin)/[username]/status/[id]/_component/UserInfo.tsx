'use client';

import style from '@/app/(afterLogin)/[username]/profile.module.css';
import BackButton from '@/app/(afterLogin)/_component/BackButton';
import Image from 'next/image';
import FollowButton from '@/app/(afterLogin)/_component/FollowButton';
import { useQuery } from '@tanstack/react-query';
import { User } from '@/app/model/User';
import { getUser } from '../../../_lib/getUser';
type Props = {
  username: string;
};

export default function Profile({ username }: Props) {
  const { data: user } = useQuery<User, Object, User, [_1: string, _2: string]>(
    {
      queryKey: ['users', username],
      queryFn: getUser,
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
    }
  );
  if (!user) {
    return null;
  }
  return (
    <>
      <div className={style.header}>
        <BackButton />
        <h3 className={style.headerTitle}>{user.nickname}</h3>
      </div>
      <div className={style.userZone}>
        <div className={style.userImage}>
          <Image
            src="/nLogo.webp"
            alt={user.id}
            width={100}
            height={100}
            priority
          />
        </div>
        <div className={style.userName}>
          <div>{user.id}</div>
          <div>@{user.nickname}</div>
        </div>
        <FollowButton />
      </div>
    </>
  );
}
