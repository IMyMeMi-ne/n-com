import BackButton from '@/app/(afterLogin)/_component/BackButton';
import style from './singPost.module.css';
import CommentForm from '@/app/(afterLogin)/[username]/status/[id]/_component/CommentForm';
import SinglePost from './_component/SingPost';
import Comments from './_component/Comments';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { getComments } from './_lib/getComments';
import { getSinglePost } from './_lib/getSinglePost';
import { getUserServer } from '../../_lib/getUserServer';
import { Post } from '@/app/model/Post';
import { User } from '@/app/model/User';

type Props = {
  params: { id: string; username: string };
};

export async function generateMetadata({ params }: Props) {
  const post: Post = await getUserServer({ queryKey: ['posts', params.id] });
  const user: User = await getUserServer({
    queryKey: ['users', params.username],
  });
  return {
    title: `N에서 ${user.nickname}님의 ${post.content}`,
    description: post.content,
  };
}
export default async function SinglePostPage({ params }: Props) {
  const { id } = params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['posts', id],
    queryFn: getSinglePost,
  });
  await queryClient.prefetchQuery({
    queryKey: ['posts', id, 'comments'],
    queryFn: getComments,
  });
  const dehydratedState = dehydrate(queryClient);
  return (
    <div className={style.main}>
      <HydrationBoundary state={dehydratedState}>
        <div className={style.header}>
          <BackButton />
          <h3 className={style.headerTitle}>게시하기</h3>
        </div>
        <SinglePost id={id} noImage />
        <CommentForm id={id} />
        <div>
          <Comments id={id} />
        </div>
      </HydrationBoundary>
    </div>
  );
}
