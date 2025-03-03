import { createTheme, ThemeOptions } from '@mui/material/styles';
import { loadingButton } from './loading-button';
import { table } from './table';

const themeOptions: ThemeOptions = {
  components: {
    ...table(),
    ...loadingButton()
  }
};

const theme = createTheme(themeOptions);

export default theme;
