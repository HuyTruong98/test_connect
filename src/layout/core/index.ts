import { createTheme, ThemeOptions } from '@mui/material/styles';
import { loadingButton } from './loading-button';
import { pagination } from './pagination';
import { table } from './table';
import { chip } from './chip';
import { textField } from './text-field';

const themeOptions: ThemeOptions = {
  components: {
    ...textField(),
    ...table(),
    ...pagination(),
    ...chip(),
    ...loadingButton()
  }
};

const theme = createTheme(themeOptions);

export default theme;
