import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 브랜드 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">⚡</span>
              <span className="font-bold text-white text-lg">
                Vibe<span className="text-indigo-400">Coding</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              AI와 함께하는 새로운 개발 패러다임.<br />
              바이브 코딩으로 생산성을 10배 높이세요.
            </p>
          </div>

          {/* 학습 */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">학습</h3>
            <ul className="space-y-2">
              <li><Link to="/roadmap" className="text-sm text-slate-400 hover:text-white transition-colors">로드맵</Link></li>
              <li><Link to="/courses" className="text-sm text-slate-400 hover:text-white transition-colors">강의 목록</Link></li>
              <li><Link to="/courses/module-1" className="text-sm text-slate-400 hover:text-white transition-colors">AI 도구 활용법</Link></li>
              <li><Link to="/courses/module-2" className="text-sm text-slate-400 hover:text-white transition-colors">프롬프트 엔지니어링</Link></li>
              <li><Link to="/courses/module-3" className="text-sm text-slate-400 hover:text-white transition-colors">실전 프로젝트</Link></li>
            </ul>
          </div>

          {/* 정보 */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">정보</h3>
            <ul className="space-y-2">
              <li><Link to="/register" className="text-sm text-slate-400 hover:text-white transition-colors">무료로 시작하기</Link></li>
              <li><Link to="/login" className="text-sm text-slate-400 hover:text-white transition-colors">로그인</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">© 2026 VibeCoding Academy. All rights reserved.</p>
          <p className="text-xs text-slate-500">주니어 개발자를 위한 AI 코딩 학습 플랫폼</p>
        </div>
      </div>
    </footer>
  );
}
