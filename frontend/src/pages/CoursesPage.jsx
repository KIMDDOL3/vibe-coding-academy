import { useState } from 'react';
import { Link } from 'react-router-dom';
import { modules } from '../data/curriculum';
import useProgressStore from '../store/progressStore';
import ProgressBar from '../components/ui/ProgressBar';

const colorKeys = {
  'from-indigo-500 to-purple-600': 'indigo',
  'from-violet-500 to-pink-600': 'violet',
  'from-cyan-500 to-emerald-600': 'cyan',
};

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState('all');
  const { getModuleProgress } = useProgressStore();

  const filtered = activeTab === 'all' ? modules : modules.filter(m => m.id === activeTab);

  return (
    <div className="min-h-screen bg-slate-900">
      {/* 헤더 */}
      <div className="bg-gradient-to-b from-slate-800 to-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-white mb-3">강의 목록</h1>
          <p className="text-slate-400 text-lg">바이브 코딩의 모든 것을 배울 수 있는 {modules.length}개의 모듈</p>

          {/* 탭 필터 */}
          <div className="flex gap-2 mt-8 overflow-x-auto pb-1">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === 'all' ? 'bg-indigo-600 text-white' : 'bg-slate-700 text-slate-400 hover:text-white'
              }`}
            >
              전체 모듈
            </button>
            {modules.map(m => (
              <button
                key={m.id}
                onClick={() => setActiveTab(m.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === m.id ? 'bg-indigo-600 text-white' : 'bg-slate-700 text-slate-400 hover:text-white'
                }`}
              >
                {m.icon} {m.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 카드 목록 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filtered.map((mod) => {
            const progress = getModuleProgress(mod.id, mod.lessons);
            const barColor = colorKeys[mod.color] || 'indigo';
            return (
              <div key={mod.id} className="rounded-2xl border border-slate-700 bg-slate-800 overflow-hidden hover:border-slate-600 transition-colors flex flex-col">
                {/* 썸네일 */}
                <div className={`bg-gradient-to-br ${mod.color} p-8 text-center`}>
                  <span className="text-6xl">{mod.icon}</span>
                </div>

                {/* 내용 */}
                <div className="p-6 flex flex-col flex-1">
                  <div className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium mb-3 w-fit ${mod.badgeColor}`}>
                    {mod.estimatedHours}시간 · {mod.lessons.length}레슨
                  </div>
                  <h2 className="text-xl font-bold text-white mb-2">{mod.title}</h2>
                  <p className="text-slate-400 text-sm mb-4 flex-1">{mod.subtitle}</p>

                  {/* 진도 */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-slate-500 mb-1">
                      <span>진도율</span>
                      <span>{progress}%</span>
                    </div>
                    <ProgressBar value={progress} color={barColor} />
                  </div>

                  {/* 레슨 태그 */}
                  <div className="flex flex-wrap gap-1 mb-5">
                    {mod.lessons.slice(0, 3).map(l => (
                      <span key={l.id} className="px-2 py-0.5 bg-slate-700 rounded text-xs text-slate-400">
                        {l.title}
                      </span>
                    ))}
                    {mod.lessons.length > 3 && (
                      <span className="px-2 py-0.5 bg-slate-700 rounded text-xs text-slate-500">
                        +{mod.lessons.length - 3}개
                      </span>
                    )}
                  </div>

                  <Link
                    to={`/courses/${mod.id}`}
                    className="block w-full text-center py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors"
                  >
                    {progress > 0 ? '이어서 학습' : '수강 시작'} →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
