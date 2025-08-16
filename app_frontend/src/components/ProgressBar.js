import React from 'react';

// PUBLIC_INTERFACE
export default function ProgressBar({ value = 0 }) {
  /** Displays a simple horizontal progress bar. */
  return (
    <div className="progress" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={value}>
      <span style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />
    </div>
  );
}
