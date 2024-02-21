import HomePage from "@/app/(afterLogin)/home/page";

type Props = {
  params: {
    username: string;
    id: string;
    photoId: string;
  };
};
export default function PhotoPage(params: Props) {
  return <HomePage />;
}
