'use server';

import Page05Component from './Page05Component';

export default async function Page05ServerComponent() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();

  return (
    <Page05Component data={data} />
  )
}