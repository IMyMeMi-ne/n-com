import { QueryFunction } from '@tanstack/query-core';
import { Post as PostProps } from '@/app/model/Post';

export const getComments: QueryFunction<
  PostProps[],
  [_1: string, id: string, _3: string]
> = async ({ queryKey }) => {
  const [_1, id, _3] = queryKey;
  const res = await fetch(`http://localhost:9090/api/posts/${id}/comments`, {
    next: {
      tags: ['posts', id, 'comments'],
    },
    credentials: 'include',
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};
