import React from 'react';

import { AppProps } from '../../app.types';
import { Background } from '../Background';

export const Layout: React.FC = ({ children }: AppProps) => {
  return <Background>{children}</Background>;
};
