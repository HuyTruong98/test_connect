import { Box, InputLabel } from '@mui/material';
import React from 'react';

interface LabelProps {
  label: string;
  children: React.ReactNode;
  styles?: React.CSSProperties;
  labelWidth?: string;
  required?: boolean;
}

export const Label: React.FC<LabelProps> = ({ label, children, styles, labelWidth, required }) => {
  return (
    <Box display='flex' flexDirection='column' width='100%' mb='16px'>
      <InputLabel
        sx={{
          width: labelWidth,
          fontSize: '14px',
          fontWeight: 400,
          marginBottom: '8px',
          height: '22px',
          color: '#404040',
          ...styles
        }}
        required={required}
      >
        {label}
      </InputLabel>
      {children}
    </Box>
  );
};
