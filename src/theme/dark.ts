import { createTheme } from './factory';
import { colors } from './colors';

const text = {
  main: colors.white.main,
  light: colors.white.main,
  dark: colors.white.main,
};

const background = {
  main: colors.grey.main,
  dark: colors.grey.dark,
  light: colors.grey.light,
};

const palette = {
  primary: { ...colors.red, contrastText: colors.white.main },
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
export const darkTheme = createTheme({ background, text })(theme);
