import { SxProps, Theme } from '@mui/material';
import Button, { ButtonProps } from '@mui/material/Button';
import { usePathname } from '../../routers/hooks';

interface CustomButtonProps extends Omit<ButtonProps, 'color'> {
  activePath?: string;
  sx?: SxProps<Theme>;
}

export function ButtonBase({ activePath, sx, onClick, ...props }: CustomButtonProps) {
  const pathname = usePathname();

  const isActive = pathname === activePath;

  return (
    <Button
      {...props}
      onClick={onClick}
      sx={{
        background: isActive ? 'rgba(46, 47, 49, 1)' : 'transparent',
        color: isActive ? 'white' : 'inherit',
        borderRadius: '999px',
        height: '40px',
        textTransform: 'none',
        fontWeight: 400,
        padding: '8px 16px',
        transition: 'background 0.3s',
        lineHeight: '22px',
        ...sx
      }}
    />
  );
}
