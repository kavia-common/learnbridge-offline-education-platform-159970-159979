import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../state/AuthContext';
import { MODULES } from '../data/content';

// PUBLIC_INTERFACE
export default function Lesson() {
  /** Lesson view for offline-friendly content (no progress tracking). */
  const { moduleId, lessonId } = useParams();
  const { user } = useAuth();

  const module = useMemo(() => {
    const language = user.language || 'en';
    const ageGroup = user.ageGroup || 'child';

    // Normalize grade level for reliable filtering
    const gradeLevelRaw = user.gradeLevel ?? (ageGroup === 'adult' ? 'adult' : '1');
    const gradeLevel = ageGroup === 'adult'
      ? 'adult'
      : String(Number.isFinite(parseInt(gradeLevelRaw, 10)) ? parseInt(gradeLevelRaw, 10) : 1);

    const base = MODULES[language]?.[ageGroup] || [];
    const list = ageGroup === 'child'
      ? base.filter(m => !m.gradeLevels || m.gradeLevels.includes(gradeLevel))
      : base;
    return list.find(m => m.id === moduleId);
  }, [moduleId, user]);

  const lesson = module?.lessons?.find(l => l.id === lessonId);

  if (!module || !lesson) return <div className="card pad">Lesson not found.</div>;

  return (
    <div className="grid" style={{ gap: 12 }}>
      <div className="card pad">
        <div className="title" style={{ fontSize: 20 }}>{module.title} • {lesson.title}</div>
        <div className="muted small" style={{ marginTop: 8 }}>
          Est. duration: {lesson.duration} min
        </div>
        <div style={{ marginTop: 12 }}>
          <p className="muted">This is a lightweight offline-friendly lesson. Content can be text, images, or mini-interactives.</p>
        </div>
        <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
          {module.quizzes?.[0] && (
            <Link className="btn" to={`/modules/${module.id}/quiz/${module.quizzes[0].id}`}>Go to quiz</Link>
          )}
          <Link className="btn" to="/modules">Back to Modules</Link>
        </div>
      </div>
    </div>
  );
}
