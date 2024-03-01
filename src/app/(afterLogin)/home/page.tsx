import style from './home.module.css';
import TabProvider from './_component/TabProvider';
import Tab from './_component/Tab';
import PostForm from './_component/PostForm';
import PostRecommends from './_component/PostRecommends';
import TabDecider from './_component/TabDecider';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { getPostRecommends } from './_lib/getPostRecommends';

export default async function HomePage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['posts, recommends'],
    queryFn: getPostRecommends,
  });
  const dehydratedState = dehydrate(queryClient);
  return (
    <main className={style.main}>
      <HydrationBoundary state={dehydratedState}>
        <TabProvider>
          <Tab />
          <PostForm />
          <TabDecider />
          <PostRecommends />
        </TabProvider>
      </HydrationBoundary>
    </main>
  );
}
