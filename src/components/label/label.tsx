import React from 'react';
import { StyledBox, StyledTypography } from './styles';

interface LabelProps {
  label: string;
  children: React.ReactNode;
  styles?: React.CSSProperties;
}

export const Label: React.FC<LabelProps> = ({ label, children, styles }) => {
  return (
    <StyledBox>
      <StyledTypography sx={{ ...styles }}>{label}</StyledTypography>
      {children}
    </StyledBox>
  );
};
