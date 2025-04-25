'use client';

import { useState, useEffect } from "react";
import { Page04ComponentData } from "./Page04ComponentData";
import Button from "@/components/Button";

export default function Page04Component() {
  const [data, setData] = useState<Types.PostData>({ title: '', body: '' });
  const [postId, setPostId] = useState(1);

  useEffect(() => {
    Page04ComponentData(postId).then(setData);
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