import React, { useReducer, useContext } from 'react';
import { Theme } from '@material-ui/core';

import { AppProps } from '../app.types';
import { lightTheme } from '../theme/light';
import { darkTheme } from '../theme/dark';

const ThemeStateContext = React.createContext(darkTheme);
const ThemeDispatchContext = React.createContext(null);

const useThemeState = (): Theme => {
  const context = useContext(ThemeStateContext);

  if (!context) {
    throw new Error('useStateContext must but called within ThemeContext');
  }

  return context;
};

const useThemeDispatch = (): React.DispatchWithoutAction => {
  const context = useContext(ThemeDispatchContext);

  if (!context) {
    throw new Error('useThemeDispatch must be called within ThemeContext');
  }

  return context;
};

enum ActionType {
  light = 'light',
  dark = 'dark',
}

interface ReducerAction {
  type: ActionType;
}

const themeReducer: React.Reducer<Theme, ReducerAction> = (state: Theme, action: ReducerAction) => {
  const handlers = {
    light: lightTheme,
    dark: darkTheme,
  };

  return handlers[action.type] || state;
};

const ThemeContext: React.FC = ({ children }: AppProps) => {
  const [state, dispatch] = useReducer<React.Reducer<Theme, ReducerAction>>(themeReducer, darkTheme);

  return (
    <ThemeStateContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>{children}</ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
};

export { ThemeContext, useThemeState, useThemeDispatch };
