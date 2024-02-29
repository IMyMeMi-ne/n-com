import style from './post.module.css';
import Link from 'next/link';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import ActionButtons from '@/app/(afterLogin)/_component/ActionButtons';
import PostArticle from '@/app/(afterLogin)/_component/PostArticle';
import PostImages from '@/app/(afterLogin)/_component/PostImages';
import { Post } from '@/app/model/Post';
import Image from 'next/image';
dayjs.locale('ko');
dayjs.extend(relativeTime);

type Props = {
  noImage?: boolean;
  post: Post;
};
export default function Post({ noImage, post }: Props) {
  const target = post;

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
            <div className={style.postShade} />
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
          {!noImage && (
            <div>
              <PostImages post={target} />
            </div>
          )}
          <ActionButtons />
        </div>
      </div>
    </PostArticle>
  );
}
