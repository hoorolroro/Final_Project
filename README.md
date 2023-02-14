# 마신사 프로젝트
<img width="840" alt="마신사" src="https://user-images.githubusercontent.com/109947297/210025408-26e6c4e1-eebc-4c6a-92f3-56ad147e9939.png">

### [프로젝트 기획 배경]
- 마스크 사이즈에 대한 표준 규격이 존재하지 않음
- 리뷰를 읽고 제품에 대해 파악하는 많은 비용과 시간 소요
- 평점을 제외하고는 통계적인 수치를 제공하지 않아 의사결정의 어려움

### [프로젝트 목적]
- 기존 쇼핑몰의 마스크 리뷰를 수집하여 자연어처리로 분석 및 시각화하여 제공
- 다양한 마스크를 비교 및 확인하고 만족스러운 마스크 구매를 돕는 웹 서비스 구현

### [프로젝트 진행 과정]
- 주제 선정 -> 데이터 수집 -> BMC(Business Model Canvas) 설계 -> 유저 스토리 설계 -> 화면 구성 설계 -> 기능 정의서 작성 및 기술 스택 결정 -> API 명세서 작성 -> DB 설계 -> 개발진행(프론트엔드/백엔드/머신러닝 파트로 분담) -> 프로젝트 배포 및 보고서 작성

### [머신러닝 진행 파트]
- KNU 한국어 감성사전를 마스크 리뷰 데이터에 맞게 추가 및 구정 -> 마스크 리뷰 데이터를 Mecab 형태소 분리기로 분리 -> 사이즈, 호흡, 착용감, 배송을 언급한 문장들의 감정분류 -> 알고리즘을 통해 점수화해서 사용자에게 전달

### [사용한 기술 스택]
1. DB
    - MySQL
2. 전처리
    - Python (Selenium)
3. ML/DL
    - KoNLPy
4. 언어
    - Java
    - CSS
    - HTML
    - JavaScript
    - Python
5. 프레임워크
    - React
    - chart.js
    - SpringBoot
    - MyBatis
6. Deploy
    - GCP (SQL Server)
    - Docker
7. Tool
    - Git
    - Notion
    - Slack
    - PostMan
    - Swagger
    - Figma
8. IDE
    - VScode
    - STS
9. 3rd Party API
    - 네이버 로그인 API
    - 네이버 회원 프로필 조회 API


