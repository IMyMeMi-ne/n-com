import CommentForm from '@/app/(afterLogin)/[username]/status/[id]/_component/CommentForm';
import ActionButtons from '@/app/(afterLogin)/_component/ActionButtons';
import style from './photoModal.module.css';
import PhotoModalCloseButton from './_component/PhotoModalCloseButton';
import { faker } from '@faker-js/faker';
import {
  HydrationBoundary,
  dehydrate,
  QueryClient,
} from '@tanstack/react-query';
import SinglePost from '@/app/(afterLogin)/[username]/status/[id]/_component/SingPost';
import Comments from '@/app/(afterLogin)/[username]/status/[id]/_component/Comments';
import ImageZone from './_component/ImageZone';
import { getSinglePost } from '@/app/(afterLogin)/[username]/status/[id]/_lib/getSinglePost';
import { getComments } from '@/app/(afterLogin)/[username]/status/[id]/_lib/getComments';

type Props = {
  params: { id: string };
};

export default async function Default({ params }: Props) {
  const { id } = params;
  const queryClient = new QueryClient();
  const dehydratedState = dehydrate(queryClient);
  await queryClient.prefetchQuery({
    queryKey: ['posts', id],
    queryFn: getSinglePost,
  });
  await queryClient.prefetchQuery({
    queryKey: ['posts', id, 'comments'],
    queryFn: getComments,
  });
  return (
    <div className={style.container}>
      <HydrationBoundary state={dehydratedState}>
        <ImageZone id={id} />
        <div className={style.commentZone}>
          <SinglePost id={id} noImage />
          <CommentForm />
          <Comments id={id} />
        </div>
      </HydrationBoundary>
    </div>
  );
}
