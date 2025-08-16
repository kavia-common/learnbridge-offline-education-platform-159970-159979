import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { getItem, setItem, removeItem } from '../utils/storage';

const AuthContext = createContext({
  user: null,
  login: (_name) => {},
  register: (_profile) => {},
  logout: () => {},
});

// Internal helper to normalize grade values to '1'..'12' or 'adult'
function normalizeGrade(ageGroup, gradeLevel) {
  if (ageGroup === 'adult') return 'adult';
  const gRaw = (gradeLevel ?? '1').toString().toLowerCase();
  if (gRaw === 'k' || gRaw === '0') return '1';
  const n = parseInt(gRaw, 10);
  if (!Number.isFinite(n)) return '1';
  if (n < 1) return '1';
  if (n > 12) return '12';
  return String(n);
}

// PUBLIC_INTERFACE
export function AuthProvider({ children }) {
  /** Provide a simple client-side authentication state with grade support for 1–12. */
  const [user, setUser] = useState(() => {
    const existing = getItem('user', null);
    if (!existing) return null;
    // Normalize any older profiles (e.g., 'k' to '1')
    const normalized = {
      ...existing,
      gradeLevel: normalizeGrade(existing.ageGroup ?? 'child', existing.gradeLevel),
      ageGroup: existing.ageGroup ?? 'child',
      language: existing.language ?? 'en',
      name: existing.name ?? '',
    };
    return normalized;
  });

  // On first mount, write back normalized user if needed
  useEffect(() => {
    if (!user) return;
    const normalized = {
      ...user,
      gradeLevel: normalizeGrade(user.ageGroup, user.gradeLevel),
    };
    if (normalized.gradeLevel !== user.gradeLevel) {
      setItem('user', normalized);
      setUser(normalized);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const login = (name) => {
    const existing = getItem('user', null);
    let u = existing || { name, ageGroup: 'child', gradeLevel: '1', language: 'en', createdAt: Date.now() };
    // Normalize in case an older stored profile has 'k' or invalid grade
    const normalizedGrade = normalizeGrade(u.ageGroup, u.gradeLevel);
    if (normalizedGrade !== u.gradeLevel) {
      u = { ...u, gradeLevel: normalizedGrade };
    }
    setItem('user', u);
    setUser(u);
  };

  const register = (profile) => {
    const ageGroup = profile?.ageGroup ?? user?.ageGroup ?? 'child';
    const gradeCandidate = profile?.gradeLevel ?? user?.gradeLevel ?? (ageGroup === 'adult' ? 'adult' : '1');
    const normalizedGrade = normalizeGrade(ageGroup, gradeCandidate);

    const u = {
      name: profile?.name ?? user?.name ?? '',
      ageGroup,
      language: profile?.language ?? user?.language ?? 'en',
      gradeLevel: normalizedGrade,
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
