# 바이브 코딩 아카데미 — 기술명세서

## 1. 프로젝트 개요

| 항목 | 내용 |
|------|------|
| 프로젝트명 | 바이브 코딩 아카데미 (VibeCoding Academy) |
| 목적 | 주니어 개발자 대상 AI 기반 바이브 코딩 학습 플랫폼 |
| 대상 | 주니어 개발자 (기초 지식 보유, 바이브 코딩 방법론 학습 희망) |
| 배포 환경 | 로컬 개발 → 추후 Vercel(프론트) + Railway(백엔드) 배포 예정 |

---

## 2. 기술 스택

### 2.1 프론트엔드
| 기술 | 버전 | 용도 |
|------|------|------|
| React | 18.x | UI 컴포넌트 라이브러리 |
| Vite | 5.x | 빌드 도구 및 개발 서버 |
| Tailwind CSS | 3.x | 유틸리티 기반 스타일링 |
| React Router | 6.x | 클라이언트 사이드 라우팅 |
| Zustand | 4.x | 전역 상태 관리 (인증, 진도) |
| Monaco Editor | 0.x | 브라우저 기반 코드 에디터 (인터랙티브 실습) |
| Axios | 1.x | HTTP 클라이언트 |

### 2.2 백엔드
| 기술 | 버전 | 용도 |
|------|------|------|
| Node.js | 20.x | 런타임 환경 |
| Express | 4.x | REST API 서버 |
| better-sqlite3 | 9.x | 경량 SQLite 데이터베이스 |
| bcryptjs | 2.x | 비밀번호 해싱 |
| jsonwebtoken | 9.x | JWT 인증 토큰 |
| cors | 2.x | CORS 미들웨어 |

---

## 3. 프로젝트 구조

```
vibe-coding-academy/
├── frontend/                    # React + Vite 앱
│   ├── public/
│   ├── src/
│   │   ├── assets/              # 이미지, 아이콘
│   │   ├── components/          # 재사용 컴포넌트
│   │   │   ├── layout/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   └── Footer.jsx
│   │   │   ├── ui/
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Badge.jsx
│   │   │   │   ├── ProgressBar.jsx
│   │   │   │   └── CodeEditor.jsx
│   │   │   └── course/
│   │   │       ├── CourseCard.jsx
│   │   │       ├── LessonSidebar.jsx
│   │   │       └── RoadmapNode.jsx
│   │   ├── pages/               # 라우트별 페이지 컴포넌트
│   │   │   ├── LandingPage.jsx
│   │   │   ├── RoadmapPage.jsx
│   │   │   ├── CoursesPage.jsx
│   │   │   ├── CourseDetailPage.jsx
│   │   │   ├── LessonPage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   └── RegisterPage.jsx
│   │   ├── data/                # 정적 커리큘럼 데이터
│   │   │   └── curriculum.js
│   │   ├── store/               # Zustand 스토어
│   │   │   ├── authStore.js
│   │   │   └── progressStore.js
│   │   ├── api/                 # API 호출 모듈
│   │   │   └── client.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
└── backend/                     # Express API 서버
    ├── routes/
    │   ├── auth.js              # 회원가입, 로그인
    │   └── progress.js          # 학습 진도 CRUD
    ├── middleware/
    │   └── auth.js              # JWT 검증 미들웨어
    ├── db/
    │   └── init.js              # SQLite 스키마 초기화
    ├── server.js
    └── package.json
```

---

## 4. 데이터베이스 스키마 (SQLite)

```sql
-- 사용자 테이블
CREATE TABLE users (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  email      TEXT    UNIQUE NOT NULL,
  password   TEXT    NOT NULL,
  name       TEXT    NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 학습 진도 테이블
CREATE TABLE progress (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id    INTEGER NOT NULL REFERENCES users(id),
  lesson_id  TEXT    NOT NULL,
  completed  INTEGER DEFAULT 0,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, lesson_id)
);
```

---

## 5. API 명세

### 5.1 인증 API (`/api/auth`)

| Method | Endpoint | 설명 | 인증 필요 |
|--------|----------|------|----------|
| POST | `/api/auth/register` | 회원가입 | ✗ |
| POST | `/api/auth/login` | 로그인 (JWT 발급) | ✗ |
| GET | `/api/auth/me` | 현재 사용자 정보 | ✓ |

#### POST /api/auth/register
```json
Request:  { "name": "홍길동", "email": "user@example.com", "password": "pass1234" }
Response: { "token": "<JWT>", "user": { "id": 1, "name": "홍길동", "email": "..." } }
```

#### POST /api/auth/login
```json
Request:  { "email": "user@example.com", "password": "pass1234" }
Response: { "token": "<JWT>", "user": { "id": 1, "name": "홍길동", "email": "..." } }
```

### 5.2 진도 API (`/api/progress`)

| Method | Endpoint | 설명 | 인증 필요 |
|--------|----------|------|----------|
| GET | `/api/progress` | 내 전체 진도 조회 | ✓ |
| POST | `/api/progress/:lessonId` | 레슨 완료 처리 | ✓ |
| DELETE | `/api/progress/:lessonId` | 레슨 완료 취소 | ✓ |

---

## 6. 페이지 구성

### 6.1 랜딩 페이지 (`/`)
- Hero 섹션: 타이틀, 서브타이틀, CTA 버튼
- Features 섹션: 플랫폼 3대 특징
- 커리큘럼 미리보기: 모듈 3개 카드
- 통계 섹션: 학습자 수, 강의 수, 프로젝트 수

### 6.2 로드맵 페이지 (`/roadmap`)
- 시각적 학습 경로 (3단계 플로우)
- 각 노드: 주제명, 예상 시간, 완료 여부
- 단계: 기초(AI 도구) → 심화(프롬프트 엔지니어링) → 실전(프로젝트)

### 6.3 강의 목록 페이지 (`/courses`)
- 모듈별 탭 필터
- 강의 카드 그리드 (썸네일, 제목, 태그, 레슨 수, 진도율)

### 6.4 강의 상세 페이지 (`/courses/:id`)
- 강의 소개, 학습 목표, 사전 지식
- 목차 (레슨 리스트)
- 수강 시작 CTA

### 6.5 레슨 페이지 (`/courses/:id/lessons/:lessonId`)
- 사이드바: 레슨 목록 + 진도 표시
- 본문: 마크다운 렌더링된 강의 내용
- 인터랙티브 실습: Monaco Editor + 실행 결과
- 하단: 이전/다음 레슨 네비게이션, 완료 버튼

---

## 7. 커리큘럼 구성

### Module 1: AI 도구 활용법 (5레슨)
1. 바이브 코딩이란?
2. AI 코딩 도구 생태계 (Cursor, Copilot, Claude)
3. Cursor IDE 완벽 세팅
4. AI와 페어 프로그래밍하기
5. 코드 리뷰를 AI에게 맡기기

### Module 2: 프롬프트 엔지니어링 (5레슨)
1. 좋은 프롬프트의 원칙
2. Chain-of-Thought 프롬프팅
3. 시스템 프롬프트 설계
4. 반복 개선 (Iterative Prompting)
5. 프롬프트 템플릿 라이브러리 만들기

### Module 3: 실전 프로젝트 (5레슨)
1. 프로젝트 아이디어 → 요구사항 정의
2. AI로 아키텍처 설계하기
3. 빠른 프로토타이핑 (Rapid Prototyping)
4. 버그 디버깅 & 리팩터링
5. 배포 및 출시

---

## 8. 디자인 시스템

### 색상 팔레트
```
Primary:   #6366F1 (Indigo 500) — 주요 브랜드 색상
Secondary: #8B5CF6 (Violet 500) — 보조 색상
Accent:    #06B6D4 (Cyan 500)   — 강조 색상
Success:   #10B981 (Emerald 500)
Dark BG:   #0F172A (Slate 900)
Card BG:   #1E293B (Slate 800)
Text:      #F8FAFC (Slate 50)
Muted:     #94A3B8 (Slate 400)
```

### 타이포그래피
- 제목: Inter (Bold/SemiBold)
- 본문: Inter (Regular)
- 코드: JetBrains Mono

---

## 9. 개발 환경 설정

```bash
# 프론트엔드 실행
cd frontend
npm install
npm run dev          # http://localhost:5173

# 백엔드 실행
cd backend
npm install
npm run dev          # http://localhost:3001
```

환경 변수 (frontend/.env):
```
VITE_API_URL=http://localhost:3001
```

환경 변수 (backend/.env):
```
PORT=3001
JWT_SECRET=your-secret-key
```

---

## 10. 확장 로드맵

| 단계 | 기능 | 시기 |
|------|------|------|
| v1.0 | 현재 MVP (정적 콘텐츠 + 인증 + 진도) | 현재 |
| v1.1 | 댓글/질문 시스템 | 다음 분기 |
| v1.2 | AI 챗봇 튜터 (Claude API 연동) | 다음 분기 |
| v2.0 | 동영상 강의 통합, 퀴즈, 수료증 | 장기 계획 |
