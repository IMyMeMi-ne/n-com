'use client';
import style from './followRecommend.module.css';
import Image from 'next/image';
import FollowButton from './FollowButton';

type fakeUserProps = {
  id: string;
  hashTag: string;
  image: any;
};
export default function FollowRecommend() {
  const fakeUser: fakeUserProps = {
    id: 'iMyMemine',
    hashTag: '@namhyun',
    image: '/darkXLogo.jpg',
  };
  return (
    <div className={style.container}>
      <div className={style.userLogoSection}>
        <div className={style.userLogo}>
          <Image
            src={fakeUser.image}
            width={40}
            height={40}
            alt={fakeUser.id}
          />
        </div>
      </div>
      <div className={style.userInfo}>
        <div className={style.userId}>{fakeUser.id}</div>
        <div className={style.userHashTag}>{fakeUser.hashTag}</div>
      </div>
      <FollowButton />
    </div>
  );
}
