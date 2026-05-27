import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { modules, getTotalLessons } from '../data/curriculum';

const features = [
  { icon: '🤖', title: 'AI 도구 마스터', desc: 'Cursor, Claude, Copilot 등 최신 AI 코딩 도구를 실전에서 활용하는 법을 배웁니다.' },
  { icon: '✍️', title: '프롬프트 엔지니어링', desc: 'AI에게 정확하게 원하는 것을 요청하는 대화 기술로 개발 속도를 극대화합니다.' },
  { icon: '🚀', title: '실전 프로젝트', desc: '배운 내용을 바탕으로 실제 서비스를 기획, 개발, 배포하는 전 과정을 경험합니다.' },
];

const stats = [
  { value: '15+', label: '강의 레슨' },
  { value: '3', label: '실전 모듈' },
  { value: '5x', label: '생산성 향상' },
  { value: '100%', label: '무료 수강' },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* 배경 그라디언트 */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-900" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* 배지 */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              주니어 개발자를 위한 AI 코딩 학습 플랫폼
            </div>

            {/* 메인 타이틀 */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
              AI와 함께<br />
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                10배 빠르게
              </span>{' '}
              개발하세요
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
              바이브 코딩은 AI를 페어 프로그래머로 활용하는 새로운 개발 패러다임입니다.
              Cursor, Claude, Copilot으로 아이디어를 코드로 빠르게 실현하세요.
            </p>

            {/* CTA 버튼 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="xl" className="w-full sm:w-auto">
                  🚀 무료로 시작하기
                </Button>
              </Link>
              <Link to="/roadmap">
                <Button size="xl" variant="outline" className="w-full sm:w-auto">
                  📚 커리큘럼 보기
                </Button>
              </Link>
            </div>

            {/* 신뢰 지표 */}
            <p className="mt-6 text-sm text-slate-500">
              신용카드 불필요 · 즉시 수강 가능 · 15개 레슨 무료
            </p>
          </div>

          {/* 미리보기 카드 */}
          <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {modules.map((mod) => (
              <div key={mod.id} className={`rounded-xl p-4 bg-gradient-to-br ${mod.color} opacity-90 text-center`}>
                <div className="text-2xl mb-1">{mod.icon}</div>
                <div className="text-xs font-medium text-white/90">{mod.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 통계 */}
      <section className="border-y border-slate-800 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 핵심 특징 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">왜 바이브 코딩인가?</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            단순히 AI를 사용하는 것이 아닙니다. AI를 진정한 협업 파트너로 만드는 방법을 배웁니다.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat) => (
            <div key={feat.title} className="rounded-2xl p-8 bg-slate-800 border border-slate-700 hover:border-indigo-500/50 transition-colors">
              <div className="text-4xl mb-4">{feat.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feat.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 커리큘럼 미리보기 */}
      <section className="bg-slate-800/30 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">커리큘럼</h2>
            <p className="text-slate-400 text-lg">총 {getTotalLessons()}개의 레슨, {modules.length}개의 모듈로 구성되어 있습니다.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {modules.map((mod, idx) => (
              <div key={mod.id} className="rounded-2xl overflow-hidden border border-slate-700 bg-slate-800">
                {/* 모듈 헤더 */}
                <div className={`bg-gradient-to-r ${mod.color} p-6`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{mod.icon}</span>
                    <span className="text-sm font-medium text-white/80">모듈 {idx + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{mod.title}</h3>
                  <p className="text-white/70 text-sm">{mod.subtitle}</p>
                </div>

                {/* 레슨 목록 */}
                <div className="p-4">
                  <ul className="space-y-2">
                    {mod.lessons.map((lesson) => (
                      <li key={lesson.id} className="flex items-center gap-3 text-sm text-slate-400 py-1">
                        <span className="text-slate-600">•</span>
                        <span>{lesson.title}</span>
                        <span className="ml-auto text-xs text-slate-500">{lesson.duration}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={`/courses/${mod.id}`}>
                    <Button variant="outline" size="sm" className="w-full mt-4">
                      강의 보기 →
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 최종 CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            지금 바로 시작하세요
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            무료로 모든 강의를 수강하고, AI 코딩의 새로운 세계를 경험하세요.
          </p>
          <Link to="/register">
            <Button size="xl">
              ⚡ 무료로 시작하기
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
