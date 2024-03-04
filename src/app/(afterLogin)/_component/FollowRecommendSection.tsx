'use client';

import { useQuery } from '@tanstack/react-query';
import { User } from '@/app/model/User';
import { getFollowRecommends } from '../_lib/getFollowRecommends';
import FollowRecommend from './FollowRecommend';

export default function FollowRecommendSection() {
  const { data } = useQuery<User[]>({
    queryKey: ['users', 'followRecommends'],
    queryFn: getFollowRecommends,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
  return data?.map((user) => <FollowRecommend key={user.id} user={user} />);
}
