import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

import { ThemeAction, ThemeState, ThemeType, useThemeState, useThemeDispatch } from '../../context/theme.context';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    light: {
      color: theme.palette.primary.main,
    },
    dark: {
      color: theme.palette.primary.main,
    },
    toggle: {
      '&:hover': {
        cursor: 'pointer',
      },
    },
  }),
);

export const ToggleTheme: React.FC = () => {
  const styles = useStyles();
  const { type }: ThemeState = useThemeState();
  const dispatch: React.Dispatch<ThemeAction> = useThemeDispatch();

  const toggleLight = () => dispatch({ type: ThemeType.light });
  const toggleDark = () => dispatch({ type: ThemeType.dark });

  return type === ThemeType.light ? (
    <Brightness4Icon onClick={toggleDark} className={`${styles.dark} ${styles.toggle}`} />
  ) : (
    <Brightness7Icon onClick={toggleLight} className={`${styles.light} ${styles.toggle}`} />
  );
};
