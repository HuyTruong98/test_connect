import { DialogProps } from '@mui/material';

export interface ModalProps extends DialogProps {
  loading?: boolean;
  titleCloseButton?: boolean;
  backdropClickClose?: boolean;
}
