import { Box, Grid, styled, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

export const StyledGridContainer = styled(Grid)({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

export const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '500px',
  height: '456px',
  padding: '40px',
  borderRadius: '24px',
  background: 'white',
  position: 'relative',
  zIndex: 1,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-1px',
    left: '-1px',
    right: '-1px',
    bottom: '-1px',
    zIndex: -1,
    borderRadius: 'inherit',
    background:
      'linear-gradient(to right, rgba(254, 146, 237, 1), rgba(179, 156, 246, 1), rgba(131, 163, 247, 1), rgba(8, 166, 254, 1))',
    padding: '1px',
    '-webkit-mask': 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    '-webkit-mask-composite': 'destination-out',
    'mask-composite': 'exclude'
  }
});

export const CustomTypography = styled(Typography)({
  fontWeight: 700,
  fontSize: '32px',
  lineHeight: '44px',
  color: '#404040',
  textAlign: 'center',
  marginBottom: '24px'
});

export const LogoBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '798px'
});

export const StyledLoadingButton = styled(LoadingButton)({
  background:
    'linear-gradient(to right, rgba(254, 146, 237, 1), rgba(179, 156, 246, 1), rgba(131, 163, 247, 1), rgba(8, 166, 254, 1))',
  height: '48px',
  borderRadius: '8px',
  color: 'white',
  '&:hover': {
    background:
      'linear-gradient(to right, rgba(254, 146, 237, 0.8), rgba(179, 156, 246, 0.8), rgba(131, 163, 247, 0.8), rgba(8, 166, 254, 0.8))'
  }
});
