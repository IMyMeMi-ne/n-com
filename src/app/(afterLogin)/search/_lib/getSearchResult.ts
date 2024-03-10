import { QueryFunction } from '@tanstack/query-core';
import { Post as PostProps } from '@/app/model/Post';

export const getSearchResult: QueryFunction<
  PostProps[],
  [_1: string, _2: string, searchParams: { q: string; pf?: string; f?: string }]
> = async ({ queryKey }) => {
  const [_1, _2, searchParams] = queryKey;
  const res = await fetch(
    `http://localhost:9090/api/search/${
      searchParams.q
    }?${searchParams.toString()}`,
    {
      next: {
        tags: ['posts', 'search', searchParams.q],
      },
      credentials: 'include',
      cache: 'no-store',
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};
