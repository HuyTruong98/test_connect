import { Components, Theme } from '@mui/material';

export function radio(): Components<Omit<Theme, 'components'>> {
  return {
    MuiRadio: {
      styleOverrides: {
        root: {
          '&.Mui-checked': {
            color: 'transparent'
          },
          '&.Mui-checked svg': {
            fill: 'url(#radio-gradient)'
          }
        }
      }
    },
    MuiSvgIcon: {
      defaultProps: {
        component: (props) => (
          <svg {...props} viewBox='0 0 24 24'>
            <defs>
              <linearGradient id='radio-gradient' x1='0%' y1='0%' x2='100%' y2='0%'>
                <stop offset='0%' stopColor='#fe92ed' />
                <stop offset='33%' stopColor='#b39cf6' />
                <stop offset='66%' stopColor='#83a3f7' />
                <stop offset='100%' stopColor='#08a6fe' />
              </linearGradient>
            </defs>
            <circle cx='12' cy='12' r='6' fill='url(#radio-gradient)' />
          </svg>
        )
      }
    }
  };
}
