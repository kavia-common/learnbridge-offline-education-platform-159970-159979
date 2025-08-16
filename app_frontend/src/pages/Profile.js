import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useProgress } from '../contexts/ProgressContext';
import { useTranslation } from 'react-i18next';

// PUBLIC_INTERFACE
export default function Profile() {
  /** Shows user info, points, and badges. */
  const { user } = useAuth();
  const { progress } = useProgress();
  const { t } = useTranslation();

  if (!user) return null;

  const badgeMap = {
    starter: { icon: '🌟', label: t('badge_starter') },
    streak: { icon: '🔥', label: t('badge_streak') }
  };

  return (
    <div className="grid">
      <div className="col-12">
        <div className="card">
          <h2 style={{ marginTop: 0 }}>{t('yourProfile')}</h2>
          <div><strong>{t('name')}:</strong> {user.name}</div>
          <div><strong>{t('yourEmail')}:</strong> {user.email}</div>
        </div>
      </div>
      <div className="col-6">
        <div className="card kpi">
          <div>{t('totalPoints')}</div>
          <strong style={{ color: 'var(--primary)' }}>{progress.totalPoints}</strong>
        </div>
      </div>
      <div className="col-6">
        <div className="card">
          <div style={{ marginBottom: 8, fontWeight: 700 }}>{t('badges')}</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {progress.badges.length === 0 ? (
              <span style={{ color: 'var(--text-muted)' }}>—</span>
            ) : progress.badges.map((b) => (
              <div className="badge" key={b}>{badgeMap[b]?.icon} {badgeMap[b]?.label || b}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
