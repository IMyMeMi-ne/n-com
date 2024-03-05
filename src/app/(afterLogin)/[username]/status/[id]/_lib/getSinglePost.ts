import { QueryFunction } from '@tanstack/query-core';
import { Post as PostProps } from '@/app/model/Post';

export const getSinglePost: QueryFunction<
  PostProps,
  [_1: string, id: string]
> = async ({ queryKey }) => {
  const [_1, id] = queryKey;
  const res = await fetch(`http://localhost:9090/api/posts/${id}`, {
    next: {
      tags: ['posts', id],
    },
  });
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};
