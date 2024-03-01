export async function getPostRecommends() {
  const res = await fetch('http://localhost:9090/api/postRecommends', {
    next: {
      tags: ['posts', 'recommends'],
    },
  });
  if (!res.ok) {
    throw new Error('서버 에러');
  }
  return res.json();
}
