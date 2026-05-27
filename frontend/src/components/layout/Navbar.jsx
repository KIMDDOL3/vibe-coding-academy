import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/authStore';
import useProgressStore from '../../store/progressStore';
import ProgressBar from '../ui/ProgressBar';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuthStore();
  const { getProgressPercent, getCompletedCount } = useProgressStore();

  const navLinks = [
    { to: '/roadmap', label: '로드맵' },
    { to: '/courses', label: '강의' },
  ];

  const isActive = (path) => location.pathname.startsWith(path);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <span className="font-bold text-white text-lg">
              Vibe<span className="text-indigo-400">Coding</span>
            </span>
          </Link>

          {/* 네비게이션 */}
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? 'bg-indigo-500/20 text-indigo-300'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* 우측 영역 */}
          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <>
                {/* 진도 표시 */}
                <div className="hidden sm:flex items-center gap-2">
                  <span className="text-xs text-slate-400">{getCompletedCount()}레슨 완료</span>
                  <div className="w-24">
                    <ProgressBar value={getProgressPercent()} />
                  </div>
                  <span className="text-xs text-indigo-400 font-medium">{getProgressPercent()}%</span>
                </div>

                {/* 유저 메뉴 */}
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-sm font-bold text-white">
                    {user?.name?.[0] || 'U'}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    로그아웃
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  로그인
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 text-sm font-medium bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors"
                >
                  무료 시작
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
