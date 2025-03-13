import { Components, Theme } from '@mui/material';

export function checkbox(): Components<Omit<Theme, 'components'>> {
  return {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          width: '18px',
          height: '18px',
          padding: 0,
          borderRadius: '3px',
          overflow: 'hidden',
          position: 'relative',
          backgroundColor: '#fff',
          border: '2px solid #404040',

          '&:not(.Mui-checked):hover': {
            background: 'linear-gradient(to right, #fe92ed, #b39cf6, #83a3f7, #08a6fe)',
            border: 'none'
          },

          '&.Mui-checked': {
            background: 'linear-gradient(to right, #fe92ed, #b39cf6, #83a3f7, #08a6fe)',
            border: 'none',
            '&:hover': {
              background: 'linear-gradient(to right, #fe92ed, #b39cf6, #83a3f7, #08a6fe)',
              border: 'none'
            }
          },

          '&.Mui-disabled': {
            background: 'linear-gradient(to right, #FE92ED40 0%, #B39CF640 33%, #83A3F740 66%, #08A6FE40 100%)', // Gradient mờ cho disabled
            border: 'none',
            cursor: 'not-allowed'
          },

          '&.Mui-disabled .MuiSvgIcon-root': {
            backgroundImage: `url('/assets/images/icon/checkmark.svg')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          },

          '& .MuiSvgIcon-root': {
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fill: 'transparent',
            backgroundImage: `url('/assets/images/icon/checkmark.svg')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
          },

          '&.Mui-checked .MuiSvgIcon-root': {
            fill: 'transparent',
            backgroundImage: `url('/assets/images/icon/checkmark.svg')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
          },

          '& .MuiTouchRipple-root': {
            display: 'none'
          }
        }
      }
    }
  };
}
