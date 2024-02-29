import { PostImage } from './PostImage';
import { User } from './User';
export interface Post {
  postId: number;
  content: string;
  createdAt: Date;
  Images: PostImage[];
  User: User;
}
