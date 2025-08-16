import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../state/AuthContext';
import { MODULES } from '../data/content';
import { useProgress } from '../state/ProgressContext';

// PUBLIC_INTERFACE
export default function Lesson() {
  /** Lesson view allowing completion to earn points. */
  const { moduleId, lessonId } = useParams();
  const { user } = useAuth();
  const { markLessonComplete } = useProgress();

  const module = useMemo(() => {
    const list = MODULES[user.language || 'en']?.[user.ageGroup || 'child'] || [];
    return list.find(m => m.id === moduleId);
  }, [moduleId, user]);

  const lesson = module?.lessons?.find(l => l.id === lessonId);

  if (!module || !lesson) return <div className="card pad">Lesson not found.</div>;

  const handleComplete = () => {
    markLessonComplete(moduleId, lessonId, 5);
  };

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
          <button className="btn primary" onClick={handleComplete}>Mark Complete (+5)</button>
          {module.quizzes?.[0] && (
            <Link className="btn" to={`/modules/${module.id}/quiz/${module.quizzes[0].id}`}>Go to quiz</Link>
          )}
        </div>
      </div>
    </div>
  );
}
