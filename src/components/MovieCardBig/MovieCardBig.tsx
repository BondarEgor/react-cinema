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

interface CardBig {
  movie: Movie;
}

export default function MovieCard({ movie }: CardBig) {
  const { name, poster, rating, year } = movie;
  return (
    <StyledEngineProvider injectFirst>
        <Link to="#" target="self" rel="noreferrer">
          <CardContent className="card-content">
            <Typography variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="white">
              Rating: {}
            </Typography>
            <Box mt={1}>
              <Typography variant="body2" color="white">
                Year: {year}
              </Typography>
              <Typography variant="body2" color="white"></Typography>
            </Box>
          </CardContent>
        </Link>
    </StyledEngineProvider>
  );
}
