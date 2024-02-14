import style from "./trend.module.css";
import Link from "next/link";
export default function Trend() {
  return (
    <Link href={`/search?q=트랜드`} className={style.container}>
      <div className={style.count}>실시간 트랜드</div>
      <div className={style.title}>남현</div>
      <div className={style.count}>1,234 posts</div>
    </Link>
  );
}
