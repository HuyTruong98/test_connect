import { Components, Theme } from '@mui/material';

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    active: true;
    suspended: true;
    waiting: true;
    approved: true;
    refuse: true;
    search: true;
    owner: true;
    new: true;
    closed: true;
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

          ...(ownerState.color === 'closed' && {
            backgroundColor: 'rgba(255, 232, 232, 1)',
            border: '1px solid rgba(232, 67, 73, 1)',
            color: 'rgba(232, 67, 73, 1)',
            height: '20px',
            padding: '2px 12px',
            '& .MuiChip-label': {
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '16px',
              padding: '0px'
            }
          }),
          ...(ownerState.color === 'new' && {
            backgroundColor: 'rgba(232, 255, 228, 1)',
            border: '1px solid rgba(81, 192, 114, 1)',
            color: 'rgba(81, 192, 114, 1)',
            height: '20px',
            padding: '2px 12px',
            '& .MuiChip-label': {
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '16px',
              padding: '0px'
            }
          }),
          ...(ownerState.color === 'owner' && {
            background: 'linear-gradient(to right, #fe92ed, #b39cf6, #83a3f7, #08a6fe)',
            color: 'rgba(255, 255, 255, 1)',
            height: '20px',
            padding: '2px 12px',
            '& .MuiChip-label': {
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '16px',
              padding: '0px'
            }
          }),
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
