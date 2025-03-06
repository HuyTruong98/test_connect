import { createTheme, ThemeOptions } from '@mui/material/styles';
import { loadingButton } from './loading-button';
import { pagination } from './pagination';
import { table } from './table';
import { chip } from './chip';

const themeOptions: ThemeOptions = {
  components: {
    ...table(),
    ...pagination(),
    ...chip(),
    ...loadingButton()
  }
};

const theme = createTheme(themeOptions);

export default theme;
