import { tooltipClasses } from '@mui/material';
import { Components, Theme } from '@mui/material/styles';

declare module '@mui/material/Tooltip' {
  interface TooltipPropsArrow {
    arrow: true;
  }
}

export function tooltip(): Components<Omit<Theme, 'components'>> {
  return {
    MuiTooltip: {
      defaultProps: {
        arrow: true
      },
      styleOverrides: {
        tooltip: {
          backgroundColor: '#FFFFFF',
          color: '#2E2F31',
          boxShadow:
            '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
          fontSize: '12px',
          padding: '8px 12px',
          borderRadius: '4px',
          border: 'none',
          fontWeight: 400,
          lineHeight: '16px'
        },
        arrow: {
          color: '#FFFFFF'
        },
        popper: {
          [`& .${tooltipClasses.tooltip}`]: {
            border: 'none'
          }
        }
      }
    }
  };
}
