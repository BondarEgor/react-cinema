import { Box, Card, CardMedia, SvgIcon, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import { Movie } from '../../types/movieCard';
import { useState } from 'react';
import { flexbox } from '@mui/system'

interface CarouseCard {
  movie: Movie;
}

export default function CarouselCard({ movie }: CarouseCard) {
  console.log(movie.poster)
  return (
    <>
      <Link to="">
        <Card sx={{ maxWidth: 310, maxHeight: 200 }}>
          <CardMedia>
            <img
              key={movie.id}
              src={movie.poster}
              loading="lazy"
              alt="example"
              style={{ objectFit: 'cover', width: '100%' }}
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
            <Typography fontWeight={300}>{}</Typography>
          </div>
        </Box>
      </Link>
    </>
  );
}
