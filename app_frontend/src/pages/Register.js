import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// PUBLIC_INTERFACE
export default function Register() {
  /** Offline registration screen storing credentials locally. */
  const { register } = useAuth();
  const nav = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const { t } = useTranslation();

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr('');
    if (!name) return setErr(t('nameRequired'));
    if (!email) return setErr(t('emailRequired'));
    if (!password) return setErr(t('passwordRequired'));
    try {
      await register(name, email, password);
      nav('/dashboard', { replace: true });
    } catch (e2) {
      setErr('Email already used');
    }
  };

  return (
    <div className="container" style={{ maxWidth: 420, marginInline: 'auto' }}>
      <h2 style={{ marginBottom: 8 }}>{t('registerHeader')}</h2>
      <form onSubmit={onSubmit} className="card" noValidate>
        <div className="form-row">
          <label htmlFor="name">{t('name')}</label>
          <input id="name" className="input" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
        </div>
        <div className="form-row">
          <label htmlFor="email">{t('email')}</label>
          <input id="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
        </div>
        <div className="form-row">
          <label htmlFor="password">{t('password')}</label>
          <input id="password" type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="new-password" />
        </div>
        {err && <div className="badge" role="alert">⚠️ {err}</div>}
        <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
          <button type="submit" className="btn">{t('register')}</button>
          <Link to="/login" className="btn ghost">{t('signIn')}</Link>
        </div>
      </form>
    </div>
  );
}
