import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const OfflineContext = createContext(null);

// PUBLIC_INTERFACE
export function useOffline() {
  /** Access connection status. */
  return useContext(OfflineContext);
}

// PUBLIC_INTERFACE
export function OfflineProvider({ children }) {
  /** Provides online/offline status using browser events. */
  const [online, setOnline] = useState(typeof navigator !== 'undefined' ? navigator.onLine : true);

  useEffect(() => {
    const on = () => setOnline(true);
    const off = () => setOnline(false);
    window.addEventListener('online', on);
    window.addEventListener('offline', off);
    return () => {
      window.removeEventListener('online', on);
      window.removeEventListener('offline', off);
    };
  }, []);

  const value = useMemo(() => ({ online }), [online]);

  return <OfflineContext.Provider value={value}>{children}</OfflineContext.Provider>;
}
