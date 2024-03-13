'use client';

import Trend from '../../_component/Trend';
import { useQuery } from '@tanstack/react-query';
import { getTrends } from '../../_lib/getTrends';
import { Hashtag } from '@/app/model/Hashtag';

export default function ExploreTrendSection() {
  const { data } = useQuery<Hashtag[]>({
    queryKey: ['trends'],
    queryFn: getTrends,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
  return data?.map((trends) => <Trend key={trends.tagId} trend={trends} />);
}
