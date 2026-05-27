import { useParams, useNavigate, Link } from 'react-router-dom';
import { getLessonById, getModuleById } from '../data/curriculum';
import useProgressStore from '../store/progressStore';
import CodeEditor from '../components/ui/CodeEditor';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import ProgressBar from '../components/ui/ProgressBar';

export default function LessonPage() {
  const { moduleId, lessonId } = useParams();
  const navigate = useNavigate();
  const lesson = getLessonById(lessonId);
  const mod = getModuleById(moduleId);
  const { isCompleted, toggleComplete, getModuleProgress } = useProgressStore();

  if (!lesson || !mod) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-400 mb-4">레슨을 찾을 수 없습니다.</p>
          <Link to="/courses"><Button>강의 목록으로</Button></Link>
        </div>
      </div>
    );
  }

  const lessonIdx = mod.lessons.findIndex(l => l.id === lessonId);
  const prevLesson = lessonIdx > 0 ? mod.lessons[lessonIdx - 1] : null;
  const nextLesson = lessonIdx < mod.lessons.length - 1 ? mod.lessons[lessonIdx + 1] : null;
  const done = isCompleted(lessonId);
  const progress = getModuleProgress(moduleId, mod.lessons);

  const handleComplete = () => {
    toggleComplete(lessonId);
    if (!done && nextLesson) {
      setTimeout(() => navigate(`/courses/${moduleId}/lessons/${nextLesson.id}`), 300);
    }
  };

  const renderContent = (content) => {
    const lines = content.split('\n');
    const elements = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      if (line.startsWith('# ')) {
        elements.push(<h1 key={i} className="text-3xl font-bold text-white mt-8 mb-4">{line.slice(2)}</h1>);
      } else if (line.startsWith('## ')) {
        elements.push(<h2 key={i} className="text-2xl font-bold text-white mt-6 mb-3">{line.slice(3)}</h2>);
      } else if (line.startsWith('### ')) {
        elements.push(<h3 key={i} className="text-xl font-semibold text-white mt-5 mb-2">{line.slice(4)}</h3>);
      } else if (line.startsWith('```')) {
        const lang = line.slice(3).trim();
        const codeLines = [];
        i++;
        while (i < lines.length && !lines[i].startsWith('```')) {
          codeLines.push(lines[i]);
          i++;
        }
        elements.push(
          <pre key={i} className="my-4 p-4 bg-slate-950 border border-slate-700 rounded-xl overflow-x-auto">
            <code className="text-sm text-slate-300 font-mono leading-relaxed">{codeLines.join('\n')}</code>
          </pre>
        );
      } else if (line.startsWith('> ')) {
        elements.push(
          <blockquote key={i} className="my-4 pl-4 border-l-4 border-indigo-500 text-slate-400 italic">
            {line.slice(2)}
          </blockquote>
        );
      } else if (line.startsWith('- ') || line.startsWith('* ')) {
        const items = [];
        while (i < lines.length && (lines[i].startsWith('- ') || lines[i].startsWith('* '))) {
          items.push(lines[i].slice(2));
          i++;
        }
        elements.push(
          <ul key={i} className="my-3 space-y-1.5 pl-4">
            {items.map((item, j) => (
              <li key={j} className="text-slate-300 flex items-start gap-2">
                <span className="text-indigo-400 mt-1 flex-shrink-0">•</span>
                <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>').replace(/`(.*?)`/g, '<code class="px-1.5 py-0.5 bg-slate-800 rounded text-cyan-300 text-sm font-mono">$1</code>') }} />
              </li>
            ))}
          </ul>
        );
        continue;
      } else if (line.match(/^\d+\. /)) {
        const items = [];
        while (i < lines.length && lines[i].match(/^\d+\. /)) {
          items.push(lines[i].replace(/^\d+\. /, ''));
          i++;
        }
        elements.push(
          <ol key={i} className="my-3 space-y-1.5 pl-4 list-decimal list-inside">
            {items.map((item, j) => (
              <li key={j} className="text-slate-300" dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>').replace(/`(.*?)`/g, '<code class="px-1.5 py-0.5 bg-slate-800 rounded text-cyan-300 text-sm font-mono">$1</code>') }} />
            ))}
          </ol>
        );
        continue;
      } else if (line.startsWith('| ')) {
        const tableLines = [];
        while (i < lines.length && lines[i].startsWith('|')) {
          tableLines.push(lines[i]);
          i++;
        }
        const headers = tableLines[0].split('|').slice(1, -1).map(h => h.trim());
        const rows = tableLines.slice(2).map(row => row.split('|').slice(1, -1).map(c => c.trim()));
        elements.push(
          <div key={i} className="my-4 overflow-x-auto rounded-xl border border-slate-700">
            <table className="w-full text-sm">
              <thead className="bg-slate-800">
                <tr>{headers.map((h, j) => <th key={j} className="px-4 py-3 text-left text-slate-300 font-semibold">{h}</th>)}</tr>
              </thead>
              <tbody>
                {rows.map((row, j) => (
                  <tr key={j} className="border-t border-slate-700 hover:bg-slate-800/50">
                    {row.map((cell, k) => <td key={k} className="px-4 py-3 text-slate-400" dangerouslySetInnerHTML={{ __html: cell.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>').replace(/`(.*?)`/g, '<code class="px-1.5 py-0.5 bg-slate-700 rounded text-cyan-300 font-mono">$1</code>') }} />)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        continue;
      } else if (line.trim() === '') {
        elements.push(<div key={i} className="h-2" />);
      } else {
        elements.push(
          <p key={i} className="text-slate-300 leading-relaxed my-2" dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>').replace(/`(.*?)`/g, '<code class="px-1.5 py-0.5 bg-slate-800 rounded text-cyan-300 text-sm font-mono">$1</code>') }} />
        );
      }
      i++;
    }
    return elements;
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* 사이드바 */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <div className="sticky top-24">
              <Link to={`/courses/${moduleId}`} className="text-slate-400 hover:text-white text-sm flex items-center gap-1 mb-4 transition-colors">
                ← {mod.title}
              </Link>

              {/* 모듈 진도 */}
              <div className="bg-slate-800 rounded-xl p-4 mb-4 border border-slate-700">
                <div className="flex justify-between text-xs text-slate-400 mb-2">
                  <span>모듈 진도</span><span>{progress}%</span>
                </div>
                <ProgressBar value={progress} />
              </div>

              {/* 레슨 목록 */}
              <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                {mod.lessons.map((l, idx) => {
                  const isActive = l.id === lessonId;
                  const lDone = isCompleted(l.id);
                  return (
                    <Link
                      key={l.id}
                      to={`/courses/${moduleId}/lessons/${l.id}`}
                      className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors border-b border-slate-700 last:border-0 ${
                        isActive ? 'bg-indigo-500/20 text-indigo-300' : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                        lDone ? 'bg-emerald-500 text-white' : isActive ? 'bg-indigo-600 text-white' : 'bg-slate-600 text-slate-400'
                      }`}>
                        {lDone ? '✓' : idx + 1}
                      </div>
                      <span className={`flex-1 ${lDone ? 'line-through opacity-60' : ''}`}>{l.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* 메인 콘텐츠 */}
          <main className="flex-1 min-w-0">
            {/* 레슨 헤더 */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <Badge type={lesson.type} />
                <span className="text-slate-500 text-sm">{lesson.duration}</span>
                {done && <span className="text-emerald-400 text-sm font-medium">✓ 완료됨</span>}
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">{lesson.title}</h1>
              <p className="text-slate-400">{mod.title} · 레슨 {lessonIdx + 1}/{mod.lessons.length}</p>
            </div>

            {/* 강의 내용 */}
            <div className="mb-10">
              {renderContent(lesson.content)}
            </div>

            {/* 인터랙티브 실습 */}
            {lesson.exercise && (
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-4">💻 인터랙티브 실습</h2>
                <CodeEditor
                  starterCode={lesson.exercise.starterCode}
                  instruction={lesson.exercise.instruction}
                  solution={lesson.exercise.solution}
                />
              </div>
            )}

            {/* 네비게이션 */}
            <div className="flex items-center justify-between pt-8 border-t border-slate-800">
              <div>
                {prevLesson ? (
                  <Link to={`/courses/${moduleId}/lessons/${prevLesson.id}`}>
                    <Button variant="outline" size="sm">← {prevLesson.title}</Button>
                  </Link>
                ) : (
                  <Link to={`/courses/${moduleId}`}>
                    <Button variant="ghost" size="sm">← 강의 개요</Button>
                  </Link>
                )}
              </div>

              <Button
                variant={done ? 'secondary' : 'success'}
                size="md"
                onClick={handleComplete}
              >
                {done ? '✓ 완료 취소' : nextLesson ? '완료 후 다음 레슨 →' : '🎉 모듈 완료!'}
              </Button>

              {nextLesson && (
                <Link to={`/courses/${moduleId}/lessons/${nextLesson.id}`}>
                  <Button variant="outline" size="sm">{nextLesson.title} →</Button>
                </Link>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
