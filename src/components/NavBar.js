import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import IconButton from '@material-ui/core/IconButton';
import Mail from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link href="https://www.runnincode.com" color="inherit" >
              Scott Cook
            </Link>
          </Typography>
          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="mail">
            <Link href="mailto:scott.madison.cook@gmail.com?subject=I want to hire you" color="inherit">
              <Mail />
            </Link>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
