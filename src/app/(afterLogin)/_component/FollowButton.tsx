'use client';

import style from './followButton.module.css';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function FollowButton() {
  const router = useRouter();
  const { data: session } = useSession();
  const onClick = () => {
    if (!session) {
      router.push('/login');
    }
  };
  return (
    <button className={style.followButton} onClick={onClick}>
      팔로우
    </button>
  );
}
