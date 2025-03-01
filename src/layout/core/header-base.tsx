import NotificationsIcon from '@mui/icons-material/Notifications';
import { AppBar, Avatar, Box, IconButton, Toolbar } from '@mui/material';
import { useRouter } from '../../routers/hooks';
import { ROOTS } from '../../routers/paths';
import { ButtonBase } from './button';

export function HeaderBase() {
  const router = useRouter();

  return (
    <AppBar position='fixed' color='inherit' elevation={0} sx={{ zIndex: 1201 }}>
      <Toolbar sx={{ justifyContent: 'space-between', px: '40px !important', height: '88px' }}>
        {/* Logo */}
        <img src='/logo/logo.png' alt='Logo' style={{ height: '26px' }} />

        {/* Navigation */}
        <Box display='flex' gap='16px'>
          <ButtonBase activePath={ROOTS.DASHBOARD} onClick={() => router.push(ROOTS.DASHBOARD)}>
            Dashboard
          </ButtonBase>

          <ButtonBase activePath={ROOTS.ACCOUNT} onClick={() => router.push(ROOTS.ACCOUNT)}>
            Account Management
          </ButtonBase>

          <ButtonBase activePath={ROOTS.PLAN_SETTING} onClick={() => router.push(ROOTS.PLAN_SETTING)}>
            Plan Settings
          </ButtonBase>
        </Box>

        {/* Icons */}
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
