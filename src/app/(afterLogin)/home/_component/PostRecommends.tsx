'use client';

import { useQuery } from '@tanstack/react-query';
import { getPostRecommend } from '../_lib/getPostRecommend';
import Post from '@/app/(afterLogin)/_component/Post';
import { Post as PostType } from '@/app/model/Post';

export default function PostRecommends() {
  const { data } = useQuery<PostType[]>({
    queryKey: ['post, recommends'],
    queryFn: getPostRecommend,
  });
  return (
    <div>
      {data?.map((post) => (
        <Post key={post.postId} post={post} />
      ))}
    </div>
  );
}
