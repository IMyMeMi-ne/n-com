import BackButton from '@/app/(afterLogin)/_component/BackButton';
import style from './singPost.module.css';
import CommentForm from '@/app/(afterLogin)/[username]/status/[id]/_component/CommentForm';
import SinglePost from './_component/SingPost';

type Props = {
  id: string;
};
export default function SinglePostPage({ id }: Props) {
  return (
    <div className={style.main}>
      <div className={style.header}>
        <BackButton />
        <h3 className={style.headerTitle}>게시하기</h3>
      </div>
      <SinglePost id={id} />
      <CommentForm />
      <div>
        <div>댓글</div>
      </div>
    </div>
  );
}
