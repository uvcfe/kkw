import { Suspense } from "react";
import Page05ServerComponent from "./Page05ServerComponent";

export default function Page() {
  return (
    <>
      <section>
        <h2>Page 05</h2>
        <ul className="page-info server-component">
          <li><span>1. 구성</span> : Suspense + Server + Client</li>
          <li><span>2. 특징</span> : 서버 컴포넌트에서 전체 리스트 fetch 후 클라이언트에 props 전달</li>
          <li><span>3. 데이터 fetch 위치</span> : 서버 컴포넌트</li>
          <li><span>4. 이벤트 처리</span> : 클라이언트에서 인덱스 기반 이벤트 처리</li>
          <li><span>5. 응답 형태</span> : Object[]</li>
          <li><span>6. 페이로드</span> : postId, _rsc</li>
        </ul>
        <div className="component-container">
          <Suspense fallback={<div>서버 데이터 로딩중...</div>}>
            <Page05ServerComponent />
          </Suspense>
        </div>
      </section>
    </>
  );
}
