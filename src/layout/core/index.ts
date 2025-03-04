import { createTheme, ThemeOptions } from '@mui/material/styles';
import { loadingButton } from './loading-button';
import { pagination } from './pagination';
import { table } from './table';

const themeOptions: ThemeOptions = {
  components: {
    ...table(),
    ...pagination(),
    ...loadingButton()
  }
};

const theme = createTheme(themeOptions);

export default theme;
