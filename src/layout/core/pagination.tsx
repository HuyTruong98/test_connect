import { Box, Components, Theme } from '@mui/material';
import { ArrowForward as EastIcon, ArrowBack as WestIcon } from '@mui/icons-material';
export function pagination(): Components<Omit<Theme, 'components'>> {
  return {
    MuiPagination: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFF',
          padding: '0px 2px 0px 2px',
          borderRadius: '8px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '40px'
        }
      }
    },
    MuiPaginationItem: {
      defaultProps: {
        components: {
          previous: () => (
            <Box display='flex' alignItems='center' gap='2px' fontSize='12px' fontWeight='600' lineHeight='16px'>
              <WestIcon sx={{ fontSize: '16px' }} /> Previous
            </Box>
          ),
          next: () => (
            <Box display='flex' alignItems='center' gap='2px' fontSize='12px' fontWeight='600' lineHeight='16px'>
              Next <EastIcon sx={{ fontSize: '16px' }} />
            </Box>
          )
        }
      },
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 1)',
          border: 'none',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '22px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '8px',
          color: 'rgba(46, 47, 49, 1)',

          '&.Mui-selected': {
            backgroundColor: 'rgba(46, 47, 49, 1)',
            color: 'rgba(255, 255, 255, 1)'
          }
        }
      }
    }
  };
}
