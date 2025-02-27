import React from 'react';
import { StyledBox, StyledTypography } from './styles';

interface LabelProps {
  label: string;
  children: React.ReactNode;
}

export const Label: React.FC<LabelProps> = ({ label, children }) => {
  return (
    <StyledBox>
      <StyledTypography>{label}</StyledTypography>
      {children}
    </StyledBox>
  );
};
