import React, { useState } from 'react';
import { getItem, setItem } from '../utils/storage';

// PUBLIC_INTERFACE
export default function Offline() {
  /** Offline page for showing last sync time and manual sync. */
  const [lastSync, setLastSync] = useState(() => getItem('lastSync', null));
  const [status, setStatus] = useState('idle');

  const doSync = async () => {
    setStatus('syncing');
    // Simulate sync delay and then store timestamp
    await new Promise(r => setTimeout(r, 600));
    const ts = Date.now();
    setItem('lastSync', ts);
    setLastSync(ts);
    setStatus('done');
    setTimeout(() => setStatus('idle'), 1000);
  };

  return (
    <div className="card pad">
      <div className="title" style={{ fontSize: 20 }}>Offline & Sync</div>
      <div className="muted small" style={{ marginTop: 8 }}>
        Last Sync: {lastSync ? new Date(lastSync).toLocaleString() : 'Never'}
      </div>
      <div style={{ marginTop: 12 }}>
        <button className="btn primary" onClick={doSync} disabled={status === 'syncing'}>
          {status === 'syncing' ? 'Syncing...' : 'Sync Now'}
        </button>
      </div>
      <div className="muted small" style={{ marginTop: 10 }}>
        This app works offline. Your progress is saved locally and can be synced when connectivity is available.
      </div>
    </div>
  );
}
