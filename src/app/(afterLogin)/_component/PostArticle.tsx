'use client';

import { ReactNode } from 'react';
import style from './post.module.css';
import { useRouter } from 'next/navigation';
import { Post as PostProps } from '@/app/model/Post';
type Props = {
  children: ReactNode;
  post: PostProps;
};
export default function PostArticle({ children, post }: Props) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/${post.User.id}/status/${post.postId}`);
  };
  return (
    <article onClick={onClick} className={style.post}>
      {children}
    </article>
  );
}
