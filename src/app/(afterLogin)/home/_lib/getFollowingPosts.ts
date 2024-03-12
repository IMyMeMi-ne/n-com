export async function getFollowingPosts() {
  const res = await fetch('http://localhost:9090/api/posts/followings', {
    next: {
      tags: ['posts', 'followings'],
    },
    credentials: 'include',
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
}
