'use client';
import style from './logoutButton.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { Session } from '@auth/core/types';
import { useQueryClient } from '@tanstack/react-query';
type Props = {
  me: Session | null;
};
export default function LogoutButton({ me }: Props) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const onLogout = () => {
    queryClient.invalidateQueries({
      queryKey: ['posts'],
    });
    queryClient.invalidateQueries({
      queryKey: ['users'],
    });
    signOut({ redirect: false }).then(() => {
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/logout`, {
        method: 'POST',
        credentials: 'include',
      });
      router.replace('/');
    });
  };

  if (!me?.user) {
    return null;
  }
  return (
    <button className={style.logoutButton} onClick={onLogout}>
      <div className={style.logoutUserImage}>
        <Image
          width={40}
          height={40}
          src={me.user?.image!}
          alt={me.user?.email!}
          priority
        />
      </div>
      <div className={style.logoutUserName}>
        <div>{me.user?.name}</div>
        <div>@{me.user?.email}</div>
      </div>
    </button>
  );
}
