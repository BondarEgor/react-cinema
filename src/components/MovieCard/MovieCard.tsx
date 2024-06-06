import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

interface MoviesCard {
	title:string,
	description: string,
	duration: string,
	genre: string,
	year: string,
	image: string,
}

interface MoviesCardProps {
	movie: MoviesCard
}
export default function MovieCard({movie}:MoviesCardProps) {
    return (
        <Card sx={{
					 width:700,
					 height:300,
					 position: 'relative',
					 color: 'white',
					 borderRadius:5
						 }}>
            <CardMedia
                component="img"
                height="500"
                image={movie.image}
                alt={movie.title}
                sx={{ filter: 'brightness(80%)' }}
            />
            <CardContent
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    color: 'white',
                }}
            >
                <Typography variant="h5" component="div">
                    {movie.title}
                </Typography>
                <Typography variant="body2" color="white">
                    {movie.description}
                </Typography>
                <Box mt={1}>
                    <Typography variant="body2" color="white">
                        Duration: {movie.duration}
                    </Typography>
                    <Typography variant="body2" color="white">
                        Genre: {movie.genre}
                    </Typography>
                    <Typography variant="body2" color="white">
                        Year: {movie.year}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
