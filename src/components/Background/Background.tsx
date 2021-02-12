import React from 'react';
import { createStyles, Box, makeStyles } from '@material-ui/core';
import { Theme } from '@material-ui/core';

import { AppProps } from '../../app.types';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      background: theme.background.main,
      minHeight: '100vh',
      minWidths: '100vw',
    },
  });
});

export const Background: React.FC = ({ children }: AppProps) => {
  const styles = useStyles();

  return <Box className={styles.root}>{children}</Box>;
};
