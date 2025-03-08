import { ButtonProps } from '@mui/material';
import { Components, Theme } from '@mui/material/styles';

export function loadingButton(): Components<Omit<Theme, 'components'>> {
  return {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: ButtonProps }) => {
          return {
            ...(ownerState.variant === 'outlined' && {
              background: 'rgba(255, 255, 255, 1)',
              color: 'rgba(46, 47, 49, 1)',
              borderRadius: '999px',
              height: '40px',
              textTransform: 'none',
              fontWeight: 400,
              padding: '8px 16px',
              lineHeight: '22px',
              transition: 'background 0.3s',
              border: '1px solid rgba(46, 47, 49, 1)'
            }),

            ...(ownerState.color === 'inherit' &&
              ownerState.className?.includes('loading-button') &&
              ownerState.variant === 'outlined' && {
                background: 'linear-gradient(to right, #fe92ed, #b39cf6, #83a3f7, #08a6fe) !important',
                height: '48px',
                borderRadius: '8px',
                color: 'white',
                textTransform: 'none',
                fontWeight: 400,
                '&:hover': {
                  background: 'linear-gradient(to right, #fe92edcc, #b39cf6cc, #83a3f7cc, #08a6fecc) !important'
                },
                border: 'none'
              }),

            ...(ownerState.variant === 'contained' && {
              background: 'rgba(46, 47, 49, 1)',
              color: 'rgba(255, 255, 255, 1)',
              borderRadius: '999px',
              height: '40px',
              textTransform: 'none',
              fontWeight: 400,
              padding: '8px 16px',
              lineHeight: '22px',
              transition: 'background 0.3s'
            }),

            ...(ownerState.variant === 'text' && {
              background: 'rgba(255, 255, 255, 1)',
              color: 'rgba(46, 47, 49, 1)',
              borderRadius: '999px',
              height: '40px',
              textTransform: 'none',
              fontWeight: 400,
              padding: '8px 16px',
              lineHeight: '22px',
              transition: 'background 0.3s'
            })
          };
        }
      }
    }
  };
}
