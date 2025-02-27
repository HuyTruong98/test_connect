import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import './App.css';
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
            <Router />
          </BrowserRouter>
        </AuthProvider>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
