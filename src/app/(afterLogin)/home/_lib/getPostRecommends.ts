type Props = { pageParam?: number };
export async function getPostRecommends({ pageParam }: Props) {
  const res = await fetch(
    `http://localhost:9090/api/posts/recommends/?cursor=${pageParam}`,
    {
      next: {
        tags: ['posts', 'recommends'],
      },
      credentials: 'include',
    }
  );
  if (!res.ok) {
    throw new Error('서버 에러');
  }
  return res.json();
}
