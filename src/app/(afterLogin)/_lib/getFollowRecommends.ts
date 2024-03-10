export async function getFollowRecommends() {
  const res = await fetch(`http://localhost:9090/api/users/followRecommends`, {
    next: {
      tags: ['users', 'followRecommends'],
    },
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
}
