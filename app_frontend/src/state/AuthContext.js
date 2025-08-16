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
    const u = existing || { name, ageGroup: 'child', language: 'en', createdAt: Date.now() };
    setItem('user', u);
    setUser(u);
  };

  const register = (profile) => {
    const u = { ...profile, createdAt: Date.now() };
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
