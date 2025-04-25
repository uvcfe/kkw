# 데이터 구조화 포맷 예제

## 1. HTML (HyperText Markup Language)
- 웹 페이지를 구조화하는 마크업 언어
- 태그를 사용하여 데이터를 구조화
- 시맨틱 태그를 사용하여 의미를 명확히 표현
- 브라우저에서 직접 렌더링 가능
- 주로 웹 페이지의 구조와 내용을 표현하는데 사용

예시:
```html
<article>
    <h1>User Profile</h1>
    <section>
        <h2>Personal Information</h2>
        <ul>
            <li><strong>Name:</strong> John Doe</li>
            <li><strong>Age:</strong> 30</li>
        </ul>
    </section>
</article>
```

## 2. XML (eXtensible Markup Language)
- 데이터를 태그로 구조화하는 마크업 언어
- 사용자 정의 태그를 만들 수 있음
- 데이터 교환과 저장에 주로 사용
- 계층적 구조를 명확하게 표현
- 스키마(XSD)를 통해 데이터 구조를 정의 가능

예시:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<userProfile>
    <personalInformation>
        <name>John Doe</name>
        <age>30</age>
    </personalInformation>
</userProfile>
```

## 3. JSON (JavaScript Object Notation)
- JavaScript 객체 표기법을 기반으로 한 경량 데이터 교환 형식
- 키-값 쌍으로 데이터를 구조화
- 프로그래밍 언어에서 쉽게 파싱 가능
- 웹 API에서 가장 많이 사용되는 데이터 형식
- 중첩된 구조를 표현하기 쉬움

예시:
```json
{
    "userProfile": {
        "personalInformation": {
            "name": "John Doe",
            "age": 30
        }
    }
}
```

## 4. YAML (YAML Ain't Markup Language)
- 들여쓰기를 사용하여 데이터를 구조화
- 가독성이 매우 좋음
- 설정 파일에 자주 사용
- 주석을 지원
- 복잡한 데이터 구조를 간단하게 표현 가능

예시:
```yaml
userProfile:
  personalInformation:
    name: John Doe
    age: 30
  skills:
    - HTML
    - CSS
```

## 각 포맷의 주요 사용 사례

- HTML: 웹 페이지 구조화, 웹 콘텐츠 표현
- XML: 데이터 교환, 설정 파일, 문서 저장
- JSON: 웹 API, 데이터 교환, 설정 저장
- YAML: 설정 파일, CI/CD 파이프라인, 데이터 직렬화 