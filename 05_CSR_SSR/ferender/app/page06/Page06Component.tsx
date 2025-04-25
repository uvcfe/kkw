'use client';

import { useRouter } from 'next/navigation';
import Button from "@/components/Button";

export default function Page06Component({ data }: { data: any }) {
  const router = useRouter();
  const postId = data.id;

  const handlePostChange = (newPostId: number) => {
    router.push(`?postId=${newPostId}`);
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