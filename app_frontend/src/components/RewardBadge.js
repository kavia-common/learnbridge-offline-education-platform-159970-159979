import React from 'react';

// PUBLIC_INTERFACE
export default function RewardBadge({ label }) {
  /** Visual badge for achievements. */
  return (
    <span className="small" style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '6px 10px',
      background: 'linear-gradient(135deg, #ffd54f, #ffb300)',
      borderRadius: 999,
      color: '#1b1f24',
      fontWeight: 700,
      border: '1px solid rgba(0,0,0,0.06)'
    }}>
      🏅 {label}
    </span>
  );
}
