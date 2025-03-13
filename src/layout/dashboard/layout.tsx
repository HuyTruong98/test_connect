import { Box } from '@mui/material';
import { HeaderBase } from './header-base';

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderBase />
      <Box px='40px' paddingBottom='40px' height='calc(100% - 88px)' overflow='auto'>
        {children}
      </Box>
    </>
  );
}
