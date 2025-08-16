import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

// PUBLIC_INTERFACE
export default function Layout({ children, theme, onToggleTheme }) {
  /** App shell with sidebar and top header. */
  return (
    <div className="app-layout">
      <aside className="sidebar" aria-label="Sidebar">
        <div className="brand" aria-label="Brand">
          <span aria-hidden>🎓</span> LearnBridge
        </div>
        <Sidebar />
      </aside>
      <main className="content-area">
        <Header theme={theme} onToggleTheme={onToggleTheme} />
        <div className="container">{children}</div>
      </main>
    </div>
  );
}
