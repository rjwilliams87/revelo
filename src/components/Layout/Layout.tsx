import React from 'react';

import { AppProps } from '../../app.types';
import { Background } from '../Background';
import { ToggleTheme } from '../ToggleTheme';

export const Layout: React.FC = ({ children }: AppProps) => {
  return (
    <Background>
      <ToggleTheme />
      {children}
    </Background>
  );
};
