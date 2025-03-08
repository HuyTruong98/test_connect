import './global.css';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './auth/context/authProvider';
import { ThemeProvider } from './layout/theme-provider';
import { Router } from './routers/sections';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
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
    </LocalizationProvider>
  );
}

export default App;
