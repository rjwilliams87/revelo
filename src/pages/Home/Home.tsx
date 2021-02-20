import React from 'react';
import { Box, TextField, makeStyles, createStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      color: theme.text.main,
      width: '50ch',
      boxShadow: '0 2px 2px -1px #98a2b34d',
    },
    textField: {
      width: '50vw',
    },
  }),
);

import { Layout } from '../../components/Layout';

export const Home: React.FC = () => {
  const styles = useStyles();

  return (
    <Layout>
      <Box style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <TextField
          className={styles.textField}
          InputProps={{ className: styles.input }}
          label="Search"
          variant="outlined"
          style={{ width: '300px', color: '#fff' }}
        />
      </Box>
    </Layout>
  );
};
