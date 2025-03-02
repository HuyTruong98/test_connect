import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { ReactNode } from 'react';
import theme from './core';

type Props = {
  children: ReactNode;
};

export function ThemeProvider({ children }: Props) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
