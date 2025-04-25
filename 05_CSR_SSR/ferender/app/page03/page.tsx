import Page03Component from "./Page03Component";

export default function Page() {
  return (
    <>
      <section>
        <h2>Page 03</h2>
        <ul className="page-info client-component">
          <li><span>1. 구성</span> : Client + URL 파라미터</li>
          <li><span>2. 특징</span> : 쿼리스트링에 따라 동적 fetch</li>
          <li><span>3. 데이터 fetch 위치</span> : 클라이언트 내부 (외부 함수 import)</li>
          <li><span>4. 이벤트 처리</span> : 클라이언트에서 router.push 사용</li>
          <li><span>5. 응답 형태</span> : JSON</li>
          <li><span>6. 페이로드</span> : 없음</li>
        </ul>
        <div className="component-container">
          <Page03Component />
        </div>
      </section>
    </>
  );
}
