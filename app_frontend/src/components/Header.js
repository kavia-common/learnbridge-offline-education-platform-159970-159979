import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function Header({ theme, onToggleTheme }) {
  /** Top header showing actions and session info. */
  const { user, logout } = useAuth();
  const { t } = useTranslation();

  return (
    <header className="header">
      <div>
        <strong>{t('appName')}</strong>
      </div>
      <div className="header-actions">
        <LanguageSwitcher />
        <button className="btn ghost" onClick={onToggleTheme} aria-label={t('toggleTheme')}>
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        {user ? (
          <>
            <span style={{ color: 'var(--text-muted)' }}>{user.name}</span>
            <button className="btn" onClick={logout}>{t('signOut')}</button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn ghost">{t('signIn')}</Link>
            <Link to="/register" className="btn">{t('register')}</Link>
          </>
        )}
      </div>
    </header>
  );
}
