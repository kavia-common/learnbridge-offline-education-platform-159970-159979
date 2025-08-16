import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { getItem, setItem } from '../utils/storage';

const ProgressContext = createContext({
  progress: {},
  totalPoints: 0,
  badges: [],
  markLessonComplete: (_moduleId, _lessonId, _points) => {},
  recordQuizScore: (_moduleId, _quizId, _score) => {},
});

// PUBLIC_INTERFACE
export function ProgressProvider({ children }) {
  /** Provide progress tracking and rewards system. */
  const [progress, setProgress] = useState(() => getItem('progress', {}));
  const [badges, setBadges] = useState(() => getItem('badges', []));
  const [totalPoints, setTotalPoints] = useState(() => getItem('totalPoints', 0));

  useEffect(() => setItem('progress', progress), [progress]);
  useEffect(() => setItem('badges', badges), [badges]);
  useEffect(() => setItem('totalPoints', totalPoints), [totalPoints]);

  const ensureModule = (moduleId) => {
    setProgress(prev => {
      if (prev[moduleId]) return prev;
      return { ...prev, [moduleId]: { lessons: {}, quizzes: {} } };
    });
  };

  const maybeAwardBadge = (name) => {
    setBadges(prev => (prev.includes(name) ? prev : [...prev, name]));
  };

  const markLessonComplete = (moduleId, lessonId, points = 5) => {
    ensureModule(moduleId);
    setProgress(prev => {
      const mod = prev[moduleId] || { lessons: {}, quizzes: {} };
      const updated = {
        ...prev,
        [moduleId]: {
          ...mod,
          lessons: { ...mod.lessons, [lessonId]: true },
        },
      };
      return updated;
    });
    setTotalPoints(p => p + points);
    if (totalPoints + points >= 50) maybeAwardBadge('Learning Streak');
  };

  const recordQuizScore = (moduleId, quizId, score) => {
    ensureModule(moduleId);
    setProgress(prev => {
      const mod = prev[moduleId] || { lessons: {}, quizzes: {} };
      const updated = {
        ...prev,
        [moduleId]: {
          ...mod,
          quizzes: { ...mod.quizzes, [quizId]: score },
        },
      };
      return updated;
    });
    setTotalPoints(p => p + Math.max(0, Math.round(score)));
    if (score >= 80) maybeAwardBadge('Quiz Whiz');
  };

  const value = useMemo(() => ({
    progress, totalPoints, badges, markLessonComplete, recordQuizScore,
  }), [progress, totalPoints, badges]);

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

// PUBLIC_INTERFACE
export function useProgress() {
  /** Access progress tracking state and actions. */
  return useContext(ProgressContext);
}
