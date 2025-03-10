import { Components, Theme } from '@mui/material';

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    active: true;
    suspended: true;
    waiting: true;
    approved: true;
    refuse: true;
    search: true;
  }
}

export function chip(): Components<Omit<Theme, 'components'>> {
  return {
    MuiChip: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          fontWeight: '600',
          fontSize: '12px',
          lineHeight: '16px',
          width: 'max-content',
          height: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '999px',

          ...(ownerState.color === 'search' && {
            backgroundColor: 'rgba(46, 47, 49, 1)',
            color: 'rgba(255, 255, 255, 1)',
            height: '48px',
            width: 'auto',
            padding: '12px',
            fontWeight: 400,
            fontSize: '14px'
          }),
          ...(ownerState.color === 'active' && {
            backgroundColor: 'rgba(219, 255, 230, 1)',
            color: 'rgba(4, 80, 26, 1)'
          }),
          ...(ownerState.color === 'suspended' && {
            backgroundColor: 'rgba(255, 224, 224, 1)',
            color: 'rgba(178, 2, 9, 1)'
          }),
          ...(ownerState.color === 'waiting' && {
            backgroundColor: 'rgba(255, 234, 205, 1)',
            color: 'rgba(192, 113, 2, 1)'
          }),
          ...(ownerState.color === 'approved' && {
            backgroundColor: 'rgba(219, 255, 230, 1)',
            color: 'rgba(4, 80, 26, 1)'
          }),
          ...(ownerState.color === 'refuse' && {
            backgroundColor: 'rgba(255, 224, 224, 1)',
            color: 'rgba(178, 2, 9, 1)'
          })
        })
      }
    }
  };
}
