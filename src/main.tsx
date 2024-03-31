import React from 'react';
import ReactDOM from 'react-dom/client';

import { ErrorBoundary } from 'react-error-boundary';

import App from './App.tsx';
import FallbackPage from './components/pages/FallbackPage/FallbackPage.tsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<FallbackPage />}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
