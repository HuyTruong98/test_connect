import { Components, Theme } from '@mui/material/styles';

export function textField(): Components<Omit<Theme, 'components'>> {
  return {
    MuiTextField: {
      styleOverrides: {
        root: {
          '&.MuiTextField-selectCustom': {
            '& .MuiOutlinedInput-root': {
              height: '32px',
              borderRadius: '999px',
              backgroundColor: 'white'
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(64, 64, 64, 1)'
            },
            '& .MuiSelect-select': {
              display: 'flex',
              alignItems: 'center',
              height: '32px',
              fontSize: '12px',
              fontWeight: 400,
              lineHeight: '16px'
            }
          },
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            background: 'white',
            height: '40px',
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(64, 64, 64, 1)'
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(64, 64, 64, 1)',
              borderWidth: '1px !important'
            },
            '&.Mui-focused': {
              boxShadow: 'none !important'
            }
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(64, 64, 64, 1)'
          },
          '& .MuiInputBase-input': {
            height: '40px',
            padding: '10px 12px',
            boxSizing: 'border-box',
            '&:focus': {
              boxShadow: 'none'
            }
          },
          '& .MuiSelect-icon': {
            color: 'rgba(46, 47, 49, 1)'
          }
        }
      }
    }
  };
}
