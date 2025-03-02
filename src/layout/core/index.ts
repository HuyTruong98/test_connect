import { createTheme, ThemeOptions } from '@mui/material/styles';
import { loadingButton } from './loading-button';

const themeOptions: ThemeOptions = {
  components: {
    ...loadingButton()
  }
};

const theme = createTheme(themeOptions);

export default theme;
