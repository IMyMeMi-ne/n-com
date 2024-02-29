import style from './post.module.css';
import Link from 'next/link';
import { ReactNode } from 'react';
import cx from 'classnames';
import { Post } from '@/app/model/Post';

type Props = {
  children?: ReactNode;
  post: Post;
};

export default function PostImages({ post }: Props) {
  if (!post.Images) return null;
  if (!post.Images.length) return null;
  if (post.Images.length === 1) {
    return (
      post.Images?.length > 0 && (
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
          className={cx(style.postImageSection, style.oneImage)}
          style={{
            backgroundImage: `url(${post.Images[0]?.link})`,
            backgroundSize: 'cover',
          }}
        >
          <img src={post.Images[0]?.link} alt="" />
        </Link>
      )
    );
  }
  if (post.Images.length === 2) {
    return (
      post.Images?.length > 0 && (
        <div className={cx(style.postImageSection, style.twoImages)}>
          <Link
            href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
            style={{
              backgroundImage: `url(${post.Images[0]?.link})`,
              backgroundSize: 'cover',
            }}
          />
          <Link
            href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[1].imageId}`}
            style={{
              backgroundImage: `url(${post.Images[1]?.link})`,
              backgroundSize: 'cover',
            }}
          />
        </div>
      )
    );
  }
  if (post.Images.length === 3) {
    return (
      post.Images?.length > 0 && (
        <div className={cx(style.postImageSection, style.threeImages)}>
          <Link
            href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
            style={{
              width: '100%',
              height: '100%',
              backgroundImage: `url(${post.Images[0]?.link})`,
              backgroundSize: 'cover',
            }}
          />
          <div>
            <Link
              href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[1].imageId}`}
              style={{
                height: '50%',
                backgroundImage: `url(${post.Images[1]?.link})`,
                backgroundSize: 'cover',
              }}
            />
            <Link
              href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[2].imageId}`}
              style={{
                height: '50%',
                backgroundImage: `url(${post.Images[2]?.link})`,
                backgroundSize: 'cover',
              }}
            />
          </div>
        </div>
      )
    );
  }
  if (post.Images.length === 4) {
    return (
      post.Images?.length > 0 && (
        <div className={cx(style.postImageSection, style.fourImages)}>
          <Link
            href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
            style={{
              backgroundImage: `url(${post.Images[0]?.link})`,
              backgroundSize: 'cover',
            }}
          />
          <Link
            href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[1].imageId}`}
            style={{
              backgroundImage: `url(${post.Images[1]?.link})`,
              backgroundSize: 'cover',
            }}
          />
          <Link
            href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[2].imageId}`}
            style={{
              backgroundImage: `url(${post.Images[2]?.link})`,
              backgroundSize: 'cover',
            }}
          />
          <Link
            href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[3].imageId}`}
            style={{
              backgroundImage: `url(${post.Images[3]?.link})`,
              backgroundSize: 'cover',
            }}
          />
        </div>
      )
    );
  }
  return null;
}
