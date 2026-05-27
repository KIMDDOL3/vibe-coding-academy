export const modules = [
  {
    id: 'module-1',
    title: 'AI 도구 활용법',
    subtitle: '바이브 코딩의 핵심 도구를 마스터하세요',
    icon: '🤖',
    color: 'from-indigo-500 to-purple-600',
    borderColor: 'border-indigo-500',
    badgeColor: 'bg-indigo-500/20 text-indigo-300',
    estimatedHours: 4,
    lessons: [
      {
        id: 'm1-l1',
        title: '바이브 코딩이란?',
        duration: '20분',
        type: 'theory',
        content: `# 바이브 코딩이란?

바이브 코딩(Vibe Coding)은 AI 도구를 활용하여 **직관적이고 빠르게** 소프트웨어를 개발하는 새로운 패러다임입니다.

## 핵심 개념

전통적인 개발 방식은 개발자가 모든 코드를 직접 작성하고, 문법과 API를 암기해야 했습니다. 바이브 코딩은 이와 달리:

- **의도(Intent)** 를 자연어로 표현하면 AI가 코드를 생성
- **결과물에 집중**하고 구현 세부사항은 AI에게 위임
- **빠른 반복(Rapid Iteration)** 으로 아이디어를 즉시 검증

## 왜 바이브 코딩인가?

> "좋은 코드를 빠르게 작성하는 것보다, 올바른 것을 빠르게 만드는 것이 더 중요합니다."

바이브 코딩은 개발 생산성을 **5~10배** 향상시킬 수 있는 잠재력을 가지고 있습니다.

## 핵심 원칙

1. **명확한 의도 전달** — AI에게 무엇을 만들지 정확하게 설명
2. **빠른 검증** — 만든 것을 즉시 테스트하고 피드백
3. **반복적 개선** — AI와 대화하며 코드를 점진적으로 개선
4. **이해 유지** — AI가 생성한 코드를 이해하고 책임지기

## 실습 과제

아래 코드 에디터에서 JavaScript 변수를 선언하고 콘솔에 출력해보세요.`,
        exercise: {
          instruction: 'name 변수에 자신의 이름을 넣고, 콘솔에 "안녕하세요, [이름]님!" 을 출력하세요.',
          starterCode: `// 이름 변수를 선언하세요
const name = '';

// 콘솔에 인사말을 출력하세요
console.log('안녕하세요, ' + name + '님!');`,
          solution: `const name = '홍길동';
console.log('안녕하세요, ' + name + '님!');`,
        },
      },
      {
        id: 'm1-l2',
        title: 'AI 코딩 도구 생태계',
        duration: '30분',
        type: 'theory',
        content: `# AI 코딩 도구 생태계

현재 사용 가능한 주요 AI 코딩 도구들을 살펴봅니다.

## 주요 도구 비교

| 도구 | 특징 | 최적 용도 |
|------|------|----------|
| **Cursor** | AI-first IDE, 전체 코드베이스 이해 | 복잡한 프로젝트 개발 |
| **GitHub Copilot** | VSCode 통합, 코드 자동완성 | 일상적인 코딩 보조 |
| **Claude** | 깊은 추론, 긴 컨텍스트 | 설계, 리뷰, 문서화 |
| **ChatGPT** | 범용 AI, 광범위한 지식 | 학습, 아이디어 탐색 |

## Cursor — 바이브 코딩의 핵심

Cursor는 바이브 코딩에 가장 최적화된 IDE입니다.

### 핵심 기능

- **Cmd+K** — 선택한 코드를 자연어로 수정
- **Cmd+L** — AI와 채팅하며 코드 생성
- **@파일명** — 특정 파일을 컨텍스트로 포함
- **Composer** — 여러 파일에 걸친 대규모 변경

## Claude — 설계와 아키텍처의 파트너

Claude는 단순한 코드 생성을 넘어 시스템 설계와 복잡한 로직에 강점을 보입니다.

\`\`\`
좋은 Claude 프롬프트 예시:

"React 앱에서 사용자 인증을 구현해야 합니다.
JWT를 사용하고, 로그인/로그아웃/회원가입 기능이 필요합니다.
보안 모범 사례를 적용해주세요."
\`\`\`

## 실습 과제

아래 코드를 수정하여 두 숫자를 더하는 함수를 완성하세요.`,
        exercise: {
          instruction: '두 숫자를 입력받아 합계를 반환하는 add 함수를 완성하고, add(3, 7)의 결과를 출력하세요.',
          starterCode: `// add 함수를 완성하세요
function add(a, b) {
  // 여기에 코드를 작성하세요
}

// 결과를 출력하세요
console.log(add(3, 7)); // 10이 출력되어야 합니다`,
          solution: `function add(a, b) {
  return a + b;
}
console.log(add(3, 7)); // 10`,
        },
      },
      {
        id: 'm1-l3',
        title: 'Cursor IDE 완벽 세팅',
        duration: '45분',
        type: 'hands-on',
        content: `# Cursor IDE 완벽 세팅

Cursor를 설치하고 바이브 코딩에 최적화된 환경을 구성합니다.

## 설치 및 초기 설정

### 1. Cursor 다운로드
[cursor.sh](https://cursor.sh) 에서 운영체제에 맞는 버전을 다운로드합니다.

### 2. 모델 설정
\`Cursor Settings > Models\` 에서 선호하는 AI 모델을 선택합니다.
- **claude-3-5-sonnet** — 코드 품질 최우선
- **gpt-4o** — 속도와 품질 균형
- **cursor-small** — 빠른 자동완성

### 3. Rules for AI 설정
프로젝트별 AI 행동 지침을 설정합니다.

\`\`\`
# .cursorrules 예시

당신은 React + TypeScript 전문 개발자입니다.
- 함수형 컴포넌트와 훅을 사용하세요
- 타입 안전성을 최우선으로 하세요
- 한국어로 주석을 작성하세요
- 코드 스타일은 Prettier 기준을 따르세요
\`\`\`

## 필수 단축키

| 단축키 | 기능 |
|--------|------|
| \`Ctrl+K\` | 인라인 AI 편집 |
| \`Ctrl+L\` | AI 채팅 열기 |
| \`Ctrl+I\` | Composer (다중 파일 편집) |
| \`Tab\` | Copilot 제안 수락 |

## 추천 익스텐션

1. **ESLint** — 코드 품질 체크
2. **Prettier** — 코드 포맷팅
3. **GitLens** — Git 히스토리 시각화`,
        exercise: {
          instruction: '배열에서 최대값을 찾는 함수를 작성하세요. Math.max와 스프레드 연산자를 활용해보세요.',
          starterCode: `// 배열의 최대값을 반환하는 함수를 작성하세요
function findMax(arr) {
  // 여기에 코드를 작성하세요
}

const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(findMax(numbers)); // 9가 출력되어야 합니다`,
          solution: `function findMax(arr) {
  return Math.max(...arr);
}
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(findMax(numbers)); // 9`,
        },
      },
      {
        id: 'm1-l4',
        title: 'AI와 페어 프로그래밍',
        duration: '40분',
        type: 'hands-on',
        content: `# AI와 페어 프로그래밍

AI를 효과적인 페어 프로그래밍 파트너로 활용하는 방법을 배웁니다.

## 페어 프로그래밍 패턴

### 1. 드라이버-네비게이터 모델
- **당신(드라이버)** — 목표와 방향을 설정
- **AI(네비게이터)** — 구체적인 코드를 제안

### 2. 효과적인 협업 대화법

\`\`\`
❌ 나쁜 프롬프트:
"코드 작성해줘"

✅ 좋은 프롬프트:
"TypeScript로 이메일 유효성 검사 함수를 작성해줘.
RFC 5322 표준을 따르고,
결과를 { isValid: boolean, error?: string } 형태로 반환해줘."
\`\`\`

### 3. TDD와 AI 결합
테스트를 먼저 작성하고 AI에게 구현을 요청합니다.

\`\`\`javascript
// 1단계: 테스트 먼저 작성
test('유효한 이메일 검사', () => {
  expect(validateEmail('user@example.com')).toBe(true);
  expect(validateEmail('invalid-email')).toBe(false);
});

// 2단계: AI에게 구현 요청
// "위 테스트를 통과하는 validateEmail 함수를 구현해줘"
\`\`\`

## 주의사항

- AI가 생성한 코드를 **반드시 이해**하고 사용
- 생성된 코드를 **검토**하고 필요시 수정
- 보안 관련 코드는 특히 **주의 깊게 검토**`,
        exercise: {
          instruction: '문자열을 받아 각 단어의 첫 글자를 대문자로 변환하는 함수를 작성하세요.',
          starterCode: `// 각 단어의 첫 글자를 대문자로 변환하는 함수
function titleCase(str) {
  // 여기에 코드를 작성하세요
}

console.log(titleCase('hello world'));      // 'Hello World'
console.log(titleCase('the quick fox'));    // 'The Quick Fox'`,
          solution: `function titleCase(str) {
  return str.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
console.log(titleCase('hello world'));   // 'Hello World'`,
        },
      },
      {
        id: 'm1-l5',
        title: '코드 리뷰를 AI에게',
        duration: '35분',
        type: 'theory',
        content: `# 코드 리뷰를 AI에게 맡기기

AI를 활용한 코드 리뷰로 코드 품질을 높이는 방법을 배웁니다.

## AI 코드 리뷰의 장점

1. **즉각적인 피드백** — 팀원 대기 없이 바로 리뷰
2. **일관된 기준** — 동일한 품질 기준 적용
3. **광범위한 지식** — 다양한 패턴과 안티패턴 인식
4. **교육적 설명** — 문제점과 해결책을 설명

## 효과적인 리뷰 요청 방법

\`\`\`
다음 관점에서 코드를 리뷰해주세요:
1. 보안 취약점 (특히 XSS, SQL 인젝션)
2. 성능 최적화 가능 부분
3. 에러 처리 누락
4. 코드 가독성
5. SOLID 원칙 준수 여부

[코드 붙여넣기]
\`\`\`

## 자동화된 리뷰 파이프라인

\`\`\`yaml
# .github/workflows/ai-review.yml
name: AI Code Review
on: [pull_request]
jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: AI Review
        run: npx ai-review --model claude-3-5-sonnet
\`\`\`

## 리뷰 체크리스트

- [ ] 보안: 사용자 입력 검증
- [ ] 성능: N+1 쿼리, 불필요한 렌더링
- [ ] 에러: try-catch, null 체크
- [ ] 테스트: 엣지케이스 커버
- [ ] 문서: JSDoc, 복잡한 로직 주석`,
        exercise: {
          instruction: '아래 버그가 있는 코드를 찾아 수정하세요. 배열의 합계를 계산하는 함수입니다.',
          starterCode: `// 이 함수에는 버그가 있습니다. 찾아서 수정하세요!
function sumArray(arr) {
  let total = 0;
  for (let i = 0; i <= arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15가 나와야 합니다`,
          solution: `function sumArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) { // <= 를 < 로 수정
    total += arr[i];
  }
  return total;
}
console.log(sumArray([1, 2, 3, 4, 5])); // 15`,
        },
      },
    ],
  },
  {
    id: 'module-2',
    title: '프롬프트 엔지니어링',
    subtitle: 'AI를 100% 활용하는 대화 기술',
    icon: '✍️',
    color: 'from-violet-500 to-pink-600',
    borderColor: 'border-violet-500',
    badgeColor: 'bg-violet-500/20 text-violet-300',
    estimatedHours: 5,
    lessons: [
      {
        id: 'm2-l1',
        title: '좋은 프롬프트의 원칙',
        duration: '30분',
        type: 'theory',
        content: `# 좋은 프롬프트의 원칙

효과적인 AI 커뮤니케이션의 기초를 배웁니다.

## CLEAR 원칙

| 원칙 | 의미 | 예시 |
|------|------|------|
| **C**ontext | 배경 설명 | "React 18 프로젝트에서..." |
| **L**ength | 적절한 길이 | 너무 짧거나 길지 않게 |
| **E**xamples | 예시 제공 | "예를 들어 이런 형태로..." |
| **A**ction | 구체적 행동 요청 | "코드를 작성해줘" |
| **R**ole | 역할 부여 | "당신은 시니어 개발자입니다" |

## 역할 부여 (Role Prompting)

\`\`\`
시스템: 당신은 10년 경력의 Node.js 백엔드 개발자입니다.
보안과 성능을 최우선으로 생각하며,
항상 테스트 코드도 함께 작성합니다.

사용자: JWT 인증 미들웨어를 작성해줘.
\`\`\`

## 예시를 통한 학습 (Few-Shot)

\`\`\`
다음 형식으로 에러 메시지를 번역해줘:

입력: "Cannot read property 'length' of undefined"
출력: "undefined 값의 'length' 속성을 읽을 수 없습니다. 배열이나 문자열이 null 또는 undefined인지 확인하세요."

입력: "Maximum update depth exceeded"
출력:
\`\`\``,
        exercise: {
          instruction: '객체 배열에서 특정 키의 값으로 정렬하는 함수를 작성하세요.',
          starterCode: `// 객체 배열을 특정 키로 정렬하는 함수
function sortBy(arr, key) {
  // 여기에 코드를 작성하세요
}

const users = [
  { name: '김철수', age: 25 },
  { name: '이영희', age: 30 },
  { name: '박민준', age: 22 },
];

console.log(sortBy(users, 'age'));
// [{ name: '박민준', age: 22 }, { name: '김철수', age: 25 }, { name: '이영희', age: 30 }]`,
          solution: `function sortBy(arr, key) {
  return [...arr].sort((a, b) => a[key] > b[key] ? 1 : -1);
}
const users = [
  { name: '김철수', age: 25 },
  { name: '이영희', age: 30 },
  { name: '박민준', age: 22 },
];
console.log(sortBy(users, 'age'));`,
        },
      },
      {
        id: 'm2-l2',
        title: 'Chain-of-Thought 프롬프팅',
        duration: '35분',
        type: 'theory',
        content: `# Chain-of-Thought 프롬프팅

AI가 단계별로 생각하도록 유도하여 더 정확한 결과를 얻는 기법입니다.

## 기본 개념

CoT(Chain-of-Thought)는 복잡한 문제를 단계별로 분해하여 AI가 추론 과정을 거치도록 합니다.

## 일반 vs CoT 프롬프트

\`\`\`
❌ 일반 프롬프트:
"이 함수의 시간 복잡도는?"

✅ CoT 프롬프트:
"이 함수의 시간 복잡도를 분석해줘.
단계별로:
1. 각 루프/재귀를 식별
2. 중첩 구조 분석
3. 최악의 경우 계산
4. Big-O 표기법으로 표현"
\`\`\`

## 코드 디버깅에 CoT 적용

\`\`\`
다음 코드의 버그를 단계별로 찾아줘:
1. 입력/출력 데이터 타입 확인
2. 로직 흐름 추적 (각 변수 값 변화)
3. 엣지케이스 확인
4. 버그 위치 특정 및 수정안 제시

[버그 있는 코드]
\`\`\`

## 설계 결정에 CoT 적용

\`\`\`
REST API vs GraphQL 선택을 도와줘.
고려 사항:
- 우리 팀 규모: 5명
- 프론트엔드: React SPA
- 데이터: 복잡한 관계형 데이터
- 성능 요구: 낮은 레이턴시

각 항목별로 장단점을 비교하고 최종 추천을 해줘.
\`\`\``,
        exercise: {
          instruction: '재귀 함수로 피보나치 수열의 n번째 값을 반환하는 함수를 작성하세요.',
          starterCode: `// 재귀로 피보나치 수열 n번째 값 반환
function fibonacci(n) {
  // 여기에 코드를 작성하세요
  // 힌트: fibonacci(0)=0, fibonacci(1)=1
}

console.log(fibonacci(0));  // 0
console.log(fibonacci(1));  // 1
console.log(fibonacci(10)); // 55`,
          solution: `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(0));  // 0
console.log(fibonacci(1));  // 1
console.log(fibonacci(10)); // 55`,
        },
      },
      {
        id: 'm2-l3',
        title: '시스템 프롬프트 설계',
        duration: '40분',
        type: 'hands-on',
        content: `# 시스템 프롬프트 설계

프로젝트에 특화된 AI 행동을 정의하는 시스템 프롬프트를 설계합니다.

## 시스템 프롬프트란?

AI의 기본 행동 방식, 역할, 제약을 정의하는 초기 지시문입니다.

## 구성 요소

\`\`\`markdown
# 시스템 프롬프트 템플릿

## 역할
당신은 [역할]입니다.

## 전문 분야
- [기술 스택 1]
- [기술 스택 2]

## 행동 원칙
1. [원칙 1]
2. [원칙 2]

## 코드 스타일
- [스타일 가이드]

## 금지 사항
- [하지 말아야 할 것]
\`\`\`

## 실제 예시: 풀스택 개발 어시스턴트

\`\`\`
당신은 10년 경력의 풀스택 개발자입니다.

전문 분야:
- React, TypeScript, Node.js, PostgreSQL
- 클린 아키텍처, TDD, CI/CD

코드 작성 원칙:
- 모든 함수에 명확한 타입 지정
- 에러 처리를 항상 포함
- 테스트 코드를 함께 제공
- 성능 영향이 있는 부분은 주석으로 명시

응답 형식:
- 코드는 항상 코드 블록 사용
- 복잡한 로직은 단계별 설명 포함
- 대안적 접근법도 제시
\`\`\``,
        exercise: {
          instruction: '주어진 배열에서 중복을 제거하고 정렬된 배열을 반환하는 함수를 작성하세요.',
          starterCode: `// 중복 제거 후 정렬
function uniqueSorted(arr) {
  // 여기에 코드를 작성하세요
}

console.log(uniqueSorted([3, 1, 4, 1, 5, 9, 2, 6, 5, 3]));
// [1, 2, 3, 4, 5, 6, 9]`,
          solution: `function uniqueSorted(arr) {
  return [...new Set(arr)].sort((a, b) => a - b);
}
console.log(uniqueSorted([3, 1, 4, 1, 5, 9, 2, 6, 5, 3]));
// [1, 2, 3, 4, 5, 6, 9]`,
        },
      },
      {
        id: 'm2-l4',
        title: '반복 개선 (Iterative Prompting)',
        duration: '35분',
        type: 'hands-on',
        content: `# 반복 개선 전략

한 번의 완벽한 프롬프트보다 반복적인 개선이 더 효과적입니다.

## 반복 개선 사이클

\`\`\`
요청 → 결과 확인 → 피드백 → 개선 → 반복
\`\`\`

## 효과적인 피드백 패턴

\`\`\`
1. 긍정적인 부분 인정:
"기본 구조는 좋아요. 그런데..."

2. 구체적인 수정 요청:
"3번째 함수에서 null 체크가 빠진 것 같아요"

3. 대안 제시:
"이 부분을 reduce 대신 forEach로 바꿔줄 수 있어요?"

4. 예상 결과 명시:
"입력이 빈 배열일 때 [] 가 반환되어야 해요"
\`\`\`

## 코드 개선 이터레이션 예시

\`\`\`
1차: "사용자 목록을 가져오는 API 함수 만들어줘"
→ 기본 fetch 함수 생성

2차: "에러 처리와 로딩 상태도 추가해줘"
→ try-catch, loading state 추가

3차: "결과를 캐싱해서 중복 요청을 방지해줘"
→ 캐싱 레이어 추가

4차: "TypeScript 타입도 추가해줘"
→ 타입 정의 완성
\`\`\``,
        exercise: {
          instruction: '배열을 받아 짝수만 필터링하고 각 값을 제곱한 배열을 반환하세요.',
          starterCode: `// 짝수만 필터링 후 제곱
function filterAndSquare(arr) {
  // 여기에 코드를 작성하세요
}

console.log(filterAndSquare([1, 2, 3, 4, 5, 6]));
// [4, 16, 36]`,
          solution: `function filterAndSquare(arr) {
  return arr.filter(n => n % 2 === 0).map(n => n * n);
}
console.log(filterAndSquare([1, 2, 3, 4, 5, 6]));
// [4, 16, 36]`,
        },
      },
      {
        id: 'm2-l5',
        title: '프롬프트 템플릿 라이브러리',
        duration: '30분',
        type: 'theory',
        content: `# 나만의 프롬프트 템플릿 라이브러리

자주 사용하는 프롬프트를 템플릿화하여 생산성을 높입니다.

## 필수 템플릿 모음

### 🐛 버그 디버깅
\`\`\`
다음 코드에서 버그를 찾아줘:
- 예상 동작: [설명]
- 실제 동작: [설명]
- 에러 메시지: [있다면]

[코드]
\`\`\`

### 🔍 코드 리뷰
\`\`\`
다음 코드를 리뷰해줘:
- 보안 취약점
- 성능 문제
- 가독성 개선
- 테스트 용이성

[코드]
\`\`\`

### 🏗️ 아키텍처 설계
\`\`\`
[기능]을 구현하기 위한 아키텍처를 설계해줘:
- 기술 스택: [스택]
- 예상 사용자: [수]
- 주요 제약사항: [제약]
다이어그램과 함께 설명해줘.
\`\`\`

### 📝 문서화
\`\`\`
이 코드의 JSDoc 문서를 작성해줘.
한국어로 작성하고, 파라미터, 반환값, 예시를 포함해줘.

[코드]
\`\`\`

## 템플릿 관리 도구

- **Notion** — 팀 공유 프롬프트 DB
- **Raycast** — 빠른 스니펫 접근
- **.cursorrules** — 프로젝트별 자동 적용`,
        exercise: {
          instruction: '객체를 받아 깊은 복사(Deep Copy)를 수행하는 함수를 작성하세요. JSON 방식을 사용해보세요.',
          starterCode: `// 객체 깊은 복사 함수
function deepCopy(obj) {
  // 여기에 코드를 작성하세요
}

const original = { name: '홍길동', address: { city: '서울' } };
const copy = deepCopy(original);
copy.address.city = '부산';

console.log(original.address.city); // '서울' (변경되면 안 됨)
console.log(copy.address.city);     // '부산'`,
          solution: `function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}
const original = { name: '홍길동', address: { city: '서울' } };
const copy = deepCopy(original);
copy.address.city = '부산';
console.log(original.address.city); // '서울'
console.log(copy.address.city);     // '부산'`,
        },
      },
    ],
  },
  {
    id: 'module-3',
    title: '실전 프로젝트',
    subtitle: 'AI로 실제 서비스를 만들어보세요',
    icon: '🚀',
    color: 'from-cyan-500 to-emerald-600',
    borderColor: 'border-cyan-500',
    badgeColor: 'bg-cyan-500/20 text-cyan-300',
    estimatedHours: 6,
    lessons: [
      {
        id: 'm3-l1',
        title: '프로젝트 요구사항 정의',
        duration: '30분',
        type: 'theory',
        content: `# 프로젝트 아이디어 → 요구사항 정의

아이디어를 명확한 요구사항으로 변환하는 방법을 배웁니다.

## PRD (Product Requirements Document)

\`\`\`markdown
# [프로젝트명] PRD

## 핵심 문제
어떤 문제를 해결하는가?

## 대상 사용자
누가 사용하는가?

## 핵심 기능 (MVP)
- 기능 1: [설명]
- 기능 2: [설명]

## 비기능 요구사항
- 성능: [기준]
- 보안: [기준]

## 성공 지표
- [측정 가능한 목표]
\`\`\`

## AI로 PRD 작성하기

\`\`\`
"다음 아이디어로 MVP PRD를 작성해줘:
- 아이디어: 개발자를 위한 북마크 관리 앱
- 핵심 차별점: AI가 자동으로 태그 생성
- 타겟: 바쁜 개발자
- 제약: 1인 개발, 1개월 내 출시"
\`\`\`

## 사용자 스토리 작성

\`\`\`
형식: "나는 [사용자]로서 [기능]을 원한다. 왜냐하면 [이유]이기 때문이다."

예시:
- 개발자로서 URL을 저장할 때 자동 태그를 원한다. 나중에 찾기 쉽기 때문이다.
- 개발자로서 태그별 필터를 원한다. 관련 링크를 빠르게 찾기 위해.
\`\`\``,
        exercise: {
          instruction: '간단한 Todo 아이템을 관리하는 클래스를 작성하세요. add, remove, getAll 메서드가 필요합니다.',
          starterCode: `class TodoList {
  constructor() {
    // 초기화 코드를 작성하세요
  }

  add(text) {
    // 할 일 추가
  }

  remove(id) {
    // ID로 할 일 삭제
  }

  getAll() {
    // 모든 할 일 반환
  }
}

const todo = new TodoList();
todo.add('바이브 코딩 배우기');
todo.add('프로젝트 완성하기');
console.log(todo.getAll());
todo.remove(1);
console.log(todo.getAll());`,
          solution: `class TodoList {
  constructor() {
    this.items = [];
    this.nextId = 1;
  }
  add(text) {
    this.items.push({ id: this.nextId++, text, done: false });
  }
  remove(id) {
    this.items = this.items.filter(item => item.id !== id);
  }
  getAll() {
    return this.items;
  }
}
const todo = new TodoList();
todo.add('바이브 코딩 배우기');
todo.add('프로젝트 완성하기');
console.log(todo.getAll());`,
        },
      },
      {
        id: 'm3-l2',
        title: 'AI로 아키텍처 설계',
        duration: '45분',
        type: 'hands-on',
        content: `# AI로 아키텍처 설계하기

Claude와 함께 확장 가능한 시스템 아키텍처를 설계합니다.

## 아키텍처 설계 프롬프트

\`\`\`
다음 서비스의 아키텍처를 설계해줘:

서비스: 실시간 협업 메모 앱
요구사항:
- 동시 편집 (Operational Transformation 또는 CRDT)
- 10만 명의 동시 사용자
- 오프라인 지원
- 기술 스택: React, Node.js, PostgreSQL

다음을 포함해줘:
1. 프론트엔드 아키텍처
2. 백엔드 마이크로서비스 구조
3. 데이터베이스 스키마
4. 실시간 통신 방식
5. 확장성 전략
\`\`\`

## 컴포넌트 설계 원칙

\`\`\`
단일 책임 원칙을 적용한 컴포넌트 설계:

❌ 나쁜 예:
UserDashboard (데이터 조회 + 상태 관리 + UI 렌더링)

✅ 좋은 예:
- useUserData (데이터 조회 훅)
- useUserStore (상태 관리)
- UserDashboard (UI만 담당)
- UserStats, UserActivity (세부 컴포넌트)
\`\`\`

## 데이터베이스 스키마 설계

\`\`\`sql
-- AI에게 이렇게 요청:
"다음 기능을 위한 PostgreSQL 스키마를 설계해줘:
- 사용자, 워크스페이스, 문서, 버전 히스토리
- 소프트 삭제 지원
- 멀티 테넌트 구조"
\`\`\``,
        exercise: {
          instruction: '간단한 이벤트 에미터(EventEmitter)를 구현하세요. on, off, emit 메서드가 필요합니다.',
          starterCode: `class EventEmitter {
  constructor() {
    // 초기화
  }

  on(event, listener) {
    // 이벤트 리스너 등록
  }

  off(event, listener) {
    // 이벤트 리스너 제거
  }

  emit(event, ...args) {
    // 이벤트 발생 및 리스너 호출
  }
}

const emitter = new EventEmitter();
const handler = (msg) => console.log('받음:', msg);

emitter.on('message', handler);
emitter.emit('message', '안녕하세요!'); // '받음: 안녕하세요!'
emitter.off('message', handler);
emitter.emit('message', '무시됨');      // 출력 없음`,
          solution: `class EventEmitter {
  constructor() { this.events = {}; }
  on(event, listener) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(listener);
  }
  off(event, listener) {
    if (this.events[event])
      this.events[event] = this.events[event].filter(l => l !== listener);
  }
  emit(event, ...args) {
    (this.events[event] || []).forEach(l => l(...args));
  }
}`,
        },
      },
      {
        id: 'm3-l3',
        title: '빠른 프로토타이핑',
        duration: '50분',
        type: 'hands-on',
        content: `# 빠른 프로토타이핑

아이디어를 24시간 안에 동작하는 프로토타입으로 만드는 전략입니다.

## 프로토타이핑 원칙

1. **완벽함 대신 동작** — 일단 돌아가게 만들기
2. **핵심 기능 먼저** — 주변 기능은 나중에
3. **하드코딩 허용** — 초기엔 유연성 < 속도
4. **빠른 피드백** — 사용자에게 빨리 보여주기

## AI 활용 프로토타이핑 워크플로우

\`\`\`
1시간 내 Todo 앱 프로토타입:

10분: PRD 작성 (Claude와 함께)
10분: 컴포넌트 구조 설계 (Claude)
20분: Cursor로 기본 UI 생성
10분: 데이터 연결 및 동작 확인
10분: 배포 (Vercel/Netlify)
\`\`\`

## Cursor로 UI 빠르게 만들기

\`\`\`
Cursor에서:
1. cmd+I (Composer 열기)
2. 입력: "Tailwind CSS로 대시보드 레이아웃 만들어줘.
   사이드바, 헤더, 메인 콘텐츠 영역 포함.
   다크 테마, 반응형"
3. 생성된 코드 즉시 확인
4. 필요한 부분만 수정
\`\`\`

## 프로토타입 → 프로덕션

\`\`\`
프로토타입 단계에서 허용:
✅ 하드코딩된 데이터
✅ 중복 코드
✅ TODO 주석
✅ 간단한 에러 처리

프로덕션 전 반드시:
⚠️ 환경변수 분리
⚠️ 에러 경계 추가
⚠️ 로딩/에러 상태
⚠️ 기본 접근성
\`\`\``,
        exercise: {
          instruction: '주어진 문자열에서 팰린드롬(앞뒤가 같은 단어) 여부를 확인하는 함수를 작성하세요.',
          starterCode: `// 팰린드롬 확인 (대소문자, 공백 무시)
function isPalindrome(str) {
  // 여기에 코드를 작성하세요
  // 힌트: 소문자 변환 → 알파벳/숫자만 추출 → 뒤집어서 비교
}

console.log(isPalindrome('racecar'));      // true
console.log(isPalindrome('A man a plan a canal Panama')); // true
console.log(isPalindrome('hello'));        // false`,
          solution: `function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}
console.log(isPalindrome('racecar'));      // true
console.log(isPalindrome('A man a plan a canal Panama')); // true
console.log(isPalindrome('hello'));        // false`,
        },
      },
      {
        id: 'm3-l4',
        title: 'AI로 디버깅 & 리팩터링',
        duration: '45분',
        type: 'hands-on',
        content: `# 버그 디버깅 & 리팩터링

AI를 활용한 효율적인 디버깅과 코드 품질 개선 방법입니다.

## 디버깅 프레임워크

\`\`\`
1. 재현 (Reproduce)
   - 버그를 일관되게 재현하는 최소 예시 작성

2. 격리 (Isolate)
   - 문제 범위를 좁히기
   - 콘솔 로그로 데이터 흐름 추적

3. 가설 (Hypothesize)
   - 원인 후보 목록 작성
   - AI에게 가능한 원인 물어보기

4. 검증 (Verify)
   - 가설을 테스트로 검증

5. 수정 (Fix)
   - 근본 원인을 해결
   - 같은 버그 패턴 전체 확인
\`\`\`

## AI 디버깅 프롬프트 패턴

\`\`\`
버그 보고서 형식으로 AI에게 전달:

환경: Node.js 18, macOS
기대 동작: 로그인 후 대시보드로 이동
실제 동작: 로그인 후 무한 루프 발생
에러 메시지: Maximum update depth exceeded
관련 코드: [코드 붙여넣기]

단계별로 원인을 분석해줘.
\`\`\`

## 리팩터링 전략

\`\`\`
리팩터링 요청 템플릿:

"이 코드를 다음 원칙으로 리팩터링해줘:
1. 단일 책임 원칙 적용
2. 중복 코드 제거
3. 매직 넘버를 상수로 교체
4. 에러 처리 개선
5. 가독성 향상

단, 외부 동작(API, 출력)은 변경하지 마."
\`\`\``,
        exercise: {
          instruction: '중첩된 배열을 평탄화(flatten)하는 함수를 작성하세요. 재귀 또는 Array.flat()을 사용하세요.',
          starterCode: `// 중첩 배열 평탄화
function flatten(arr) {
  // 여기에 코드를 작성하세요
}

console.log(flatten([1, [2, 3], [4, [5, 6]]]));
// [1, 2, 3, 4, 5, 6]

console.log(flatten([[1, 2], [3, [4, [5]]]]));
// [1, 2, 3, 4, 5]`,
          solution: `function flatten(arr) {
  return arr.flat(Infinity);
}
console.log(flatten([1, [2, 3], [4, [5, 6]]]));
// [1, 2, 3, 4, 5, 6]`,
        },
      },
      {
        id: 'm3-l5',
        title: '배포 및 출시',
        duration: '50분',
        type: 'hands-on',
        content: `# 배포 및 출시

바이브 코딩으로 만든 프로젝트를 세상에 배포합니다.

## 배포 옵션 비교

| 플랫폼 | 특징 | 무료 한도 |
|--------|------|----------|
| **Vercel** | React/Next 최적화, 자동 CI/CD | 넉넉한 무료 |
| **Railway** | DB 포함 백엔드 | $5 크레딧/월 |
| **Netlify** | 정적 사이트 특화 | 100GB 대역폭 |
| **Fly.io** | Docker 기반, 글로벌 | 3개 앱 무료 |

## Vercel 배포 (5분)

\`\`\`bash
# 1. Vercel CLI 설치
npm i -g vercel

# 2. 프로젝트 루트에서 배포
vercel

# 3. 환경변수 설정
vercel env add VITE_API_URL

# 4. 자동 배포 (GitHub 연결)
# GitHub Actions가 자동으로 PR마다 배포
\`\`\`

## 프로덕션 체크리스트

\`\`\`
배포 전 확인:
□ 환경변수 설정 (API URL, 시크릿 키)
□ 빌드 오류 없음 (npm run build)
□ 404 페이지 설정
□ HTTPS 강제
□ 도메인 연결 (옵션)
□ 에러 모니터링 (Sentry)
□ 기본 성능 확인 (Lighthouse)
\`\`\`

## 출시 후 모니터링

\`\`\`javascript
// 간단한 에러 추적
window.onerror = (msg, src, line, col, error) => {
  console.error('글로벌 에러:', { msg, src, line, col, error });
  // Sentry, LogRocket 등으로 전송
};
\`\`\`

## 축하합니다! 🎉

바이브 코딩 아카데미 전 과정을 완료했습니다.
이제 AI와 함께 무엇이든 만들 수 있습니다!`,
        exercise: {
          instruction: '비동기 함수를 사용하여 1초 후에 "배포 완료!"를 반환하는 함수를 작성하세요.',
          starterCode: `// 1초 후 "배포 완료!"를 반환하는 비동기 함수
async function deployProject() {
  // 여기에 코드를 작성하세요
  // 힌트: new Promise와 setTimeout 활용
}

// 비동기 함수 호출
deployProject().then(msg => console.log(msg)); // 1초 후: "배포 완료!"`,
          solution: `async function deployProject() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return '배포 완료!';
}
deployProject().then(msg => console.log(msg));`,
        },
      },
    ],
  },
];

export const getAllLessons = () => modules.flatMap(m => m.lessons.map(l => ({ ...l, moduleId: m.id, moduleTitle: m.title })));

export const getLessonById = (lessonId) => {
  for (const m of modules) {
    const lesson = m.lessons.find(l => l.id === lessonId);
    if (lesson) return { ...lesson, moduleId: m.id, moduleTitle: m.title, moduleColor: m.color };
  }
  return null;
};

export const getModuleById = (moduleId) => modules.find(m => m.id === moduleId);

export const getTotalLessons = () => modules.reduce((acc, m) => acc + m.lessons.length, 0);
