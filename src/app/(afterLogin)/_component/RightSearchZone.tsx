'use client';

import SearchForm from './SearchForm';
import style from './rightSearchZone.module.css';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function RightSearchZone() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const onChangeAll = () => {
    setSelectedFilter('all');
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete('pf');
    router.replace(`/search?${newSearchParams.toString()}`);
  };
  const onChangeFollow = () => {
    setSelectedFilter('follow');
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('pf', 'on');
    router.replace(`/search?${newSearchParams.toString()}`);
  };

  useEffect(() => {
    const pfParam = searchParams.get('pf');
    if (pfParam === 'on') {
      setSelectedFilter('follow');
    } else {
      setSelectedFilter('all');
    }
  }, [searchParams]);
  if (pathname === '/explore') return null;
  if (pathname === '/search') {
    return (
      <div>
        <h5 className={style.filterTitle}>검색 필터</h5>
        <div className={style.filterSection}>
          <div>
            <label>사용자</label>
            <div className={style.radio}>
              <div>모든 사용자</div>
              <input
                type="radio"
                name="pf"
                checked={selectedFilter === 'all'}
                onChange={onChangeAll}
              />
            </div>
            <div className={style.radio}>
              <div>내가 팔로우하는 사람들</div>
              <input
                type="radio"
                name="pf"
                value="on"
                checked={selectedFilter === 'follow'}
                onChange={onChangeFollow}
              />
            </div>
            <label>위치</label>
            <div className={style.radio}>
              <div>어디에서나</div>
              <input type="radio" name="pf" />
            </div>
            <div className={style.radio}>
              <div>현 위치 주변</div>
              <input type="radio" name="pf" value="on" />
            </div>
            <div>고급 검색</div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div style={{ marginBottom: 60, width: 'inherit' }}>
      <SearchForm />
    </div>
  );
}
