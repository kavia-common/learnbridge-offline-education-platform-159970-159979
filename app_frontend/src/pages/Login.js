import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// PUBLIC_INTERFACE
export default function Login() {
  /** Offline login screen using locally stored credentials. */
  const { login, restoring } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const nav = useNavigate();
  const loc = useLocation();
  const { t } = useTranslation();

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr('');
    if (!email) return setErr(t('emailRequired'));
    if (!password) return setErr(t('passwordRequired'));
    try {
      await login(email, password);
      const from = loc.state?.from?.pathname || '/dashboard';
      nav(from, { replace: true });
    } catch (e2) {
      setErr(t('invalidCreds'));
    }
  };

  if (restoring) {
    return <div className="container">{t('sessionRestore')}</div>;
  }

  return (
    <div className="container" style={{ maxWidth: 420, marginInline: 'auto' }}>
      <h2 style={{ marginBottom: 8 }}>{t('loginHeader')}</h2>
      <form onSubmit={onSubmit} className="card" noValidate>
        <div className="form-row">
          <label htmlFor="email">{t('email')}</label>
          <input id="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
        </div>
        <div className="form-row">
          <label htmlFor="password">{t('password')}</label>
          <input id="password" type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
        </div>
        {err && <div className="badge" role="alert">⚠️ {err}</div>}
        <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
          <button type="submit" className="btn">{t('signIn')}</button>
          <Link to="/register" className="btn ghost">{t('register')}</Link>
        </div>
      </form>
    </div>
  );
}
