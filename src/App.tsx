import React from 'react';
import { createStyles, Box, Button, makeStyles } from '@material-ui/core';
import { Theme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

import { ThemeContext } from './context/theme.context';
import { Home } from './pages/Home';

function App() {
  const [theme, setTheme] = React.useState<Theme>(darkTheme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;
