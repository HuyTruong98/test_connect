import { Box } from '@mui/material';
import { HeaderBase } from '../core/header-base';

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <HeaderBase />

      <Box sx={{ mt: '119px', px: 3 }}>{children}</Box>
    </Box>
  );
}
