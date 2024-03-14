interface UserId {
  userId: string;
}
export interface User {
  id: string;
  nickname: string;
  image: string;
  Followers: UserId[];
  _count: {
    Followers: number;
    Followings: number;
  };
}
