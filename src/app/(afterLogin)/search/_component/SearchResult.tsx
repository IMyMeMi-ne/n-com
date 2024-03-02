'use client';

import Post from '@/app/(afterLogin)/_component/Post';
import { Post as PostProps } from '@/app/model/Post';
import { getSearchResult } from '@/app/(afterLogin)/search/_lib/getSearchResult';
import { useQuery } from '@tanstack/react-query';

type Props = {
  searchParams: { q: string; f?: string; pf?: string };
};
export default function SearchResult({ searchParams }: Props) {
  const { data } = useQuery<
    PostProps[],
    Object,
    PostProps[],
    [_1: string, _2: string, Props['searchParams']]
  >({
    queryKey: ['posts', 'search', searchParams],
    queryFn: getSearchResult,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  return data?.map((post) => <Post key={post.postId} post={post} />);
}
