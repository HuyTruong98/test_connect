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
          maxHeight: '600px',
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
          '& thead': {
            position: 'sticky',
            top: 0,
            backgroundColor: '#EEEEEE',
            zIndex: 2
          },
          '& tbody': {
            '& tr td': {
              borderBottom: '12px solid #EEEEEE'
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
          paddingTop: '16px',
          paddingBottom: '16px'
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
