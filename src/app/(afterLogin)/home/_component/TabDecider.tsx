'use client';

import FollowingPosts from './FollowingPosts';
import PostRecommends from './PostRecommends';
import { useContext } from 'react';
import { TabContext } from './TabProvider';

export default function TabDecider() {
  const { tab } = useContext(TabContext);
  if (tab === 'rec') {
    return <PostRecommends />;
  }
  return <FollowingPosts />;
}
