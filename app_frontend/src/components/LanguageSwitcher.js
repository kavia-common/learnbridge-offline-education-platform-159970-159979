import React from 'react';
import { useTranslation } from 'react-i18next';
import { getSupportedLanguages } from '../i18n';

// PUBLIC_INTERFACE
export default function LanguageSwitcher() {
  /** Simple language selector using i18next. */
  const { i18n, t } = useTranslation();
  const langs = getSupportedLanguages();

  return (
    <label aria-label={t('selectLanguage')}>
      <select
        className="input"
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        aria-label={t('selectLanguage')}
      >
        {langs.map((l) => (
          <option key={l.code} value={l.code}>{l.label}</option>
        ))}
      </select>
    </label>
  );
}
