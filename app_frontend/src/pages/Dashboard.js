import React from 'react';
import { useAuth } from '../state/AuthContext';
import { useLanguage } from '../state/LanguageContext';
import { MODULES } from '../data/content';
import ModuleCard from '../components/ModuleCard';

// PUBLIC_INTERFACE
export default function Dashboard() {
  /** Home dashboard with quick access to modules (no progress tracking). */
  const { user } = useAuth();
  const { t } = useLanguage();

  const language = user.language || 'en';
  const ageGroup = user.ageGroup || 'child';
  const gradeLevel = user.gradeLevel || (ageGroup === 'adult' ? 'adult' : 'k');
  const base = MODULES[language]?.[ageGroup] || [];
  const modules = ageGroup === 'child'
    ? base.filter(m => !m.gradeLevels || m.gradeLevels.includes(gradeLevel))
    : base;

  return (
    <div className="grid" style={{ gap: 16 }}>
      <div className="title" style={{ fontSize: 20 }}>{t('dashboard')}</div>

      <div className="card pad">
        <div className="title" style={{ fontSize: 18 }}>{t('continueLearning')}</div>
        <div className="grid cols-3" style={{ marginTop: 12 }}>
          {modules.map((m) => <ModuleCard key={m.id} module={m} />)}
        </div>
      </div>
    </div>
  );
}
