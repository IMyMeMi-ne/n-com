'use client';
import style from './followRecommend.module.css';
import Image from 'next/image';
import FollowButton from './FollowButton';
import { User } from '@/app/model/User';

type Props = {
  user: User;
};

export default function FollowRecommend({ user }: Props) {
  return (
    <div className={style.container}>
      <div className={style.userLogoSection}>
        <div className={style.userLogo}>
          <Image src={user.image} width={40} height={40} alt={user.id} />
        </div>
      </div>
      <div className={style.userInfo}>
        <div className={style.userId}>{user.id}</div>
        <div className={style.userHashTag}>{user.nickname}</div>
      </div>
      <FollowButton user={user} />
    </div>
  );
}
