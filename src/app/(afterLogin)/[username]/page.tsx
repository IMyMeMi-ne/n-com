import style from './profile.module.css';
import { getUser } from './_lib/getUser';
import { getUserPosts } from './_lib/getUserPosts';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import UserPosts from './_component/UserPosts';
import UserInfo from './_component/UserInfo';
import { auth } from '@/auth';

type Props = {
  params: { username: string };
};
export default async function Profile({ params }: Props) {
  const { username } = params;
  const session = await auth();
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['users', username],
    queryFn: getUser,
  });
  await queryClient.prefetchQuery({
    queryKey: ['posts', 'users', username],
    queryFn: getUserPosts,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <main className={style.main}>
      <HydrationBoundary state={dehydratedState}>
        <UserInfo username={username} session={session} />
        <div>
          <UserPosts username={username} />
        </div>
      </HydrationBoundary>
    </main>
  );
}
