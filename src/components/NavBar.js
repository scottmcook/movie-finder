import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import IconButton from '@material-ui/core/IconButton';
import Mail from '@material-ui/icons/Mail';

export default function ButtonAppBar() {
  return (
    <AppBar className={classes.root} position="relative">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Link href="https://www.runnincode.com" color="inherit" >
            Scott Cook
          </Link>
        </Typography>
        <IconButton edge="end" color="inherit" aria-label="mail">
          <Link href="mailto:scott.madison.cook@gmail.com?subject=I want to hire you" color="inherit">
            <Mail />
          </Link>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
