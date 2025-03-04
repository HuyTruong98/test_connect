import { Components, Theme } from '@mui/material';

export function table(): Components<Omit<Theme, 'components'>> {
  return {
    MuiTableContainer: {
      styleOverrides: {
        root: {
          borderRadius: '24px',
          boxShadow: 'none',
          backgroundColor: '#EEEEEE',
          padding: '0px 24px 0px 24px',
          maxHeight: '781px',
          overflow: 'auto',
          borderBottomLeftRadius: '0px',
          borderBottomRightRadius: '0px'
        }
      }
    },
    MuiTable: {
      styleOverrides: {
        root: {
          borderCollapse: 'separate',
          borderSpacing: '0 12px',
          '& thead': {
            position: 'sticky',
            top: 0,
            backgroundColor: '#EEEEEE',
            zIndex: 2,

            '& tr th': {
              padding: '4px 16px 4px 16px !important'
            }
          },
          '& tbody': {
            '& tr td:first-of-type': {
              borderTopLeftRadius: '8px',
              borderBottomLeftRadius: '8px'
            },
            '& tr td:last-of-type': {
              borderTopRightRadius: '8px',
              borderBottomRightRadius: '8px'
            }
          }
        }
      }
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: '14px',
          borderBottom: 'none',
          boxShadow: 'none',
          padding: 0,
          paddingLeft: '16px',
          alignItems: 'center'
        },
        head: {
          backgroundColor: '#EEEEEE',
          fontWeight: 600,
          height: '30px',
          padding: '4px 16px 4px 16px !important'
        },
        body: {
          backgroundColor: '#fff',
          backdropFilter: 'blur(10px)',
          height: '54px'
        }
      }
    }
  };
}
