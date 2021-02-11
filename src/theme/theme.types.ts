import { Theme } from '@material-ui/core';

declare module '@material-ui/core' {
  interface Theme {
    background: {
      primary: React.CSSProperties['color'];
    };
  }
}
