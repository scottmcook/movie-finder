import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// Components
import FilmCard from './FilmCard';
import FilmSearch from './FilmSearch';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FilmSearch className={classes.paper} />
        </Grid>
        <Grid item xs={6}>
          <FilmCard className={classes.paper}  />
        </Grid>
      </Grid>
    </div>
  );
}
