import style from './home.module.css';
import TabProvider from './_component/TabProvider';
import Tab from './_component/Tab';
import PostForm from './_component/PostForm';

import TabDeciderSuspense from './_component/TabDeciderSuspense';
import { Suspense } from 'react';
import Loading from './loading';

export default async function HomePage() {
  return (
    <main className={style.main}>
      <TabProvider>
        <Tab />
        <PostForm />
        <Suspense fallback={<Loading />}>
          <TabDeciderSuspense />
        </Suspense>
      </TabProvider>
    </main>
  );
}
