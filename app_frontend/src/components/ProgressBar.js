import React from 'react';

// PUBLIC_INTERFACE
export default function ProgressBar({ value = 0 }) {
  /** Linear progress indicator with percentage. */
  const clamped = Math.max(0, Math.min(100, Number(value) || 0));
  return (
    <div className="progress" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={clamped}>
      <span style={{ width: `${clamped}%` }} />
    </div>
  );
}
