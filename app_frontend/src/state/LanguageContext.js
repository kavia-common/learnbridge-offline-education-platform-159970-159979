import React, { createContext, useContext, useMemo, useState } from 'react';
import { getItem, setItem } from '../utils/storage';
import { LANGUAGES, STRINGS } from '../data/content';

const LanguageContext = createContext({
  language: 'en',
  t: (key) => key,
  languages: LANGUAGES,
  setLanguage: () => {},
});

// PUBLIC_INTERFACE
export function LanguageProvider({ children }) {
  /** Provide current language and translation function to the app. */
  const [language, setLang] = useState(() => getItem('language', 'en'));

  const setLanguage = (code) => {
    setLang(code);
    setItem('language', code);
  };

  const value = useMemo(() => ({
    language,
    languages: LANGUAGES,
    setLanguage,
    t: (key) => STRINGS[language]?.[key] ?? key,
  }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

// PUBLIC_INTERFACE
export function useLanguage() {
  /** Access current language and translation function. */
  return useContext(LanguageContext);
}
