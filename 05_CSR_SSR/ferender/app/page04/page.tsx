'use client';

import Page04Component from "./Page04Component";

export default function Page() {
  return (
    <>
      <section>
        <h2>Page 04</h2>
        <ul className="page-info server-component">
          <li><span>1. 구성</span> : Server + Client</li>
          <li><span>2. 특징</span> : use server로 fetch 실행 후 클라이언트에서 호출</li>
          <li><span>3. 데이터 fetch 위치</span> : 서버 컴포넌트</li>
          <li><span>4. 이벤트 처리</span> : 클라이언트에서 상태 관리</li>
          <li><span>5. 응답 형태</span> : Object</li>
          <li><span>6. 페이로드</span> : postId</li>
        </ul>
        <div className="component-container">
          <Page04Component />
        </div>
      </section>
    </>
  );
}
