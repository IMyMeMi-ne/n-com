'use client';

import { useQuery } from '@tanstack/react-query';
import { getFollowingPosts } from '../_lib/getFollowingPosts';
import Post from '../../_component/Post';
import { Post as PostProps } from '@/app/model/Post';

export default function FollowingPosts() {
  const { data } = useQuery<PostProps[]>({
    queryKey: ['posts', 'followings'],
    queryFn: getFollowingPosts,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });

  return data?.map((post) => <Post key={post.postId} post={post} />);
}
