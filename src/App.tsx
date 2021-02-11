import React from 'react';
import { createStyles, Box, Button, makeStyles } from '@material-ui/core';
import { Theme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

import { lightTheme } from './theme/light';

const useStyles = makeStyles((theme: Theme) => {
  console.log('THEME = ', theme);
  return createStyles({
    root: {
      background: theme.background.primary,
      height: '100vh',
      width: '100vw',
    },
  });
});

const Background = () => {
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      <Button variant="contained" color="primary">
        Primary
      </Button>
    </Box>
  );
};

console.log('light theme = ', lightTheme);
function App() {
  const [theme, setTheme] = React.useState<Theme>(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Background />
    </ThemeProvider>
  );
}

export default App;
