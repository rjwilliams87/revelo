import React from 'react';
import { AppBar, Box, createStyles, Drawer, IconButton, makeStyles, Theme, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { AppProps } from '../../app.types';

import { Dialog } from '@material-ui/core';

import { ToggleTheme } from '../ToggleTheme';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    banner: {
      height: '60px',
      width: '100%',
      background: 'white',
      boxShadow: '0 2px 2px -1px #98a2b34d',
      marginBottom: '3vh',
    },
    hamburger: {
      color: theme.palette.primary.main,
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
    },
  }),
);

interface INavProps {
  open: any;
  onClose: any;
}

const NavigationMenu: React.FC<INavProps> = ({ open, onClose }: INavProps) => {
  return (
    <Drawer open={open} onClose={onClose}>
      <Box
        style={{
          width: '15vw',
          background: 'white',
          height: '100vh',
          margin: '0',
          padding: '0',
        }}
      >
        Hello
      </Box>
    </Drawer>
  );
};

export const Banner: React.FC = () => {
  const styles = useStyles();
  const [open, setOpen] = React.useState<boolean>(false);

  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);

  return (
    <AppBar className={styles.banner} position="sticky">
      <Toolbar className={styles.toolbar}>
        <IconButton onClick={openMenu} className={styles.hamburger} edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <NavigationMenu open={open} onClose={closeMenu} />
        <ToggleTheme />
      </Toolbar>
    </AppBar>
  );
};
