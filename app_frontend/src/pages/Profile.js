import React from 'react';
import { useAuth } from '../state/AuthContext';

// PUBLIC_INTERFACE
export default function Profile() {
  /** Displays user profile details (no points or achievements). */
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="grid" style={{ gap: 12 }}>
      <div className="card pad">
        <div className="title" style={{ fontSize: 20 }}>Profile</div>
        <div style={{ display: 'grid', gap: 8, marginTop: 8 }}>
          <div><span className="muted small">Name</span><div>{user.name}</div></div>
          <div><span className="muted small">Age Group</span><div>{user.ageGroup}</div></div>
          <div><span className="muted small">Language</span><div>{user.language}</div></div>
        </div>
      </div>
    </div>
  );
}
