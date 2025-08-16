import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// PUBLIC_INTERFACE
export default function Sidebar() {
  /** Sidebar with main app navigation. */
  const { t } = useTranslation();

  return (
    <nav>
      <NavLink to="/dashboard" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
        🏠 {t('dashboard')}
      </NavLink>
      <NavLink to="/profile" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
        👤 {t('profile')}
      </NavLink>
    </nav>
  );
}
