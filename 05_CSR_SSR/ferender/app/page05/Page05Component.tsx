'use client';

import { useState } from "react";
import Button from "@/components/Button";

export default function Page05Component({ data }: { data: any[] }) {
  const [currentId, setCurrentId] = useState(1);

  if (!data || data.length === 0) return <div>Loading...</div>;

  const handlePostChange = (newId: number) => {
    setCurrentId(newId);
  };

  const currentPost = data.find(post => post.id === currentId);

  return (
    <>
      <p>Post ID: {currentPost?.id}</p>
      <p>Post Title: {currentPost?.title}</p>
      <div>
        <Button direction="prev" currentId={currentId} onPostChange={handlePostChange}>
          이전 포스트
        </Button>
        <Button direction="next" currentId={currentId} onPostChange={handlePostChange}>
          다음 포스트
        </Button>
      </div>
    </>
  )
}