import { createMuiTheme } from '@material-ui/core/styles';
import { Theme, ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    background: {
      primary: React.CSSProperties['color'];
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    background?: {
      primary?: React.CSSProperties['color'];
    };
  }
}

export const createTheme = (customOptions: { background: Record<string, string> }) => (
  options: ThemeOptions,
): Theme => {
  return createMuiTheme({
    background: customOptions?.background,
    ...options,
  });
};
