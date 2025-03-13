import { Components, Theme } from '@mui/material';

export function radio(): Components<Omit<Theme, 'components'>> {
  return {
    MuiRadio: {
      styleOverrides: {
        root: {}
      }
    }
  };
}
