import { createTheme, ThemeOptions } from '@mui/material/styles';
import { checkbox } from './checkbox';
import { chip } from './chip';
import { iconButton } from './icon-button';
import { loadingButton } from './loading-button';
import { pagination } from './pagination';
import { table } from './table';
import { textField } from './text-field';
import { tooltip } from './tooltip';

const themeOptions: ThemeOptions = {
  components: {
    ...tooltip(),
    ...iconButton(),
    ...textField(),
    ...table(),
    ...pagination(),
    ...chip(),
    ...loadingButton(),
    ...checkbox()
  }
};

const theme = createTheme(themeOptions);

export default theme;
