export const getSinglePost = async ({
  queryKey,
}: {
  queryKey: [string, string];
}) => {
  const [_1, id] = queryKey;
  const res = await fetch(`http://localhost:9090/api/posts/${id}`, {
    next: {
      tags: ['posts', id],
    },
    credentials: 'include',
  });
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};
