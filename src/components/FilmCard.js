import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
  },
  media: {
    height: 800,
  },
});


//let searchApi = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${searchQuery}&page=1&include_adult=false`

// https://developers.themoviedb.org/3/getting-started/images
const DEFAULT_POSTER = `https://image.tmdb.org/t/p/w1280/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg`;

const BASE_POSTER_PATH = `https://image.tmdb.org/t/p/w1280/`


export const FilmCard = ( { movie }) => {
  const classes = useStyles();
  const poster = `${BASE_POSTER_PATH}${movie.poster_path}` === "N/A" ? DEFAULT_POSTER : `${BASE_POSTER_PATH}${movie.poster_path}`;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={poster}
          title={movie.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {movie.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {movie.overview}
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add to Favorites
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default FilmCard;