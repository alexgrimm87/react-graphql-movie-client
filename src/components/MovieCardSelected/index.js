import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';
import {Box, Card, CardContent, CardMedia, Typography, MenuItem} from '@mui/material';
import CardMenu from "../CardMenu";

const MovieCardSelected = ({movie, onCardDelete}) => {
  return (
    <Card sx={{display: 'flex', minHeight: '164px'}}>
      <CardMedia
        component="img"
        sx={{width: 100}}
        image={movie.image}
        alt={movie.title}
      />
      <Box sx={{display: 'flex', flexDirection: 'column', width: '100%', position: 'relative'}}>
        <CardContent sx={{flex: '1 0 auto'}}>
          <Typography component="div" variant="h5">
            {movie.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {movie.releaseDate}
          </Typography>
        </CardContent>
        <Box sx={{p: 2, pt: 0}}>
          {movie.genres?.length ? (
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {movie.genres[0].name}
            </Typography>
          ) : null}
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Length: {movie.runtime}
          </Typography>
        </Box>
        <CardMenu>
          <MenuItem onClick={() => onCardDelete(movie)}>
            <FormattedMessage id="delete" />
          </MenuItem>
        </CardMenu>
      </Box>
    </Card>
  )
}

MovieCardSelected.propTypes = {
  movie: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    })),
    runtime: PropTypes.number
  }).isRequired,
  onCardDelete: PropTypes.func
}

export default MovieCardSelected;
