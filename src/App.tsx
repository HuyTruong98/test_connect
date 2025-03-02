import './global.css';

import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './auth/context/authProvider';
import { Router } from './routers/sections';
import { ThemeProvider } from './layout/theme-provider';

function App() {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <AuthProvider>
          <BrowserRouter>
            <Suspense>
              <Router />
            </Suspense>
          </BrowserRouter>
        </AuthProvider>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
