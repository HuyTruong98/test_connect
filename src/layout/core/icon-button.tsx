import { Components, Theme } from '@mui/material';

export function iconButton(): Components<Omit<Theme, 'components'>> {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState['data-variant'] === 'init' && {
            width: '48px',
            height: '48px',
            borderRadius: '999px',
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(217, 217, 217, 1)',
            '&:hover': {
              backgroundColor: 'rgba(217, 217, 217, 0.2)'
            }
          }),

          ...(ownerState['data-variant'] === 'expand' && {
            width: '48px',
            height: '48px',
            borderRadius: '999px',
            border: '1px solid #D9D9D9',
            backgroundColor: '#EEEEEE',
            '&:hover': {
              backgroundColor: '#EEEEEE'
            }
          }),
          ...(ownerState['data-variant'] === 'trash' && {
            width: '48px',
            height: '48px',
            borderRadius: '999px',
            border: '1px solid #E84349',
            backgroundColor: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover': {
              backgroundColor: 'rgba(217, 217, 217, 0.2)'
            }
          }),
          ...(ownerState['data-variant'] === 'primary' && {
            width: '48px',
            height: '48px',
            borderRadius: '999px',
            border: '1px solid #2E2F31',
            backgroundColor: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover': {
              backgroundColor: 'rgba(217, 217, 217, 0.2)'
            }
          })
        })
      }
    }
  };
}
