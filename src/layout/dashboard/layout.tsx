import { Box } from '@mui/material';
import { HeaderBase } from '../core/header-base';

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box height='100%' width='100%' overflow='auto'>
      <HeaderBase />

      <Box marginTop='100px' px='40px' paddingBottom='40px'>
        {children}
      </Box>
    </Box>
  );
}
