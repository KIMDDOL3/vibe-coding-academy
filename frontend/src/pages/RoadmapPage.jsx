import { Link } from 'react-router-dom';
import { modules } from '../data/curriculum';
import useProgressStore from '../store/progressStore';
import ProgressBar from '../components/ui/ProgressBar';
import Button from '../components/ui/Button';

const colorMap = {
  'from-indigo-500 to-purple-600': { dot: 'bg-indigo-500', line: 'bg-indigo-500/30', bar: 'indigo', glow: 'shadow-indigo-500/30' },
  'from-violet-500 to-pink-600': { dot: 'bg-violet-500', line: 'bg-violet-500/30', bar: 'violet', glow: 'shadow-violet-500/30' },
  'from-cyan-500 to-emerald-600': { dot: 'bg-cyan-500', line: 'bg-cyan-500/30', bar: 'cyan', glow: 'shadow-cyan-500/30' },
};

export default function RoadmapPage() {
  const { isCompleted, getModuleProgress, getProgressPercent, getCompletedCount } = useProgressStore();

  return (
    <div className="min-h-screen bg-slate-900">
      {/* 헤더 */}
      <div className="bg-gradient-to-b from-slate-800 to-slate-900 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">학습 로드맵</h1>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            3단계 커리큘럼으로 바이브 코딩을 완전 정복하세요.
            각 모듈은 이전 모듈을 기반으로 구성됩니다.
          </p>

          {/* 전체 진도 */}
          <div className="inline-flex flex-col items-center gap-3 bg-slate-800 rounded-2xl px-8 py-5 border border-slate-700">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-white">{getProgressPercent()}%</span>
              <span className="text-slate-400 text-sm">전체 완료</span>
              <span className="text-slate-500 text-sm">({getCompletedCount()}레슨)</span>
            </div>
            <div className="w-48">
              <ProgressBar value={getProgressPercent()} showLabel={false} />
            </div>
          </div>
        </div>
      </div>

      {/* 로드맵 */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative">
          {modules.map((mod, modIdx) => {
            const colors = colorMap[mod.color] || colorMap['from-indigo-500 to-purple-600'];
            const progress = getModuleProgress(mod.id, mod.lessons);
            const isModuleComplete = progress === 100;

            return (
              <div key={mod.id} className="relative mb-12">
                {/* 연결선 */}
                {modIdx < modules.length - 1 && (
                  <div className={`absolute left-8 top-full w-0.5 h-12 ${colors.line}`} />
                )}

                {/* 모듈 카드 */}
                <div className={`rounded-2xl border border-slate-700 bg-slate-800 overflow-hidden ${isModuleComplete ? 'border-emerald-500/50' : ''}`}>
                  {/* 모듈 헤더 */}
                  <div className={`bg-gradient-to-r ${mod.color} p-6`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-3xl shadow-lg ${colors.glow}`}>
                          {mod.icon}
                        </div>
                        <div>
                          <div className="text-white/70 text-sm mb-1">모듈 {modIdx + 1} · {mod.estimatedHours}시간</div>
                          <h2 className="text-2xl font-bold text-white">{mod.title}</h2>
                          <p className="text-white/70 text-sm mt-1">{mod.subtitle}</p>
                        </div>
                      </div>
                      {isModuleComplete && (
                        <div className="bg-white/20 rounded-full px-3 py-1 text-sm font-medium text-white">
                          ✓ 완료
                        </div>
                      )}
                    </div>

                    {/* 모듈 진도 */}
                    <div className="mt-4">
                      <div className="flex justify-between text-white/70 text-xs mb-1">
                        <span>{mod.lessons.filter(l => isCompleted(l.id)).length} / {mod.lessons.length} 레슨</span>
                        <span>{progress}%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div
                          className="h-2 rounded-full bg-white transition-all duration-500"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* 레슨 목록 */}
                  <div className="p-6">
                    <div className="space-y-3">
                      {mod.lessons.map((lesson, lessonIdx) => {
                        const done = isCompleted(lesson.id);
                        return (
                          <Link
                            key={lesson.id}
                            to={`/courses/${mod.id}/lessons/${lesson.id}`}
                            className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-700/50 transition-colors group"
                          >
                            {/* 번호 / 완료 표시 */}
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 transition-colors ${
                              done
                                ? 'bg-emerald-500 text-white'
                                : 'bg-slate-700 text-slate-400 group-hover:bg-slate-600'
                            }`}>
                              {done ? '✓' : lessonIdx + 1}
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className={`font-medium text-sm ${done ? 'text-slate-400 line-through' : 'text-white'}`}>
                                {lesson.title}
                              </div>
                              <div className="text-xs text-slate-500 mt-0.5">
                                {lesson.type === 'theory' ? '📖 이론' : '💻 실습'} · {lesson.duration}
                              </div>
                            </div>

                            <div className="text-slate-600 group-hover:text-slate-400 transition-colors text-sm">→</div>
                          </Link>
                        );
                      })}
                    </div>

                    <div className="mt-6 flex justify-end">
                      <Link to={`/courses/${mod.id}`}>
                        <Button variant="outline" size="sm">
                          모듈 시작하기 →
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 완료 메시지 */}
        {getProgressPercent() === 100 && (
          <div className="text-center p-12 rounded-2xl bg-gradient-to-r from-emerald-900/50 to-cyan-900/50 border border-emerald-500/30">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-white mb-2">모든 과정을 완료했습니다!</h3>
            <p className="text-slate-400">바이브 코딩 마스터가 되셨습니다. 이제 무엇이든 만들 수 있어요.</p>
          </div>
        )}
      </div>
    </div>
  );
}
