export async function getSearchResult() {
  const res = await fetch('http://localhost:9090/api/searchResult', {
    next: {
      tags: ['search'],
    },
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('서버 에러');
  }
  return res.json();
}
