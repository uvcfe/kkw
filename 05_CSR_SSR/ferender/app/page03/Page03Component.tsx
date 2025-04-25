'use client';

import { useEffect, useState } from "react";
import { Page03ComponentData } from "./Page03ComponentData";
import Button from "@/components/Button";
import { useRouter, useSearchParams } from "next/navigation";

export default function Page03Component() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [data, setData] = useState<Types.PostData>({ title: '', body: '' });
  const postId = Number(searchParams.get('id')) || 1;

  useEffect(() => {
    Page03ComponentData(postId).then(setData);
  }, [postId]);

  const handlePostChange = (newId: number) => {
    router.push(`?id=${newId}`);
  };

  return (
    <>
      <p>Post ID: {postId}</p>
      <p>Post Title: {data.title}</p>
      <div>
        <Button direction="prev" currentId={postId} onPostChange={handlePostChange}>
          이전 포스트
        </Button>
        <Button direction="next" currentId={postId} onPostChange={handlePostChange}>
          다음 포스트
        </Button>
      </div>
    </>
  )
}