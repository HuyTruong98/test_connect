import CloseIcon from '@mui/icons-material/Close';
import { Box, Drawer, IconButton, Typography } from '@mui/material';
import { ReactNode } from 'react';

interface CommonDrawerProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: ReactNode;
  actions?: ReactNode;
  anchor?: 'left' | 'right' | 'top' | 'bottom';
  PaperProps?: object;
  styles?: React.CSSProperties;
}

export function CommonDrawer({ open, onClose, title, children, actions, anchor, styles }: CommonDrawerProps) {
  return (
    <Drawer
      anchor={anchor || 'right'}
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { ...styles, display: 'flex', flexDirection: 'column', height: '100vh' } }}
      BackdropProps={{
        sx: { backgroundColor: 'transparent' }
      }}
    >
      <Box display='flex' justifyContent='space-between' alignItems='center' mb='24px'>
        <Typography
          variant='h6'
          fontWeight={600}
          fontSize='24px'
          lineHeight='28px'
          letterSpacing='2%'
          color='rgba(46, 47, 49, 1)'
        >
          {title}
        </Typography>
        <IconButton
          onClick={onClose}
          sx={{
            width: '48px',
            height: '48px',
            borderRadius: '999px',
            border: '1px solid rgba(217, 217, 217, 1)',
            backgroundColor: 'white',

            '&:hover': {
              backgroundColor: 'rgba(217, 217, 217, 0.2)'
            }
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>{children}</Box>

      {actions && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '16px',
            mt: '20px'
          }}
        >
          {actions}
        </Box>
      )}
    </Drawer>
  );
}
