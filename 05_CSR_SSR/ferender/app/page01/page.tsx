'use client';

import Page01Component from "./Page01Component";

export default function Page() {
  return (
    <>
      <section>
        <h2>Page 01</h2>
        <ul className="page-info client-component">
          <li><span>1. 구성</span> : Client 단독</li>
          <li><span>2. 특징</span> : fetch, 이벤트 모두 클라이언트</li>
          <li><span>3. 데이터 fetch 위치</span> : 클라이언트 내부</li>
          <li><span>4. 이벤트 처리</span> : 클라이언트에서 버튼 클릭으로 상태 변경</li>
          <li><span>5. 응답 형태</span> : JSON</li>
          <li><span>6. 페이로드</span> : 없음</li>
        </ul>
        <div className="component-container">
          <Page01Component />
        </div>
      </section>
    </>
  );
}
