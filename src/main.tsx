import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { CONFIG } from './utils/config-global.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter basename={CONFIG.site.basePath}>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
