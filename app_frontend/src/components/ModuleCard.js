import React from 'react';
import { Link } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function ModuleCard({ module }) {
  /** Card for a learning module with quick actions. */
  return (
    <div className="card pad" style={{ borderColor: module.color }}>
      <div className="title" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{
          width: 10, height: 10, borderRadius: 999, background: module.color, display: 'inline-block'
        }} />
        {module.title}
      </div>
      <div className="muted small" style={{ marginTop: 6 }}>{module.description}</div>
      <div style={{ marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {module.lessons?.[0] && (
          <Link className="btn primary" to={`/modules/${module.id}/lesson/${module.lessons[0].id}`}>Start Lesson</Link>
        )}
        {module.quizzes?.[0] && (
          <Link className="btn" to={`/modules/${module.id}/quiz/${module.quizzes[0].id}`}>Take Quiz</Link>
        )}
      </div>
    </div>
  );
}
