'use client';

import { useEffect, useState } from "react";
import Button from "@/components/Button";

export default function Page01Component() {
  const [data, setData] = useState<Types.PostData>({ title: '', body: '' });
  const [postId, setPostId] = useState(1);

  const Page01ComponentData = async (postId: number) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const jsonData = await response.json() as Types.PostData;
    setData(jsonData);
  }

  useEffect(() => {
    Page01ComponentData(postId);
  }, [postId]);

  return (
    <>
      <p>Post ID: {postId}</p>
      <p>Post Title: {data.title}</p>
      <div>
        <Button direction="prev" currentId={postId} onPostChange={setPostId}>
          이전 포스트
        </Button>
        <Button direction="next" currentId={postId} onPostChange={setPostId}>
          다음 포스트
        </Button>
      </div>
    </>
  )
}