'use client';

import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Post as PostProps } from '@/app/model/Post';
import Post from '@/app/(afterLogin)/_component/Post';
import { getComments } from '../_lib/getComments';

type Props = {
  id: string;
};
export default function Comments({ id }: Props) {
  const queryClient = useQueryClient();
  const post = queryClient.getQueryData(['posts', id]);
  const { data } = useQuery<
    PostProps[],
    Object,
    PostProps[],
    [_1: string, id: string, _3: string]
  >({
    queryKey: ['posts', id, 'comments'],
    queryFn: getComments,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    enabled: !!post,
  });

  if (post) {
    return data?.map((post) => <Post key={post.postId} post={post} />);
  }
  return null;
}
