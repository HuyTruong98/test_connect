import { createTheme, ThemeOptions } from '@mui/material/styles';
import { card } from './card';
import { checkbox } from './checkbox';
import { chip } from './chip';
import { iconButton } from './icon-button';
import { loadingButton } from './loading-button';
import { pagination } from './pagination';
import { radio } from './radio';
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
    ...checkbox(),
    ...radio(),
    ...card()
  }
};

const theme = createTheme(themeOptions);

export default theme;
