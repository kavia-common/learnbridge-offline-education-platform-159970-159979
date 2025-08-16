import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { db } from '../utils/db';

const AuthContext = createContext(null);

// PUBLIC_INTERFACE
export function useAuth() {
  /** Access authentication state and actions. */
  return useContext(AuthContext);
}

// PUBLIC_INTERFACE
export function AuthProvider({ children }) {
  /** Provides offline-first auth with local persistence. */
  const [user, setUser] = useState(null);
  const [restoring, setRestoring] = useState(true);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        const session = await db.get('session', 'current');
        if (isMounted && session) {
          setUser(session);
        }
      } finally {
        if (isMounted) setRestoring(false);
      }
    })();
    return () => { isMounted = false; };
  }, []);

  const login = async (email, password) => {
    const entries = await db.entries('users');
    const found = entries.map(([_, v]) => v).find((u) => u.email === email && u.password === password);
    if (!found) throw new Error('INVALID_CREDENTIALS');
    await db.set('session', 'current', { id: found.id, name: found.name, email: found.email });
    setUser({ id: found.id, name: found.name, email: found.email });
  };

  const register = async (name, email, password) => {
    const entries = await db.entries('users');
    const exists = entries.map(([_, v]) => v).find((u) => u.email === email);
    if (exists) throw new Error('ALREADY_EXISTS');
    const id = `u_${Date.now()}`;
    const userObj = { id, name, email, password };
    await db.set('users', id, userObj);
    await db.set('session', 'current', { id, name, email });
    setUser({ id, name, email });
  };

  const logout = async () => {
    await db.remove('session', 'current');
    setUser(null);
  };

  const value = useMemo(() => ({ user, login, register, logout, restoring }), [user, restoring]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
