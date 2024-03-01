'use client';

import { useQuery } from '@tanstack/react-query';
import { getPostRecommends } from '../_lib/getPostRecommends';
import Post from '../../_component/Post';
import { Post as PostProps } from '@/app/model/Post';

export default function PostRecommends() {
  const { data, isLoading, isError } = useQuery<PostProps[]>({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends,
  });
  console.log(data);

  return data?.map((post) => <Post key={post.postId} post={post} />);
}
