import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// PUBLIC_INTERFACE
export default function NotFound() {
  /** Fallback page for unknown routes. */
  const { t } = useTranslation();
  return (
    <div className="container">
      <h2>404</h2>
      <p>{t('notFound')}</p>
      <Link className="btn" to="/dashboard">{t('dashboard')}</Link>
    </div>
  );
}
