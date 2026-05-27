import { Link, useParams } from 'react-router-dom';
import { getModuleById } from '../data/curriculum';
import useProgressStore from '../store/progressStore';
import ProgressBar from '../components/ui/ProgressBar';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

export default function CourseDetailPage() {
  const { moduleId } = useParams();
  const mod = getModuleById(moduleId);
  const { isCompleted, getModuleProgress } = useProgressStore();

  if (!mod) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-400 mb-4">모듈을 찾을 수 없습니다.</p>
          <Link to="/courses"><Button>강의 목록으로</Button></Link>
        </div>
      </div>
    );
  }

  const progress = getModuleProgress(mod.id, mod.lessons);
  const firstIncomplete = mod.lessons.find(l => !isCompleted(l.id));
  const nextLesson = firstIncomplete || mod.lessons[0];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* 헤더 */}
      <div className={`bg-gradient-to-br ${mod.color}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link to="/courses" className="text-white/70 hover:text-white text-sm mb-6 inline-flex items-center gap-1 transition-colors">
            ← 강의 목록
          </Link>
          <div className="flex items-start gap-6">
            <span className="text-6xl">{mod.icon}</span>
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{mod.title}</h1>
              <p className="text-white/80 text-lg mb-4">{mod.subtitle}</p>
              <div className="flex items-center gap-4 text-white/70 text-sm">
                <span>📚 {mod.lessons.length}개 레슨</span>
                <span>⏱ {mod.estimatedHours}시간</span>
                <span>💻 인터랙티브 실습 포함</span>
              </div>
            </div>
          </div>

          {/* 진도 */}
          <div className="mt-6 bg-white/10 rounded-xl p-4">
            <div className="flex justify-between text-sm text-white/80 mb-2">
              <span>학습 진도</span>
              <span>{mod.lessons.filter(l => isCompleted(l.id)).length} / {mod.lessons.length} 완료</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div className="h-2 rounded-full bg-white transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 레슨 목록 */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-white mb-6">레슨 목록</h2>
            <div className="space-y-3">
              {mod.lessons.map((lesson, idx) => {
                const done = isCompleted(lesson.id);
                return (
                  <Link
                    key={lesson.id}
                    to={`/courses/${mod.id}/lessons/${lesson.id}`}
                    className="flex items-center gap-4 p-4 rounded-xl bg-slate-800 border border-slate-700 hover:border-slate-600 transition-colors group"
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                      done ? 'bg-emerald-500 text-white' : 'bg-slate-700 text-slate-400'
                    }`}>
                      {done ? '✓' : idx + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`font-medium ${done ? 'text-slate-400 line-through' : 'text-white'}`}>{lesson.title}</div>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge type={lesson.type} />
                        <span className="text-xs text-slate-500">{lesson.duration}</span>
                      </div>
                    </div>
                    <span className="text-slate-600 group-hover:text-slate-400 transition-colors">→</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* 사이드바 */}
          <div className="space-y-6">
            {/* 수강 시작 카드 */}
            <div className="rounded-2xl border border-slate-700 bg-slate-800 p-6">
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-white mb-1">{progress}%</div>
                <div className="text-slate-400 text-sm">완료</div>
                <div className="mt-3">
                  <ProgressBar value={progress} />
                </div>
              </div>
              <Link to={`/courses/${mod.id}/lessons/${nextLesson.id}`}>
                <Button className="w-full">
                  {progress > 0 ? '이어서 학습하기' : '첫 레슨 시작하기'} →
                </Button>
              </Link>
            </div>

            {/* 모듈 정보 */}
            <div className="rounded-2xl border border-slate-700 bg-slate-800 p-6">
              <h3 className="font-semibold text-white mb-4">이 모듈에서 배우는 것</h3>
              <ul className="space-y-2">
                {mod.lessons.map(l => (
                  <li key={l.id} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="text-indigo-400 mt-0.5">✓</span>
                    <span>{l.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
