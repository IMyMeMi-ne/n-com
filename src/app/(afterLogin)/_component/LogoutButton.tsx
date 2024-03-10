'use client';
import style from './logoutButton.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { Session } from '@auth/core/types';
type Props = {
  me: Session | null;
};
export default function LogoutButton({ me }: Props) {
  const router = useRouter();

  const onLogout = () => {
    signOut({ redirect: false }).then(() => {
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
