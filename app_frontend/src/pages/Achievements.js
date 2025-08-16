import React from 'react';
import { useProgress } from '../state/ProgressContext';
import RewardBadge from '../components/RewardBadge';

// PUBLIC_INTERFACE
export default function Achievements() {
  /** Dedicated achievements page listing all badges. */
  const { badges, totalPoints } = useProgress();

  return (
    <div className="card pad">
      <div className="title" style={{ fontSize: 20 }}>Achievements</div>
      <div className="muted small" style={{ marginTop: 6 }}>Total Points: {totalPoints}</div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 12 }}>
        {badges.length === 0 ? <div className="muted small">No badges yet.</div> :
          badges.map(b => <RewardBadge key={b} label={b} />)}
      </div>
    </div>
  );
}
