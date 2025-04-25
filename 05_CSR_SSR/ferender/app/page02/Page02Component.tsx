'use client';

import { useEffect, useState } from "react";
import { Page02ComponentData } from "./Page02ComponentData";
import Button from "@/components/Button";

export default function Page02Component() {
  const [data, setData] = useState<Types.PostData>({ title: '', body: '' });
  const [postId, setPostId] = useState(1);

  useEffect(() => {
    Page02ComponentData(postId).then(setData);
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