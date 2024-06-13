import {
  CardContent,
  Typography,
  Box,
  StyledEngineProvider,
} from '@mui/material';
import { Movie } from '../../types/movieCard';
import './MovieCardBig.css';
import { Link } from 'react-router-dom';
import { CardCover } from '@mui/joy';
import HoverCard from '../HoverCard/HoverCard';

interface CardBig {
  movie: Movie;
}

export default function MovieCard({ movie }: CardBig) {
  const { name, poster, rating, year } = movie;
  return (
    <StyledEngineProvider injectFirst>
      <HoverCard className="card">
        <Link to="#" target="_blank" rel="noreferrer">
          <CardCover>
            <img src={poster.url || ''} className="object-cover" />
          </CardCover>
          <CardContent className="card-content">
            <Typography variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="white">
              Rating: {rating.imdb}
            </Typography>
            <Box mt={1}>
              <Typography variant="body2" color="white">
                Year: {year}
              </Typography>
              <Typography variant="body2" color="white"></Typography>
            </Box>
          </CardContent>
        </Link>
      </HoverCard>
    </StyledEngineProvider>
  );
}
