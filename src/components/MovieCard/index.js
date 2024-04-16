import PropTypes from 'prop-types';
import {Card, CardMedia, CardContent, Typography, MenuItem, Box} from '@mui/material';
import {AddBoxOutlined} from "@mui/icons-material";
import {styled} from '@mui/material/styles';
import CardMenu from "../CardMenu";

const CardInfo = styled(CardContent)(({theme}) => ({
  '&:last-child': {
    paddingBottom: theme.spacing(2)
  }
}));

const PlusIcon = styled(Box)(({theme}) => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  width: '100%',
  height: '100%',
  opacity: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(255, 255, 255, .6)',
  cursor: 'pointer',
  '&:hover': {
    opacity: 1
  }
}))

const MovieCard = ({movie, onCardSelect, isPreviewMode}) => {
  return (
    <Card sx={{maxWidth: 250, position: "relative"}}>
      {!isPreviewMode && (
        <CardMenu>
          <MenuItem onClick={() => onCardSelect(movie)}>
            Select
          </MenuItem>
        </CardMenu>
      )}
      <Box sx={{ position: 'relative'}}>
        <CardMedia
          component="img"
          height="250"
          image={movie.image}
          alt={movie.title}
        />
        {!isPreviewMode && (
          <PlusIcon onClick={() => onCardSelect(movie)}>
            <AddBoxOutlined sx={{fontSize: 80}}/>
          </PlusIcon>
        )}
      </Box>
      <CardInfo>
        <Typography variant="h6" gutterBottom component="div">
          {movie.title}
        </Typography>
        <Typography mb={0} variant="subtitle1" gutterBottom component="div">
          {movie.releaseDate}
        </Typography>
      </CardInfo>
    </Card>
  )
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string
  }).isRequired,
  onCardSelect: PropTypes.func,
  isPreviewMode: PropTypes.bool
};

export default MovieCard;
