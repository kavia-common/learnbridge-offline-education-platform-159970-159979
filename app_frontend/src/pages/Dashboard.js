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

  // Normalize key preferences
  const language = user.language || 'en';
  const ageGroup = user.ageGroup || 'child';
  // Ensure grade level is a normalized string '1'..'12' or 'adult'
  const gradeLevelRaw = user.gradeLevel ?? (ageGroup === 'adult' ? 'adult' : '1');
  const gradeLevel = ageGroup === 'adult'
    ? 'adult'
    : String(Number.isFinite(parseInt(gradeLevelRaw, 10)) ? parseInt(gradeLevelRaw, 10) : 1);

  // Base content by language and age group
  const base = MODULES[language]?.[ageGroup] || [];

  // Primary filter: match by grade when child; adults see all adult modules
  let modules = ageGroup === 'child'
    ? base.filter((m) => !m.gradeLevels || m.gradeLevels.includes(gradeLevel))
    : base;

  // Fallback: if a high-school grade (9–12) yields nothing (e.g., due to legacy data),
  // show any modules that target upper grades explicitly so "Continue learning" is not empty.
  if (ageGroup === 'child' && modules.length === 0) {
    const upperSet = ['9', '10', '11', '12'];
    const upper = base.filter((m) => Array.isArray(m.gradeLevels) && m.gradeLevels.some((g) => upperSet.includes(String(g))));
    if (upper.length > 0) {
      modules = upper;
    }
  }

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
