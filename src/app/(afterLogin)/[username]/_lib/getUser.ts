import { QueryFunction } from '@tanstack/query-core';
import { User } from '@/app/model/User';

export const getUser: QueryFunction<
  User,
  [_1: string, username: string]
> = async ({ queryKey }) => {
  const [_1, username] = queryKey;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${username}`,
    {
      next: {
        tags: ['users', username],
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
