'use client';
import style from './logoutButton.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
export default function LogoutButton() {
  const router = useRouter();
  const { data: me } = useSession();
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
