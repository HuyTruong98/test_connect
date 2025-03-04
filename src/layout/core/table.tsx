import { Components, Theme } from '@mui/material';

export function table(): Components<Omit<Theme, 'components'>> {
  return {
    MuiTableContainer: {
      styleOverrides: {
        root: {
          borderRadius: '24px',
          boxShadow: 'none',
          backgroundColor: '#EEEEEE'
        }
      }
    },
    MuiTable: {
      styleOverrides: {
        root: ({ ownerState }) => {
          return {
            ...(ownerState.className?.includes('header-table') && {
              padding: '16px 0px 10px 0px',

              '& thead': {
                '& tr': {
                  padding: '0px 16px 0px 16px'
                },
                '& tr th': {
                  height: '30px',
                  padding: '0px',
                  fontWeight: 600,
                  fontSize: '16px',
                  lineHeight: '22px'
                }
              }
            }),

            ...(ownerState.className?.includes('body-table') && {
              borderCollapse: 'separate',
              borderSpacing: '0 12px',
              backgroundColor: '#EEEEEE'
            })
          };
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: '14px',
          borderBottom: 'none'
        },
        head: {
          fontWeight: 600,
          backgroundColor: '#EEEEEE'
        },
        body: {
          backgroundColor: '#FFF',
          height: '54px',
          padding: '12px 16px 12px'
        }
      }
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: '#FFFFFF'
          },
          '&:nth-of-type(even)': {
            backgroundColor: '#F7F7F7'
          },
          borderRadius: '8px',
          overflow: 'hidden',

          '& td:first-of-type': {
            borderTopLeftRadius: '8px',
            borderBottomLeftRadius: '8px'
          },
          '& td:last-of-type': {
            borderTopRightRadius: '8px',
            borderBottomRightRadius: '8px'
          }
        }
      }
    }
  };
}
