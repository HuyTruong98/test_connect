import './global.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routers/sections';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './auth/authProvider';

function App() {
  const theme = React.useMemo(() => createTheme({ palette: { mode: 'light' } }), []);

  return (
    <ThemeProvider theme={theme}>
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
