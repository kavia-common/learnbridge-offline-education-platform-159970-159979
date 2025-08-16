import React from 'react';
import { useOffline } from '../contexts/OfflineContext';
import { useTranslation } from 'react-i18next';

// PUBLIC_INTERFACE
export default function OfflineNotice() {
  /** Shows a small banner when offline. */
  const { online } = useOffline();
  const { t } = useTranslation();

  if (online) return null;
  return <div className="offline-banner" role="status">{t('offline')}</div>;
}
