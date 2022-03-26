import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import FilmRating from '../lab/FilmRating';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 400,
  },
});

const DEFAULT_POSTER = `https://via.placeholder.com/300x400?text=Poster+Not+Available`;
const BASE_POSTER_PATH = `https://image.tmdb.org/t/p/w1280/`
const SPECIAL_POSTER_PATH = 'https://m.media-amazon.com/images/M/MV5BMjM1MTkzNTAxM15BMl5BanBnXkFtZTgwMDQzMDMwNTE@._V1_SY1000_SX675_AL_.jpg'

export const FilmCard = ( { movie }) => {
  const classes = useStyles();
  const { title, poster_path, overview } = movie;
  const specialPoster = title === 'Sunset Rock' ? SPECIAL_POSTER_PATH : undefined;
  const poster = poster_path ? `${BASE_POSTER_PATH}${poster_path}` : DEFAULT_POSTER;

  return (
    <Card className={classes.root} >
        <CardMedia
          className={classes.media}
          image={specialPoster ? specialPoster : poster} 
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <FilmRating />
          <Typography variant="body2" noWrap={true} color="textSecondary" component="p">
            {overview}
          </Typography>
        </CardContent>
      {/* </CardActionArea> */}
    </Card>
  );
}

export default FilmCard;