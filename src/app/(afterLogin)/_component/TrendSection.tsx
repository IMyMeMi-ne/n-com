'use client';
import style from './trendSection.module.css';
import Trend from './Trend';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useQuery } from '@tanstack/react-query';
import { getTrends } from '../_lib/getTrends';
import { Hashtag } from '@/app/model/Hashtag';

export default function TrendSection() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const { data } = useQuery<Hashtag[]>({
    queryKey: ['trends'],
    queryFn: getTrends,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    enabled: !!session?.user,
  });
  if (pathname === '/explore') return null;
  if (session?.user) {
    return (
      <div className={style.trendBg}>
        <div className={style.trend}>
          <h3>나를 위한 트렌드</h3>
          {data?.map((trend) => {
            return <Trend key={trend.title} trend={trend} />;
          })}
        </div>
      </div>
    );
  }

  return (
    <div className={style.trendBg}>
      <div className={style.noTrend}>트랜드를 가져올 수 없습니다.</div>
    </div>
  );
}
