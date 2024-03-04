import style from './trend.module.css';
import Link from 'next/link';

type Prop = {
  trend: { tagId?: number; title?: string; count?: number };
};
export default function Trend({ trend }: Prop) {
  return (
    <Link href={`/search?q=트랜드`} className={style.container}>
      <div className={style.count}>실시간 트랜드</div>
      <div className={style.title}>{trend.title}</div>
      <div className={style.count}>{trend.count?.toLocaleString()}</div>
    </Link>
  );
}
