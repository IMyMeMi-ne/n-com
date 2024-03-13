'use client';

import { InfiniteData, useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { getFollowingPosts } from '../_lib/getFollowingPosts';
import Post from '../../_component/Post';
import { Post as PostProps } from '@/app/model/Post';
import { Fragment, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function FollowingPosts() {
  const { data, isFetching, fetchNextPage, hasNextPage } =
    useSuspenseInfiniteQuery<
      PostProps[],
      object,
      InfiniteData<PostProps[]>,
      [_1: string, _2: string],
      number
    >({
      queryKey: ['posts', 'followings'],
      queryFn: getFollowingPosts,
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
      initialPageParam: 0,
      getNextPageParam: (lastpage) => lastpage.at(-1)?.postId,
    });

  const { ref, inView } = useInView({
    threshold: 0,
    delay: 100,
  });
  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  });

  return (
    <>
      {data?.pages.map((page, i) => (
        <Fragment key={i}>
          {page.map((post) => (
            <Post key={post.postId} post={post} />
          ))}
        </Fragment>
      ))}
      <div ref={ref} style={{ height: 50 }} />
    </>
  );
}
