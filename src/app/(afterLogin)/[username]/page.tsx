import style from "./profile.module.css";
import Post from "@/app/(afterLogin)/_component/Post";
import Image from "next/image";
export default function Profile() {
  const user = {
    id: "Namhyun",
    nickname: "iMyMeMine",
  };

  return (
    <main className={style.main}>
      <div className={style.header}>
        {/* <BackButton /> */}
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
        <button className={style.followButton}>팔로우</button>
      </div>
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  );
}
