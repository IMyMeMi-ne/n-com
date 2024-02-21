import style from "./post.module.css";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import ActionButtons from "./ActionButtons";
import PostArticle from "./PostArticle";
dayjs.extend(relativeTime);
dayjs.locale("ko");

export default function Post() {
  const target = {
    postId: 1,
    User: {
      id: "namhyun",
      nickname: "iMyMeMine",
      image: "/darkXLogo.jpg",
    },
    content: "안녕하세요.",
    createdAt: new Date(),
    Images: [],
  };
  return (
    <PostArticle post={target}>
      <div className={style.postWrapper}>
        <div className={style.postUserSection}>
          <Link href={`/${target.User.id}`} className={style.postUserImage}>
            <Image
              src={target.User.image}
              alt={target.User.nickname}
              width={50}
              height={50}
            />
          </Link>
        </div>
        <div className={style.postBody}>
          <div className={style.postMeta}>
            <Link href={`/${target.User.id}`}>
              <span className={style.postUserName}>{target.User.nickname}</span>
              &nbsp;
              <span className={style.postUserId}>@{target.User.id}</span>
              &nbsp; · &nbsp;
            </Link>
            <span className={style.postDate}>
              {dayjs(target.createdAt).fromNow(true)}
            </span>
          </div>
          <div>{target.content}</div>
          <div>{/* <PostImages post={target} /> */}</div>
          <ActionButtons />
        </div>
      </div>
    </PostArticle>
  );
}
