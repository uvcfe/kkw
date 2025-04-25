'use server';

export const Page04ComponentData = async (postId: number) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const jsonData = await response.json() as Types.PostData;
  return jsonData;
}
