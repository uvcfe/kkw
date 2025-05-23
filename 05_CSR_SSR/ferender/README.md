## 프론트엔드 렌더링 방식

- [1] 서버 컴포넌트 도입 전 기존 방식 (CSR, SPA)
    1. page01 ~ page03은 모두 클라이언트 중심의 렌더링, fetch를 클라이언트에서 수행하고 상태로 제어합니다.

- [2] 서버 컴포넌트 도입 후 달라진 방식 (SSR + 하이드레이션)
    1. page04는 use server를 통해 서버에서 fetch하고 클라이언트에서 이벤트 처리합니다.  
    2. page05, page06은 서버 컴포넌트 + Suspense 구조로, 서버에서 데이터를 미리 받아 클라이언트에 props로 넘기며 초기 렌더링을 최적화합니다.

    > 서버 사이드 렌더링과 하이드레이션 방식은 서버 컴포넌트가 있을 경우에 해당되고  
    > 서버 컴포넌트가 적용되어있지 않은 일반 컴포넌트는 CSR로 렌더링 됩니다.


<br/><br/><br/><br/><br/>

## Client component, Server component 선택 기준
    - 클라이언트 컴포넌트 : 상호작용 많은 UI / 사용자 이벤트 처리
    - 서버 컴포넌트 : 초기 데이터 렌더링 / SEO / 성능 최적화

```
개인 의견) 직접 브라우저에서 테스트해본 결과

1.
기존 클라이언트 렌더링 방식은 대량의 Summary를 로드해야 하는 경우
브라우저에서 json 반환을 그대로 하게 되면 외부 스크래핑에 취약할 수 있으므로
Object 방식으로 response 하는 것이 일차적으로 데이터 수집을 저해할 수 있습니다.

2.
쿼리스트링을 필요로 하지 않고, 많은 데이터를 로드해야 하는 경우
Suspense로 wrap한 server component에서 데이터를 fetch하여
client component에 prop으로 전달하고 상태를 관리하는 방식인 page05 방식을 선택하면
초기에 콘텐츠 다운로드 시간을 제외하면 빠른 결과를 확인할 수 있었습니다.

3.
쿼리스트링을 필요로 하는 경우
    3-1.
    0.1초의 사용자 인터랙션이 필요한 경우라면
    초기 콘텐츠 다운로드 시간이 늦어지는 page06보다는 page03을 선택하여
    클라이언트 컴포넌트에서 데이터를 페칭하여 json으로 반환하는 것이 빠른 결과를 확인할 수 있었습니다.

    하지만 Nextjs는 기본적으로 SSR이기 때문에 route.push로 param을 전달하는 경우
    데이터 페칭과 동시에 param을 새로고침으로 인식하여 json과 RSC가 같이 로드되기에
    네트워크 요청이 두 번 발생됩니다.

    만약 page06 방식으로 선택하게 된다면
    사용자의 0.1초 동안 반복적인 요청에 대해 컨텐츠 다운로드 지연시간이 있으므로
    무한 반복 요청에 대한 네트워크 비용이 계속 발생되는 이상을 미리 감지하여
    적절한 이벤트로 대응을 할 수 있게 됩니다.
    
    3-2.
    사용자의 빠른 인터랙션을 필요로 하지 않는다면
    page06이 새로고침 시에 서버 컴포넌트에서 먼저 반환된 일부 리소스가 먼저 보여지기에
    페이지 전환과 직접 접속 목적으로는 page06 예제가 적절합니다.

4.
페이지에서 특별히 서버 요청을 많이 하는 경우가 아니라면
사용자와 관련된 정보만 보여줄 것인가
일반적인 데이터를 보여줄 것인가를 결정하여
클라이언트 컴포넌트와 서버 컴포넌트를 선택하면 됩니다.

리액트18에서 서버 컴포넌트 도입 후
데이터 페칭에서 비즈니스 로직을 어떻게 분리하는 것이 좋을지 고민하였으나
직접 케이스를 테스트해본 결과, 어느 것이 나은지는
페이지를 사용하는 목적에 따라 달라지게 된다는 결론을 내렸습니다.

이벤트 상태관리는 기본적으로 클라이언트 컴포넌트에서만 가능합니다.

데이터를 어느 곳에서 불러와서 어떤 방식으로 렌더링할 것인지는
페이지의 사용 목적과 사용자의 인터랙션 목적에 따라 달라지므로
상황에 맞게 클라이언트와 서버 컴포넌트를 적절히 선택하는 것이 좋아 보입니다.

```

<br/><br/><br/><br/><br/>

## Getting Started

```
1. 설치 및 실행
nextjs 설치 npx create-next-app
디렉토리, 페이지, 서버 컴포넌트, 클라이언트 컴포넌트 생성, type 추론 글로벌 적용
메인 공통 레이아웃에 nav 추가
개발 서버 실행 pnpm dev

2. 클라이언트 컴포넌트, 서버 컴포넌트 렌더링 확인하기
코드를 clone 받아서 이전/다음 버튼을 클릭하여 데이터를 받아오면서 동시에
서버 로그를 확인하고
브라우저 쿼리도 확인하고
브라우저 네트워크 응답/미리보기/페이로드/타이밍을 동시에 확인하면서
클라이언트와 서버 컴포넌트의 다른 점을 체크하면 됩니다.
```
