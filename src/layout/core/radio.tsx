import { Components, Theme } from '@mui/material';
import { useId } from 'react';

export function radio(): Components<Omit<Theme, 'components'>> {
  return {
    MuiRadio: {
      defaultProps: {
        disableRipple: true,
        icon: <CustomRadioIcon />,
        checkedIcon: <CustomRadioCheckedIcon />
      },
      styleOverrides: {
        root: {
          '&.Mui-checked': {
            color: 'transparent'
          }
        }
      }
    }
  };
}

const CustomRadioIcon = () => {
  const gradientId = useId();
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
      <defs>
        <linearGradient id={gradientId} x1='0%' y1='0%' x2='100%' y2='0%'>
          <stop offset='0%' stopColor='#fe92ed' />
          <stop offset='33%' stopColor='#b39cf6' />
          <stop offset='66%' stopColor='#83a3f7' />
          <stop offset='100%' stopColor='#08a6fe' />
        </linearGradient>
      </defs>
      <circle cx='12' cy='12' r='8' stroke={`url(#${gradientId})`} strokeWidth='2' fill='none' />
    </svg>
  );
};

const CustomRadioCheckedIcon = () => {
  const gradientId = useId();
  const fillGradientId = useId();
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
      <defs>
        <linearGradient id={gradientId} x1='0%' y1='0%' x2='100%' y2='0%'>
          <stop offset='0%' stopColor='#fe92ed' />
          <stop offset='33%' stopColor='#b39cf6' />
          <stop offset='66%' stopColor='#83a3f7' />
          <stop offset='100%' stopColor='#08a6fe' />
        </linearGradient>
        <linearGradient id={fillGradientId} x1='0%' y1='0%' x2='100%' y2='0%'>
          <stop offset='0%' stopColor='#fe92ed' />
          <stop offset='33%' stopColor='#b39cf6' />
          <stop offset='66%' stopColor='#83a3f7' />
          <stop offset='100%' stopColor='#08a6fe' />
        </linearGradient>
      </defs>
      <circle cx='12' cy='12' r='8' stroke={`url(#${gradientId})`} strokeWidth='2' fill='none' />
      <circle cx='12' cy='12' r='6' fill='white' />
      <circle cx='12' cy='12' r='4' fill={`url(#${fillGradientId})`} />
    </svg>
  );
};
