import React from 'react';
import { Box } from '@material-ui/core';

import { AppProps } from '../../app.types';
import { Background } from '../Background';
import { Banner } from '../Banner';

export const Layout: React.FC = ({ children }: AppProps) => {
  return (
    <Background>
      <Banner />
      {children}
    </Background>
  );
};
