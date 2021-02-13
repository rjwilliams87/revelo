import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

import { withTheme, useThemeState, ThemeState } from './context/theme.context';
import { Home } from './pages/Home';

function App() {
  const { theme }: ThemeState = useThemeState();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default withTheme(App);
