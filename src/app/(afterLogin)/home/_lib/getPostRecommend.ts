export async function getPostRecommend() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/postRecommends`, {
    next: {
      tags: ['post', 'recommends'],
    },
  });
  if (!res.ok) {
    throw new Error('서버 에러');
  }
  return res.json();
}
