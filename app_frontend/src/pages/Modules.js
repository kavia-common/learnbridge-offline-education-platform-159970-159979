import React from 'react';
import { useAuth } from '../state/AuthContext';
import { useLanguage } from '../state/LanguageContext';
import { MODULES } from '../data/content';
import ModuleCard from '../components/ModuleCard';

// PUBLIC_INTERFACE
export default function Modules() {
  /** Displays available learning modules based on age, language, and grade level. */
  const { user } = useAuth();
  const { t } = useLanguage();

  const language = user.language || 'en';
  const ageGroup = user.ageGroup || 'child';

  // Normalize grade level: '1'..'12' for child, or 'adult' for adult content
  const gradeLevelRaw = user.gradeLevel ?? (ageGroup === 'adult' ? 'adult' : '1');
  const gradeLevel = ageGroup === 'adult'
    ? 'adult'
    : String(Number.isFinite(parseInt(gradeLevelRaw, 10)) ? parseInt(gradeLevelRaw, 10) : 1);

  const base = MODULES[language]?.[ageGroup] || [];

  // Primary filter by grade when age group is child
  let modules = ageGroup === 'child'
    ? base.filter((m) => !m.gradeLevels || m.gradeLevels.includes(gradeLevel))
    : base;

  // Fallback: if nothing matched (e.g., legacy/edge cases), show any upper-grade modules for 9–12
  if (ageGroup === 'child' && modules.length === 0) {
    const upperSet = ['9', '10', '11', '12'];
    const upper = base.filter(
      (m) => Array.isArray(m.gradeLevels) && m.gradeLevels.some((g) => upperSet.includes(String(g)))
    );
    if (upper.length > 0) {
      modules = upper;
    }
  }

  return (
    <div className="grid" style={{ gap: 12 }}>
      <div className="title" style={{ fontSize: 20 }}>{t('modules')}</div>
      <div className="grid cols-3">
        {modules.map((m) => <ModuleCard key={m.id} module={m} />)}
      </div>
    </div>
  );
}
