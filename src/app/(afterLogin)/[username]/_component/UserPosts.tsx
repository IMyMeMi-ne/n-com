'use client';

import { useQuery } from '@tanstack/react-query';
import { Post as PostProps } from '@/app/model/Post';
import { getUserPosts } from '../_lib/getUserPosts';
import Post from '../../_component/Post';

type Props = {
  username: string;
};
export default function UserPosts({ username }: Props) {
  const { data } = useQuery<
    PostProps[],
    Object,
    PostProps[],
    [_1: string, _2: string, username: string]
  >({
    queryKey: ['posts', 'userPosts', username],
    queryFn: getUserPosts,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
  return data?.map((post) => <Post key={post.postId} post={post} />);
}
