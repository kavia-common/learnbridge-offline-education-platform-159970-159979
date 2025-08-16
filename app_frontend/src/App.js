import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, NavLink } from 'react-router-dom';
import './App.css';

import { AuthProvider, useAuth } from './state/AuthContext';
import { LanguageProvider } from './state/LanguageContext';

import Dashboard from './pages/Dashboard';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Modules from './pages/Modules';
import Lesson from './pages/Lesson';
import Quiz from './pages/Quiz';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Offline from './pages/Offline';

// PUBLIC_INTERFACE
function ProtectedRoute({ children }) {
  /** Protects a route by redirecting to login if no user is present. */
  const { user } = useAuth();
  if (!user) return <Navigate to="/auth/login" replace />;
  return children;
}

// PUBLIC_INTERFACE
function Sidebar() {
  /** App sidebar with navigation. */
  const { user, logout } = useAuth();

  return (
    <aside className="sidebar">
      <div className="brand" aria-label="App Brand">
        <span className="brand-badge" aria-hidden>LB</span> LearnBridge
      </div>

      <nav className="nav" aria-label="Main Navigation">
        <NavLink to="/" end>🏠 Dashboard</NavLink>
        <NavLink to="/modules">📚 Modules</NavLink>
        <NavLink to="/profile">👤 Profile</NavLink>
        <NavLink to="/offline">📡 Offline</NavLink>
        <NavLink to="/settings">⚙️ Settings</NavLink>
      </nav>

      <div className="sidebar-footer">
        {user && (
          <div className="card pad">
            <div className="title" style={{fontSize: 14}}>Hi, {user.name}</div>
          </div>
        )}
        {user ? (
          <button className="btn" onClick={logout} aria-label="Logout">
            ⎋ Logout
          </button>
        ) : (
          <NavLink className="btn primary" to="/auth/login">Login</NavLink>
        )}
      </div>
    </aside>
  );
}

// PUBLIC_INTERFACE
function Topbar() {
  /** Top bar with quick actions and theme toggle. */
  const [theme, setTheme] = useState('light');
  const { user } = useAuth();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');

  return (
    <header className="topbar">
      <div className="muted small" aria-live="polite">
        {user ? `Welcome back, ${user.name}!` : 'Welcome to LearnBridge'}
      </div>
      <div className="actions">
        <button className="btn" onClick={toggleTheme} aria-label="Toggle Theme">
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>
    </header>
  );
}

// PUBLIC_INTERFACE
function AppShell() {
  /** Primary application shell that composes the layout and routes. */
  const appRoutes = useMemo(() => (
    <Routes>
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />

      <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/modules" element={<ProtectedRoute><Modules /></ProtectedRoute>} />
      <Route path="/modules/:moduleId/lesson/:lessonId" element={<ProtectedRoute><Lesson /></ProtectedRoute>} />
      <Route path="/modules/:moduleId/quiz/:quizId" element={<ProtectedRoute><Quiz /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      <Route path="/offline" element={<ProtectedRoute><Offline /></ProtectedRoute>} />
      <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  ), []);

  return (
    <div className="app-shell">
      <Sidebar />
      <main className="main">
        <Topbar />
        <div className="content">
          {appRoutes}
        </div>
      </main>
    </div>
  );
}

// PUBLIC_INTERFACE
function App() {
  /** Root component with providers and router. */
  return (
    <LanguageProvider>
      <AuthProvider>
        <BrowserRouter>
          <AppShell />
        </BrowserRouter>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;
