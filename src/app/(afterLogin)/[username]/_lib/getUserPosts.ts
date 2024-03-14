import { QueryFunction } from '@tanstack/query-core';
import { Post as PostProps } from '@/app/model/Post';

export const getUserPosts: QueryFunction<
  PostProps[],
  [_1: string, _2: string, username: string]
> = async ({ queryKey }) => {
  const [_1, _2, username] = queryKey;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${username}/posts`,
    {
      next: {
        tags: ['posts', 'users', username],
      },
      credentials: 'include',
      cache: 'no-store',
    }
  );
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};
