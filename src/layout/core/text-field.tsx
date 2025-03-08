import { Components, Theme } from '@mui/material/styles';

export function textField(): Components<Omit<Theme, 'components'>> {
  return {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            background: 'white',
            height: '40px'
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
          }
        }
      }
    }
  };
}
