import React from 'react'
import {
	Card,
	CardContent,
	Typography,
	Box,
	StyledEngineProvider,
	Button,
} from '@mui/material'
import { MoviesCardProps } from '../../types/movieCard'
import './MovieCardBig.css'
import { Link } from 'react-router-dom'
import { CardCover } from '@mui/joy'
import { styled } from '@mui/system'

const HoverCard = styled(Card)({
	transition: 'transform 1s',
	'&:hover': {
		transform: 'scale(1.02)',
	},
})

export default function MovieCard({ movie }: MoviesCardProps) {
	return (
		<StyledEngineProvider injectFirst>
			<HoverCard className='card'>
				<Link to={movie.Link} target='_blank' rel='noreferrer'>
					<CardCover>
						<img
							src='https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800'
							loading='lazy'
						/>
					</CardCover>
					<CardContent className='card-content'>
						<Typography variant='h5' component='div'>
							{movie.Title}
						</Typography>
						<Typography variant='body2' color='white'>
							Rating: {movie.Rating}
						</Typography>
						<Box mt={1}>
							<Typography variant='body2' color='white'>
								Position: {movie.Position}
							</Typography>
							<Typography variant='body2' color='white'>
							</Typography>
						</Box>
					</CardContent>
				</Link>
			</HoverCard>
		</StyledEngineProvider>
	)
}
