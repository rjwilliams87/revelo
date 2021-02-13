import React, { useReducer, useContext } from 'react';
import { Theme } from '@material-ui/core';

import { AppProps } from '../app.types';
import { lightTheme } from '../theme/light';
import { darkTheme } from '../theme/dark';

export enum ThemeType {
  light = 'light',
  dark = 'dark',
}

export interface ThemeAction {
  type: ThemeType;
}

export interface ThemeState {
  theme: Theme;
  type: ThemeType;
}

export interface WithThemeProps extends AppProps {
  displayName?: string;
}

const ThemeStateContext = React.createContext({ theme: darkTheme, type: ThemeType.dark });
const ThemeDispatchContext = React.createContext<React.Dispatch<ThemeAction> | null>(null);

export const useThemeState = (): ThemeState => {
  const context = useContext(ThemeStateContext);

  if (!context) {
    throw new Error('useStateContext must but called within ThemeContext');
  }

  return context;
};

export const useThemeDispatch = (): React.Dispatch<ThemeAction> => {
  const context = useContext(ThemeDispatchContext);

  if (!context) {
    throw new Error('useThemeDispatch must be called within ThemeContext');
  }

  return context;
};

const themeReducer: React.Reducer<ThemeState, ThemeAction> = (state: ThemeState, action: ThemeAction) => {
  const handlers = {
    light: {
      theme: lightTheme,
      type: ThemeType.light,
    },
    dark: {
      theme: darkTheme,
      type: ThemeType.dark,
    },
  };

  return handlers[action.type] || state;
};

export const ThemeContext: React.FC = ({ children }: AppProps) => {
  const [state, dispatch] = useReducer<React.Reducer<ThemeState, ThemeAction>>(themeReducer, {
    theme: darkTheme,
    type: ThemeType.dark,
  });

  return (
    <ThemeStateContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>{children}</ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
};

export const withTheme = <P extends WithThemeProps>(Component: React.ComponentType<P>): React.ComponentType<P> => {
  const displayName = Component?.displayName || 'Component';

  const ComponentWithTheme = (props: P) => {
    return (
      <ThemeContext>
        <Component {...(props as P)} />
      </ThemeContext>
    );
  };

  ComponentWithTheme.displayName = `withTheme${displayName}`;

  return ComponentWithTheme;
};
