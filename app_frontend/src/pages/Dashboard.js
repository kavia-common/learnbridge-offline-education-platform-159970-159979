import React from 'react';
import { useTranslation } from 'react-i18next';
import LessonCard from '../components/LessonCard';
import { useProgress } from '../contexts/ProgressContext';

const MODULES = [
  { id: 'literacy', titleKey: 'module_literacy', icon: '📖', description: 'Letters, words, and comprehension.' },
  { id: 'math', titleKey: 'module_math', icon: '🧮', description: 'Numbers, operations, and problem solving.' },
  { id: 'thinking', titleKey: 'module_thinking', icon: '🧠', description: 'Logic puzzles and decision-making.' },
  { id: 'vocational', titleKey: 'module_vocational', icon: '🛠️', description: 'Practical job skills.' }
];

// PUBLIC_INTERFACE
export default function Dashboard() {
  /** Dashboard with user KPIs and module cards. */
  const { t } = useTranslation();
  const { progress } = useProgress();

  return (
    <div className="grid">
      <div className="col-3">
        <div className="card kpi">
          <div>{t('points')}</div>
          <strong style={{ color: 'var(--primary)' }}>{progress.totalPoints}</strong>
        </div>
      </div>
      <div className="col-3">
        <div className="card kpi">
          <div>{t('achievements')}</div>
          <strong style={{ color: 'var(--accent)' }}>{progress.badges.length}</strong>
        </div>
      </div>
      <div className="col-6">
        <div className="card">
          <div style={{ marginBottom: 8, fontWeight: 700 }}>{t('modules')}</div>
          <div className="grid">
            {MODULES.map((m) => {
              const moduleProgress = progress.modules[m.id] || {};
              const pct = Math.min(100, Math.round((moduleProgress.points || 0) / 50 * 100));
              return (
                <div className="col-6" key={m.id}>
                  <LessonCard
                    id={m.id}
                    icon={m.icon}
                    title={t(m.titleKey)}
                    description={m.description}
                    progressPct={pct}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="card">
          <div className="badge">🎉 {t('startLearning')}</div>
        </div>
      </div>
    </div>
  );
}
