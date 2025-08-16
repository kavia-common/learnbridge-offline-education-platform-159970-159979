import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import './i18n';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProgressProvider } from './contexts/ProgressContext';
import { OfflineProvider } from './contexts/OfflineContext';

// Register service worker in production for offline support
if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').catch((e) => {
      // eslint-disable-next-line no-console
      console.warn('Service worker registration failed:', e);
    });
  });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OfflineProvider>
      <AuthProvider>
        <ProgressProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ProgressProvider>
      </AuthProvider>
    </OfflineProvider>
  </React.StrictMode>
);
