import { redirect } from 'next/navigation';
import Main from './_component/Main';
import { auth } from '@/auth';
export default async function Home() {
  const session = await auth();
  if (session?.user) {
    redirect('/home');
    return null;
  }
  return <Main />;
}
