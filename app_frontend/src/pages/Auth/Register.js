import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../state/AuthContext';
import { useLanguage } from '../../state/LanguageContext';
import { AGE_GROUPS, LANGUAGES } from '../../data/content';

// PUBLIC_INTERFACE
export default function Register() {
  /** Onboarding page to create a local profile (name, language, age group). */
  const { user, register } = useAuth();
  const { language, setLanguage } = useLanguage();
  const [name, setName] = useState('');
  const [ageGroup, setAgeGroup] = useState('child');

  if (user) return <Navigate to="/" replace />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim().length < 2) return;
    register({ name: name.trim(), ageGroup, language });
  };

  return (
    <div className="grid" style={{ placeItems: 'center', minHeight: '70vh' }}>
      <div className="card pad" style={{ maxWidth: 500, width: '100%' }}>
        <div className="title" style={{ fontSize: 20 }}>Create Profile</div>
        <form onSubmit={handleSubmit} style={{ marginTop: 12, display: 'grid', gap: 10 }}>
          <div>
            <div className="label">Name</div>
            <input className="input" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div>
            <div className="label">Language</div>
            <select className="select" value={language} onChange={(e) => setLanguage(e.target.value)}>
              {LANGUAGES.map(l => <option key={l.code} value={l.code}>{l.name}</option>)}
            </select>
          </div>
          <div>
            <div className="label">Age Group</div>
            <select className="select" value={ageGroup} onChange={(e) => setAgeGroup(e.target.value)}>
              {AGE_GROUPS.map(a => <option key={a.code} value={a.code}>{a.name}</option>)}
            </select>
          </div>
          <button className="btn primary" type="submit">Create</button>
        </form>
      </div>
    </div>
  );
}
