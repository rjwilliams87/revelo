import React from 'react';
import { Box, TextField } from '@material-ui/core';

import { Layout } from '../../components/Layout';

export const Home: React.FC = () => {
  return (
    <Layout>
      <Box style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <TextField label="Domain or IP" variant="filled" style={{ width: '300px' }} />
      </Box>
    </Layout>
  );
};
