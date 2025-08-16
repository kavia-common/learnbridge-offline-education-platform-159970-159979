import React, { createContext, useContext, useMemo, useState } from 'react';
import { getItem, setItem, removeItem } from '../utils/storage';

const AuthContext = createContext({
  user: null,
  login: (_name) => {},
  register: (_profile) => {},
  logout: () => {},
});

// PUBLIC_INTERFACE
export function AuthProvider({ children }) {
  /** Provide a simple client-side authentication state. */
  const [user, setUser] = useState(() => getItem('user', null));

  const login = (name) => {
    const existing = getItem('user', null);
    // Default profile for new users, including gradeLevel for child content.
    const u = existing || { name, ageGroup: 'child', gradeLevel: 'k', language: 'en', createdAt: Date.now() };
    setItem('user', u);
    setUser(u);
  };

  const register = (profile) => {
    // Ensure sensible defaults for gradeLevel if not provided.
    const computedGrade =
      profile?.ageGroup === 'adult'
        ? 'adult'
        : (profile?.gradeLevel && profile.gradeLevel !== 'adult' ? profile.gradeLevel : 'k');

    const u = {
      name: profile.name ?? user?.name ?? '',
      ageGroup: profile.ageGroup ?? user?.ageGroup ?? 'child',
      language: profile.language ?? user?.language ?? 'en',
      gradeLevel: profile.gradeLevel ?? user?.gradeLevel ?? computedGrade,
      createdAt: Date.now(),
    };
    setItem('user', u);
    setUser(u);
  };

  const logout = () => {
    removeItem('user');
    setUser(null);
  };

  const value = useMemo(() => ({ user, login, register, logout }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// PUBLIC_INTERFACE
export function useAuth() {
  /** Access authentication context with user and auth actions. */
  return useContext(AuthContext);
}
