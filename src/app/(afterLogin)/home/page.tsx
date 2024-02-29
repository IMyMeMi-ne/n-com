import style from './home.module.css';
import TabProvider from './_component/TabProvider';
import Tab from './_component/Tab';
import PostForm from './_component/PostForm';
import PostRecommends from './_component/PostRecommends';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { getPostRecommend } from './_lib/getPostRecommend';

export default async function HomePage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['post, recommends'],
    queryFn: getPostRecommend,
  });
  const dehydratedState = dehydrate(queryClient);
  return (
    <main className={style.main}>
      <HydrationBoundary state={dehydratedState}>
        <TabProvider>
          <Tab />
          <PostForm />
          <PostRecommends />
        </TabProvider>
      </HydrationBoundary>
    </main>
  );
}
