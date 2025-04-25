'use server';

import Page06Component from './Page06Component';

export default async function Page06ServerComponent({ searchParams }: { searchParams: Types.SearchParams }) {
  const params = await searchParams;
  const postId = params?.postId ? Number(params.postId) : 1;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const data = await response.json();

  return (
    <Page06Component data={data} />
  )
}