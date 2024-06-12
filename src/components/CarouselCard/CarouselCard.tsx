import { Box, Card, CardMedia, SvgIcon, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import { Movie } from '../../types/movieCard';

interface CarouseCard {
  movie: Movie;
}

export default function CarouselCard({ movie }: CarouseCard) {
  return (
    <>
      <Link to="">
        <Card sx={{ maxWidth: 310, maxHeight: 200 }}>
          <CardMedia>
            <img
              key={movie.id}
              src={movie.poster?.url}
              loading="lazy"
              alt="example"
              style={{ objectFit: 'cover', height: '100%', width: '100%' }}
            />
          </CardMedia>
        </Card>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 1,
            paddingRight: 2,
            justifyItems: 'end',
          }}
        >
          <div>
            <Typography fontWeight={500}>{movie.name}</Typography>
          </div>

          <div className="flex items-center gap-5">
            <Typography variant="body2" fontWeight={300}>
              {movie.year}
            </Typography>
            <SvgIcon>
              <StarIcon color="warning" />
            </SvgIcon>
            <Typography fontWeight={300}>{movie.rating.imdb}</Typography>
          </div>
        </Box>
      </Link>
    </>
  );
}
