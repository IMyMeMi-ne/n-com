'use client';

import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Post as PostProps } from '@/app/model/Post';
import { getSinglePost } from '../_lib/getSinglePost';
import Post from '@/app/(afterLogin)/_component/Post';
import style from '@/app/(afterLogin)/[username]/profile.module.css';

type Props = {
  id: string;
};
export default function SinglePost({ id }: Props) {
  const { data: post, isError } = useQuery<
    PostProps,
    Object,
    PostProps,
    [_1: string, id: string]
  >({
    queryKey: ['posts', id],
    queryFn: getSinglePost,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
  if (isError) {
    return <div className={style.noUserText}>게시글을 찾을 수 없습니다!</div>;
  }
  if (!post) return null;
  return <Post key={post.postId} post={post} />;
}
