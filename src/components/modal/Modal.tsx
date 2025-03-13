import ClearIcon from '@mui/icons-material/Clear';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentProps,
  DialogActions,
  DialogTitleProps,
  useMediaQuery,
  useTheme,
  Button,
  ButtonProps,
  IconButton
} from '@mui/material';
import { ModalProps } from '../../types/common';

const Title = ({ sx, ...rest }: DialogTitleProps) => (
  <DialogTitle
    component='div'
    sx={{
      userSelect: 'none',
      lineHeight: '20px',
      padding: '20px 20px 22px 20px',
      ...(sx || {})
    }}
    {...rest}
  />
);

const ActionButton = ({ color, sx, ...rest }: {} & ButtonProps) => (
  <Button
    disableTouchRipple
    color={color || 'primary'}
    sx={{
      ...sx
      // '&.MuiButtonBase-root': {
      //   fontSize: '14px'
      // }
    }}
    {...rest}
  />
);

ActionButton.defaultProps = {
  isAuthButton: false
};

const Content = ({
  height,
  width,
  sx,
  ...rest
}: {
  height?: number | string;
  width?: number;
} & DialogContentProps) => {
  const theme = useTheme();
  const isDownSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <DialogContent
      sx={{
        minHeight: isDownSm ? undefined : height,
        height: isDownSm ? undefined : height,
        minWidth: isDownSm ? undefined : width,
        ...(sx || {})
      }}
      {...rest}
    />
  );
};

Content.defaultProps = {
  height: undefined,
  width: undefined
};

/**
 * Modal (using Dialog of Mui)
 * @param props ModalProps
 * @returns JSX.Element
 */
const Modal = (props: ModalProps) => {
  const { open, onClose, children, loading, titleCloseButton, backdropClickClose, ...rest } = props;
  const theme = useTheme();
  const isDownSm = useMediaQuery(theme.breakpoints.down('sm'));

  const onCloseExclude: ModalProps['onClose'] = (event, reason) => {
    if ((reason !== 'backdropClick' ? true : backdropClickClose) && onClose) {
      onClose(event, reason);
    }
  };

  return (
    <Dialog open={open} onClose={onCloseExclude} fullWidth={isDownSm} disableRestoreFocus {...rest}>
      {loading && <>Loading...</>}
      {children}
      {titleCloseButton && (
        <IconButton
          color='primary'
          onClick={() => onCloseExclude({}, 'escapeKeyDown')}
          sx={{
            position: 'absolute',
            right: 12,
            top: 16
          }}
          className='close-btn'
        >
          <ClearIcon />
        </IconButton>
      )}
    </Dialog>
  );
};

Modal.defaultProps = {
  scroll: 'body',
  titleCloseButton: false,
  backdropClickClose: false
};

export default Object.assign(Modal, {
  Title,
  Content,
  Actions: DialogActions,
  Button: ActionButton
});
