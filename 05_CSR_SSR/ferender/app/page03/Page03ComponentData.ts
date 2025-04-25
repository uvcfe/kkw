'use client';

export const Page03ComponentData = async (postId: number) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const jsonData = await response.json() as Types.PostData;
  return jsonData;
}
