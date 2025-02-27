import { styled, TextField } from '@mui/material';

export const GradientInput = styled(TextField)(() => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    background: 'white',
    height: '40px',
    borderColor: '#404040',
    border: '1px solid #404040'
  }
}));
