import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import useAuthStore from '../store/authStore';
import { authAPI } from '../api/client';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await authAPI.login(form);
      login(res.user, res.token);
      navigate('/courses');
    } catch (err) {
      setError(err.message || '로그인에 실패했습니다. 이메일과 비밀번호를 확인하세요.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* 로고 */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <span className="text-3xl">⚡</span>
            <span className="text-2xl font-bold text-white">Vibe<span className="text-indigo-400">Coding</span></span>
          </Link>
          <h1 className="text-2xl font-bold text-white">다시 오셨군요!</h1>
          <p className="text-slate-400 mt-2">계속 학습을 이어가세요</p>
        </div>

        {/* 폼 */}
        <div className="bg-slate-800 rounded-2xl border border-slate-700 p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">이메일</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">비밀번호</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

            <Button type="submit" className="w-full" size="lg" disabled={loading}>
              {loading ? '로그인 중...' : '로그인'}
            </Button>
          </form>

          <p className="text-center text-slate-400 text-sm mt-6">
            계정이 없으신가요?{' '}
            <Link to="/register" className="text-indigo-400 hover:text-indigo-300 font-medium">
              무료 가입하기
            </Link>
          </p>
        </div>

        {/* 체험 안내 */}
        <p className="text-center text-xs text-slate-500 mt-6">
          로그인 없이도 강의를 둘러보실 수 있습니다.{' '}
          <Link to="/courses" className="text-slate-400 hover:text-white">강의 목록 보기 →</Link>
        </p>
      </div>
    </div>
  );
}
