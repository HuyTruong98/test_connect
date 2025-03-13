import { Components, Theme } from '@mui/material';

export function card(): Components<Omit<Theme, 'components'>> {
  return {
    MuiCard: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.className?.includes('clinic-info-card') && {
            maxHeight: '354px',
            borderRadius: '24px',
            background: 'linear-gradient(to right, #FE92ED40 0%, #B39CF640 33%, #83A3F740 66%, #08A6FE40 100%)',
            height: '354px',
            padding: '16px',
            boxShadow: 'none'
          }),
          ...(ownerState.className?.includes('new-account-table') && {
            maxHeight: '415px',
            overflow: 'hidden',
            backgroundColor: '#EEEEEE',
            height: '410px',
            padding: '16px',
            borderRadius: '24px',
            boxShadow: 'none'
          })
        })
      }
    },
    MuiCardHeader: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.className?.includes('clinic-info-card-header') && {
            padding: '0px'
          })
        })
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.className?.includes('clinic-info-card-content') && {
            backgroundColor: 'rgba(255, 255, 255, 1)',
            borderRadius: '12px',
            marginTop: '16px',
            height: '276px',
            padding: '16px',
            paddingBottom: '12px'
          })
        })
      }
    }
  };
}
