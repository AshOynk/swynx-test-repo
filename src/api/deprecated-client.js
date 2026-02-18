// New dead file — added in this PR but never imported
export async function fetchUsers() {
  const res = await fetch('/api/users');
  return res.json();
}

export async function fetchPosts(userId) {
  const res = await fetch(`/api/users/${userId}/posts`);
  return res.json();
}

export function buildHeaders(token) {
  return {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
}
