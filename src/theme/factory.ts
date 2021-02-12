import { createMuiTheme } from '@material-ui/core/styles';
import { Theme, ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

/* 
  augment @material-ui Theme interface
  in order to add custom fields to theme
  see: https://www.typescriptlang.org/docs/handbook/declaration-merging.html
*/
declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    background: {
      main: React.CSSProperties['color'];
      light?: React.CSSProperties['color'];
      dark?: React.CSSProperties['color'];
    };
    text: {
      main: React.CSSProperties['color'];
      light?: React.CSSProperties['color'];
      dark?: React.CSSProperties['color'];
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    background?: {
      main?: React.CSSProperties['color'];
      light?: React.CSSProperties['color'];
      dark?: React.CSSProperties['color'];
    };
    text?: {
      main?: React.CSSProperties['color'];
      light?: React.CSSProperties['color'];
      dark?: React.CSSProperties['color'];
    };
  }
}

interface CreateThemeOptions {
  background: {
    main: string;
    light?: string;
    dark?: string;
  };
  text: {
    main: string;
    light?: string;
    dark?: string;
  };
}

export const createTheme = (customOptions: CreateThemeOptions) => (options: ThemeOptions): Theme => {
  return createMuiTheme({
    ...customOptions,
    ...options,
  });
};
