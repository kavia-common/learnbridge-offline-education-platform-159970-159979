import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProgressProvider } from './contexts/ProgressContext';
import { OfflineProvider } from './contexts/OfflineContext';
import './i18n';

test('renders app brand or sign in', () => {
  render(
    <OfflineProvider>
      <AuthProvider>
        <ProgressProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ProgressProvider>
      </AuthProvider>
    </OfflineProvider>
  );
  const brand = screen.getByText(/LearnBridge/i);
  expect(brand).toBeInTheDocument();
});
