import React from 'react';
import { useAuth } from '../state/AuthContext';
import { useLanguage } from '../state/LanguageContext';
import { MODULES } from '../data/content';
import ModuleCard from '../components/ModuleCard';

// PUBLIC_INTERFACE
export default function Modules() {
  /** Displays available learning modules based on age and language. */
  const { user } = useAuth();
  const { t } = useLanguage();
  const modules = MODULES[user.language || 'en']?.[user.ageGroup || 'child'] || [];

  return (
    <div className="grid" style={{ gap: 12 }}>
      <div className="title" style={{ fontSize: 20 }}>{t('modules')}</div>
      <div className="grid cols-3">
        {modules.map((m) => <ModuleCard key={m.id} module={m} />)}
      </div>
    </div>
  );
}
