import NotificationsIcon from '@mui/icons-material/Notifications';
import { AppBar, Avatar, Box, Button, IconButton, Toolbar } from '@mui/material';
import { usePathname, useRouter } from '../../routers/hooks';
import { ROOTS } from '../../routers/paths';

export function HeaderBase() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <AppBar position='static' color='inherit' elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between', px: '40px !important', height: '88px' }}>
        <img src='/logo/logo.png' alt='Logo' style={{ height: '26px' }} />

        <Box display='flex' gap='16px'>
          <Button
            variant={pathname === ROOTS.DASHBOARD ? 'contained' : 'text'}
            onClick={() => router.push(ROOTS.DASHBOARD)}
          >
            Dashboard
          </Button>

          <Button
            variant={pathname === ROOTS.ACCOUNT ? 'contained' : 'text'}
            onClick={() => router.push(ROOTS.ACCOUNT)}
          >
            Account Management
          </Button>

          <Button
            variant={pathname === ROOTS.PLAN_SETTING ? 'contained' : 'text'}
            onClick={() => router.push(ROOTS.PLAN_SETTING)}
          >
            Plan Settings
          </Button>
        </Box>

        <Box display='flex' gap='16px' alignItems='center'>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <Avatar src='/path-to-avatar.jpg' />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
