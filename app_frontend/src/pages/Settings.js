import React from 'react';
import { useAuth } from '../state/AuthContext';
import { useLanguage } from '../state/LanguageContext';
import { AGE_GROUPS, LANGUAGES, GRADE_LEVELS } from '../data/content';

// PUBLIC_INTERFACE
export default function Settings() {
  /** Settings page for language, age group, and grade level preferences. */
  const { user, register } = useAuth();
  const { language, setLanguage } = useLanguage();

  if (!user) return null;

  const handleAgeChange = (e) => {
    const newAge = e.target.value;
    // When switching to adult, force grade to 'adult'; when switching to child from adult, default to 'k' if needed.
    const newGrade = newAge === 'adult'
      ? 'adult'
      : (user.gradeLevel === 'adult' ? 'k' : (user.gradeLevel || 'k'));
    const updated = { ...user, ageGroup: newAge, gradeLevel: newGrade };
    register(updated);
  };

  const handleLangChange = (e) => {
    const code = e.target.value;
    setLanguage(code);
    const updated = { ...user, language: code };
    register(updated);
  };

  const handleGradeChange = (e) => {
    const updated = { ...user, gradeLevel: e.target.value };
    register(updated);
  };

  const isAdult = user.ageGroup === 'adult';
  const gradeOptions = isAdult
    ? GRADE_LEVELS.filter(g => g.code === 'adult')
    : GRADE_LEVELS.filter(g => g.code !== 'adult');

  return (
    <div className="card pad">
      <div className="title" style={{ fontSize: 20 }}>Settings</div>
      <div className="grid cols-2" style={{ marginTop: 12 }}>
        <div>
          <div className="label">Language</div>
          <select className="select" value={language} onChange={handleLangChange} aria-label="Select language">
            {LANGUAGES.map(l => <option key={l.code} value={l.code}>{l.name}</option>)}
          </select>
        </div>
        <div>
          <div className="label">Age Group</div>
          <select className="select" value={user.ageGroup} onChange={handleAgeChange} aria-label="Select age group">
            {AGE_GROUPS.map(a => <option key={a.code} value={a.code}>{a.name}</option>)}
          </select>
        </div>
      </div>

      <div className="grid" style={{ marginTop: 12 }}>
        <div>
          <div className="label">Grade Level</div>
          <select
            className="select"
            value={user.gradeLevel || (isAdult ? 'adult' : 'k')}
            onChange={handleGradeChange}
            aria-label="Select grade level"
            disabled={isAdult}
            title={isAdult ? 'Grade level does not apply to Adult content' : 'Select your grade level'}
          >
            {gradeOptions.map(g => <option key={g.code} value={g.code}>{g.name}</option>)}
          </select>
          {isAdult && (
            <div className="small muted" style={{ marginTop: 6 }}>
              Grade level applies to child content only.
            </div>
          )}
        </div>
      </div>

      <div style={{ marginTop: 16 }}>
        <span className="muted small" aria-live="polite">Theme can be toggled from the top bar.</span>
      </div>
    </div>
  );
}
