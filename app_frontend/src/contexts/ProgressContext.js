import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react';
import { db } from '../utils/db';
import { useAuth } from './AuthContext';

const ProgressContext = createContext(null);

// PUBLIC_INTERFACE
export function useProgress() {
  /** Access user progress data and actions. */
  return useContext(ProgressContext);
}

// PUBLIC_INTERFACE
export function ProgressProvider({ children }) {
  /** Provides persistent progress tracking per user. */
  const { user } = useAuth();
  const [progress, setProgress] = useState({ totalPoints: 0, modules: {}, badges: [] });

  useEffect(() => {
    let mounted = true;
    (async () => {
      if (user) {
        const p = await db.get('progress', user.id);
        if (mounted) {
          setProgress(p || { totalPoints: 0, modules: {}, badges: [] });
        }
      } else {
        setProgress({ totalPoints: 0, modules: {}, badges: [] });
      }
    })();
    return () => { mounted = false; };
  }, [user]);

  // Persist helper (stable)
  const save = useCallback(async (next) => {
    setProgress(next);
    if (user) await db.set('progress', user.id, next);
  }, [user]);

  // Stable function to award points and persist asynchronously
  const awardPoints = useCallback(async (moduleId, pts) => {
    setProgress((current) => {
      const prevModulePts = current.modules[moduleId]?.points || 0;
      const modules = {
        ...current.modules,
        [moduleId]: { ...current.modules[moduleId], points: prevModulePts + pts }
      };
      const totalPoints = current.totalPoints + pts;
      const badges = new Set(current.badges);
      if (totalPoints >= 100) badges.add('streak');
      if (Object.keys(modules).length >= 1) badges.add('starter');

      const next = { totalPoints, modules, badges: Array.from(badges) };
      // Persist without blocking UI
      if (user) db.set('progress', user.id, next);
      return next;
    });
  }, [user]);

  // Stable function to mark completion and persist asynchronously
  const markCompleted = useCallback(async (moduleId) => {
    setProgress((current) => {
      const modules = { ...current.modules, [moduleId]: { ...current.modules[moduleId], completed: true } };
      const next = { ...current, modules };
      if (user) db.set('progress', user.id, next);
      return next;
    });
  }, [user]);

  const value = useMemo(
    () => ({ progress, awardPoints, markCompleted }),
    [progress, awardPoints, markCompleted]
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}
