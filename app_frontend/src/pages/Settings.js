import React from 'react';
import { useAuth } from '../state/AuthContext';
import { useLanguage } from '../state/LanguageContext';
import { AGE_GROUPS, LANGUAGES } from '../data/content';
import { setItem } from '../utils/storage';

// PUBLIC_INTERFACE
export default function Settings() {
  /** Settings page for language and age group preferences. */
  const { user, register } = useAuth();
  const { language, setLanguage } = useLanguage();

  if (!user) return null;

  const handleAgeChange = (e) => {
    const updated = { ...user, ageGroup: e.target.value };
    register(updated);
  };

  const handleLangChange = (e) => {
    setLanguage(e.target.value);
    const updated = { ...user, language: e.target.value };
    register(updated);
  };

  const clearOffline = () => {
    // Clear progress offline data
    setItem('progress', {});
    setItem('badges', []);
    setItem('totalPoints', 0);
    // leave user and language intact
    window.alert('Offline progress cleared.');
  };

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
      <div style={{ marginTop: 16, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <button className="btn" onClick={clearOffline}>Clear Offline Progress</button>
        <span className="muted small" aria-live="polite">Theme can be toggled from the top bar.</span>
      </div>
    </div>
  );
}
