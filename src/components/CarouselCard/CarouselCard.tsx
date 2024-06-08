import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { CardCover } from '@mui/joy'
import React from 'react'

export default function CarouselCard() {
	return (
		<div className='mt-2'>
			<Card sx={{ maxWidth: 310, minHeight: 80 }}>
				<CardMedia>
					<img
						src='https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60'
						loading='lazy'
						alt='example'
					/>
				</CardMedia>
			</Card>
			<Typography>Here is some text</Typography>
		</div>
	)
}
