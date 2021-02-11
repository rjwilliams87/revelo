import { createTheme } from './factory';
import { colors } from './colors';

const text = {
  primary: colors.black.main,
  light: colors.grey.light,
  dark: colors.black.main,
};

const background = {
  primary: colors.grey.main,
};

const palette = {
  primary: { ...colors.red },
  secondary: { ...colors.green },
  warning: { ...colors.yellow },
  info: { ...colors.blue },
  success: { ...colors.green },
};

const baseline = {
  padding: 0,
  margin: 0,
  boxSizing: 'border-box',
  fontFamily: 'Roboto, sans-serif',
};

const overrides = {
  MuiCssBaseline: {
    '@global': {
      '*': { ...baseline },
      html: { ...baseline },
      body: { ...baseline },
    },
  },
};

const theme = { palette, overrides };
export const lightTheme = createTheme({ background })(theme);
