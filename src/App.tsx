import './global.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { Suspense } from 'react';
import { AuthProvider } from './auth/context';
import { Router } from './routers/sections';

function App() {
  const theme = React.useMemo(() => createTheme({ palette: { mode: 'light' } }), []);

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Suspense>
          <Router />
        </Suspense>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
