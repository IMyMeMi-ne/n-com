"use client";
import style from "./logoutButton.module.css";
import Image from "next/image";
export default function LogoutButton() {
  const me = {
    id: "iMyMeMine",
    nickname: "남현",
    image: "/nLogo.webp",
  };
  const onLogout = () => {};
  return (
    <button className={style.logoutButton} onClick={onLogout}>
      <div className={style.logoutUserImage}>
        <Image width={40} height={40} src={me.image} alt={me.id} priority />
      </div>
      <div className={style.logoutUserName}>
        <div>{me.id}</div>
        <div>{me.nickname}</div>
      </div>
    </button>
  );
}
