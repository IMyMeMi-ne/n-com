'use client';

import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import { getPostRecommends } from '../_lib/getPostRecommends';
import Post from '../../_component/Post';
import { Post as PostProps } from '@/app/model/Post';
import { Fragment } from 'react';

export default function PostRecommends() {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery<
    PostProps[],
    object,
    InfiniteData<PostProps[]>,
    [_1: string, _2: string],
    number
  >({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    initialPageParam: 0,
    getNextPageParam: (lastpage) => lastpage.at(-1)?.postId,
  });

  return data?.pages.map((page, i) => {
    <Fragment key={i}>
      {page.map((post) => (
        <Post key={post.postId} post={post} />
      ))}
      ;
    </Fragment>;
  });
}
