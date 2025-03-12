import { Components, Theme } from '@mui/material';

export function checkbox(): Components<Omit<Theme, 'components'>> {
  return {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          width: 24,
          height: 24,
          padding: 0,
          position: 'relative',
          borderRadius: 4,

          '&.Mui-checked': {
            color: '#fff' // Giữ màu trắng cho icon check
          },

          '&.Mui-checked::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to right, #fe92ed, #b39cf6, #83a3f7, #08a6fe)',

            borderRadius: 4,
            zIndex: -1 // Đưa gradient xuống dưới icon check
          }
        },

        checked: {
          '& .MuiSvgIcon-root': {
            fontSize: 18, // Giữ icon không bị quá to
            color: '#fff !important' // Dấu check vẫn là trắng
          }
        }
      }
    }
  };
}
