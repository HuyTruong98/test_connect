import { createTheme, ThemeOptions } from '@mui/material/styles';
import { chip } from './chip';
import { iconButton } from './icon-button';
import { loadingButton } from './loading-button';
import { pagination } from './pagination';
import { table } from './table';
import { textField } from './text-field';

const themeOptions: ThemeOptions = {
  components: {
    ...iconButton(),
    ...textField(),
    ...table(),
    ...pagination(),
    ...chip(),
    ...loadingButton()
  }
};

const theme = createTheme(themeOptions);

export default theme;
