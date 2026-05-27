import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LandingPage from './pages/LandingPage';
import RoadmapPage from './pages/RoadmapPage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import LessonPage from './pages/LessonPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function Layout({ children, hideFooter }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900">
      <Navbar />
      <main className="flex-1">{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<Layout><LandingPage /></Layout>} />
        <Route path="/roadmap" element={<Layout><RoadmapPage /></Layout>} />
        <Route path="/courses" element={<Layout><CoursesPage /></Layout>} />
        <Route path="/courses/:moduleId" element={<Layout><CourseDetailPage /></Layout>} />
        <Route path="/courses/:moduleId/lessons/:lessonId" element={<Layout hideFooter><LessonPage /></Layout>} />
        <Route path="*" element={
          <Layout>
            <div className="flex items-center justify-center min-h-[60vh]">
              <div className="text-center">
                <p className="text-6xl mb-4">🤔</p>
                <h1 className="text-2xl font-bold text-white mb-2">페이지를 찾을 수 없습니다</h1>
                <p className="text-slate-400 mb-6">요청한 페이지가 존재하지 않습니다.</p>
                <a href="/" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors">
                  홈으로 돌아가기
                </a>
              </div>
            </div>
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
  );
}
