import { useState, useRef } from 'react';
import Button from './Button';

export default function CodeEditor({ starterCode = '', instruction = '', solution = '' }) {
  const [code, setCode] = useState(starterCode);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [outputType, setOutputType] = useState('info');
  const textareaRef = useRef(null);

  const runCode = () => {
    setIsRunning(true);
    setOutput('');
    setOutputType('info');

    const logs = [];
    const originalLog = console.log;
    const originalError = console.error;

    console.log = (...args) => logs.push({ type: 'log', text: args.map(String).join(' ') });
    console.error = (...args) => logs.push({ type: 'error', text: args.map(String).join(' ') });

    try {
      // eslint-disable-next-line no-new-func
      new Function(code)();
      setOutputType('success');
      setOutput(logs.length > 0 ? logs.map(l => l.text).join('\n') : '(출력 없음)');
    } catch (err) {
      setOutputType('error');
      setOutput(`오류: ${err.message}`);
    } finally {
      console.log = originalLog;
      console.error = originalError;
      setIsRunning(false);
    }
  };

  const handleTab = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const ta = textareaRef.current;
      const start = ta.selectionStart;
      const end = ta.selectionEnd;
      const newCode = code.substring(0, start) + '  ' + code.substring(end);
      setCode(newCode);
      setTimeout(() => { ta.selectionStart = ta.selectionEnd = start + 2; }, 0);
    }
  };

  const reset = () => {
    setCode(starterCode);
    setOutput('');
    setShowSolution(false);
  };

  const outputColors = {
    success: 'text-emerald-400',
    error: 'text-red-400',
    info: 'text-slate-300',
  };

  return (
    <div className="rounded-xl border border-slate-700 overflow-hidden bg-slate-900">
      {/* 헤더 */}
      <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-xs text-slate-400 ml-2 font-mono">exercise.js</span>
      </div>

      {/* 과제 설명 */}
      {instruction && (
        <div className="px-4 py-3 bg-indigo-500/10 border-b border-indigo-500/20">
          <p className="text-sm text-indigo-300">
            <span className="font-semibold">과제: </span>{instruction}
          </p>
        </div>
      )}

      {/* 코드 에디터 */}
      <div className="relative">
        <textarea
          ref={textareaRef}
          value={showSolution ? solution : code}
          onChange={(e) => { if (!showSolution) setCode(e.target.value); }}
          onKeyDown={handleTab}
          readOnly={showSolution}
          spellCheck={false}
          rows={Math.max(8, (showSolution ? solution : code).split('\n').length + 1)}
          className="w-full bg-transparent font-mono text-sm text-slate-200 p-4 resize-none outline-none leading-relaxed"
          style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace" }}
        />
      </div>

      {/* 출력 */}
      {output && (
        <div className="border-t border-slate-700 px-4 py-3 bg-slate-950">
          <p className="text-xs text-slate-500 mb-1 font-mono">출력:</p>
          <pre className={`text-sm font-mono whitespace-pre-wrap ${outputColors[outputType]}`}>{output}</pre>
        </div>
      )}

      {/* 하단 버튼 */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-800 border-t border-slate-700">
        <div className="flex gap-2">
          <Button size="sm" variant="ghost" onClick={reset}>초기화</Button>
          <Button
            size="sm"
            variant={showSolution ? 'secondary' : 'ghost'}
            onClick={() => setShowSolution(!showSolution)}
          >
            {showSolution ? '내 코드 보기' : '정답 보기'}
          </Button>
        </div>
        <Button size="sm" onClick={runCode} disabled={isRunning}>
          {isRunning ? '실행 중...' : '▶ 실행'}
        </Button>
      </div>
    </div>
  );
}
