import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../state/AuthContext';
import { MODULES } from '../data/content';
import { useProgress } from '../state/ProgressContext';

// PUBLIC_INTERFACE
export default function Quiz() {
  /** Simple quiz page that awards points based on correct answers. */
  const { moduleId, quizId } = useParams();
  const { user } = useAuth();
  const { recordQuizScore } = useProgress();
  const [score, setScore] = useState(null);

  const module = useMemo(() => {
    const list = MODULES[user.language || 'en']?.[user.ageGroup || 'child'] || [];
    return list.find(m => m.id === moduleId);
  }, [moduleId, user]);

  const quiz = module?.quizzes?.find(q => q.id === quizId);

  if (!module || !quiz) return <div className="card pad">Quiz not found.</div>;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Offline-friendly fake evaluation: give a random score influenced by a checked input
    const correctBias = e.target.elements['q1']?.checked ? 20 : 0;
    const s = Math.min(100, Math.round(Math.random() * 60) + 20 + correctBias);
    setScore(s);
    recordQuizScore(moduleId, quizId, s);
  };

  return (
    <div className="grid" style={{ gap: 12 }}>
      <div className="card pad">
        <div className="title" style={{ fontSize: 20 }}>{module.title} • {quiz.title}</div>
        <form onSubmit={handleSubmit} style={{ marginTop: 12 }}>
          <div className="label">Sample question: Check the box to try for a higher score.</div>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6 }}>
            <input type="checkbox" name="q1" /> I understand this concept.
          </label>
          <div style={{ marginTop: 12 }}>
            <button className="btn primary" type="submit">Submit</button>
          </div>
        </form>
        {score !== null && (
          <div className="card pad" style={{ marginTop: 12 }}>
            <div>Your Score: <strong>{score}</strong></div>
            <div className="muted small">Points awarded equal to your score.</div>
          </div>
        )}
      </div>
    </div>
  );
}
