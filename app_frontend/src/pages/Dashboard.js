import React from 'react';
import { useAuth } from '../state/AuthContext';
import { useLanguage } from '../state/LanguageContext';
import { useProgress } from '../state/ProgressContext';
import { MODULES } from '../data/content';
import ModuleCard from '../components/ModuleCard';

// PUBLIC_INTERFACE
export default function Dashboard() {
  /** Home dashboard displaying KPIs and quick module access. */
  const { user } = useAuth();
  const { t } = useLanguage();
  const { totalPoints, progress } = useProgress();

  const modules = MODULES[user.language || 'en']?.[user.ageGroup || 'child'] || [];

  const completedLessons = Object.values(progress).reduce((sum, mod) => sum + Object.values(mod.lessons || {}).filter(Boolean).length, 0);
  const quizzesTaken = Object.values(progress).reduce((sum, mod) => sum + Object.keys(mod.quizzes || {}).length, 0);
  const progressPct = Math.min(100, Math.round((completedLessons + quizzesTaken) * 10));

  return (
    <div className="grid" style={{ gap: 16 }}>
      <div className="kpis">
        <div className="card pad">
          <div className="muted small">{t('yourProgress')}</div>
          <div className="title" style={{ fontSize: 22, marginTop: 4 }}>{progressPct}%</div>
        </div>
        <div className="card pad">
          <div className="muted small">Points</div>
          <div className="title" style={{ fontSize: 22, marginTop: 4 }}>{totalPoints}</div>
        </div>
        <div className="card pad">
          <div className="muted small">Lessons</div>
          <div className="title" style={{ fontSize: 22, marginTop: 4 }}>{completedLessons}</div>
        </div>
        <div className="card pad">
          <div className="muted small">Quizzes</div>
          <div className="title" style={{ fontSize: 22, marginTop: 4 }}>{quizzesTaken}</div>
        </div>
      </div>

      <div className="card pad">
        <div className="title" style={{ fontSize: 18 }}>{t('continueLearning')}</div>
        <div className="grid cols-3" style={{ marginTop: 12 }}>
          {modules.map((m) => <ModuleCard key={m.id} module={m} />)}
        </div>
      </div>
    </div>
  );
}
