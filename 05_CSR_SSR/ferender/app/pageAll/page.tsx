import { Suspense } from "react";
import Page01Component from "../page01/Page01Component";
import Page02Component from "../page02/Page02Component";
import Page03Component from "../page03/Page03Component";
import Page04Component from "../page04/Page04Component";
import Page05ServerComponent from "../page05/Page05ServerComponent";
import Page06ServerComponent from "../page06/Page06ServerComponent";

export default function Page({ searchParams }: any) {
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
      <section>
        <h2>Page 02</h2>
        <ul className="page-info client-component">
          <li><span>1. 구성</span> : Client + 분리 fetch</li>
          <li><span>2. 특징</span> : fetch 분리 후 import 사용</li>
          <li><span>3. 데이터 fetch 위치</span> : 클라이언트 내부 (외부 함수 import)</li>
          <li><span>4. 이벤트 처리</span> : 클라이언트에서 버튼 클릭으로 상태 변경</li>
          <li><span>5. 응답 형태</span> : JSON</li>
          <li><span>6. 페이로드</span> : 없음</li>
        </ul>
        <div className="component-container">
          <Page02Component />
        </div>
      </section>
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
      <section>
        <h2>Page 06</h2>
        <ul className="page-info server-component">
          <li><span>1. 구성</span> : Suspense + Server + Client + Query String</li>
          <li><span>2. 특징</span> : 서버 컴포넌트에서 fetch, 클라이언트 컴포넌트에서 이벤트 상태 관리, Suspense로 감싸기</li>
          <li><span>3. 데이터 fetch 위치</span> : 서버 컴포넌트</li>
          <li><span>4. 이벤트 처리</span> : 클라이언트에서 버튼 클릭으로 상태 변경</li>
          <li><span>5. 응답 형태</span> : Object</li>
          <li><span>6. 페이로드</span> : postId, _rsc</li>
        </ul>
        <div className="component-container">
          <Suspense fallback={<div>서버 데이터 로딩중...</div>}>
            <Page06ServerComponent searchParams={searchParams} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
