import React from 'react'
import {
	Card,
	CardContent,
	CardMedia,
	Typography,
	Box,
	StyledEngineProvider,
} from '@mui/material'
import { MoviesCardProps } from '../../types/movieCard'
import './MovieCardBig.css'

export default function MovieCard({ movie }: MoviesCardProps) {	
	return (
		<StyledEngineProvider>
			<Card className='card'>
				<CardMedia
					component='img'
					image={movie.image}
					alt={movie.title}
					className='card-media'
				/>
				<CardContent className='card-content'>
					<Typography variant='h5' component='div'>
						{movie.title}
					</Typography>
					<Typography variant='body2' color='white'>
						{movie.description}
					</Typography>
					<Box mt={1}>
						<Typography variant='body2' color='white'>
							Duration: {movie.duration}
						</Typography>
						<Typography variant='body2' color='white'>
							Genre: {movie.genre}
						</Typography>
						<Typography variant='body2' color='white'>
							Year: {movie.year}
						</Typography>
					</Box>
				</CardContent>
			</Card>
		</StyledEngineProvider>
	)
}
