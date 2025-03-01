import LoadingButton from '@mui/lab/LoadingButton';
import { LoadingButtonProps } from '@mui/lab';
import { SxProps, Theme } from '@mui/material';

interface CustomLoadingButtonProps extends LoadingButtonProps {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

export function ButtonLoading({ children, sx, ...props }: CustomLoadingButtonProps) {
  return (
    <LoadingButton
      {...props}
      sx={{
        background:
          'linear-gradient(to right, rgba(254, 146, 237, 1), rgba(179, 156, 246, 1), rgba(131, 163, 247, 1), rgba(8, 166, 254, 1))',
        height: '48px',
        borderRadius: '8px',
        color: 'white',
        textTransform: 'none',
        fontWeight: 'bold',
        '&:hover': {
          background:
            'linear-gradient(to right, rgba(254, 146, 237, 0.8), rgba(179, 156, 246, 0.8), rgba(131, 163, 247, 0.8), rgba(8, 166, 254, 0.8))'
        },
        ...sx
      }}
    >
      {children}
    </LoadingButton>
  );
}
