'use client';

import style from '../search.module.css';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
export default function Tab() {
  const [current, setCurrent] = useState('hot');
  const router = useRouter();
  const searchParams = useSearchParams();
  const onClickHot = () => {
    setCurrent('hot');
    let url = `/search?q=${searchParams.get('q')}`;
    if (searchParams.has('pf')) {
      url += `&pf=${searchParams.get('pf')}`;
    }
    router.replace(url);
  };
  const onClickNew = () => {
    setCurrent('new');
    router.replace(`/search?q=${searchParams.get('q')}&f=live`);
    if (searchParams.has('pf')) {
      router.replace(
        `/search?q=${searchParams.get('q')}&f=live&pf=${searchParams.get('pf')}`
      );
    }
  };

  return (
    <div className={style.homeFixed}>
      <div className={style.homeTab}>
        <div onClick={onClickHot}>
          인기
          <div className={style.tabIndicator} hidden={current === 'new'}></div>
        </div>
        <div onClick={onClickNew}>
          최신
          <div className={style.tabIndicator} hidden={current === 'hot'}></div>
        </div>
      </div>
    </div>
  );
}
