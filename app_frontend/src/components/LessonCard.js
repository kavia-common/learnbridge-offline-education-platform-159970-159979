import React from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from './ProgressBar';

// PUBLIC_INTERFACE
export default function LessonCard({ id, title, description, progressPct = 0, icon = '📘' }) {
  /** Displays a module card with progress. */
  return (
    <div className="card">
      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        <div style={{ fontSize: 28 }} aria-hidden>{icon}</div>
        <div>
          <div style={{ fontWeight: 700 }}>{title}</div>
          <div style={{ color: 'var(--text-muted)', fontSize: 14 }}>{description}</div>
        </div>
      </div>
      <div style={{ margin: '12px 0' }}>
        <ProgressBar value={progressPct} />
      </div>
      <Link to={`/modules/${id}`} className="btn" aria-label={`Open ${title}`}>Open</Link>
    </div>
  );
}
