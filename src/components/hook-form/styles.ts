import { styled, TextField } from '@mui/material';

export const GradientInput = styled(TextField)(() => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    background: 'white',
    height: '40px'
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#404040'
  },
  '& .MuiInputBase-input': {
    '&:focus': {
      boxShadow: 'none'
    }
  }
}));
