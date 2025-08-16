import React from 'react';
import { useAuth } from '../state/AuthContext';
import { useProgress } from '../state/ProgressContext';
import RewardBadge from '../components/RewardBadge';

// PUBLIC_INTERFACE
export default function Profile() {
  /** Displays user profile details and earned badges. */
  const { user } = useAuth();
  const { totalPoints, badges } = useProgress();

  if (!user) return null;

  return (
    <div className="grid" style={{ gap: 12 }}>
      <div className="card pad">
        <div className="title" style={{ fontSize: 20 }}>Profile</div>
        <div style={{ display: 'grid', gap: 8, marginTop: 8 }}>
          <div><span className="muted small">Name</span><div>{user.name}</div></div>
          <div><span className="muted small">Age Group</span><div>{user.ageGroup}</div></div>
          <div><span className="muted small">Language</span><div>{user.language}</div></div>
          <div><span className="muted small">Points</span><div>{totalPoints}</div></div>
        </div>
      </div>
      <div className="card pad">
        <div className="title" style={{ fontSize: 16 }}>Achievements</div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 10 }}>
          {badges.length === 0 ? <div className="muted small">No badges yet – keep learning!</div> :
            badges.map(b => <RewardBadge key={b} label={b} />)}
        </div>
      </div>
    </div>
  );
}
