import { Box, Card, CardMedia, SvgIcon, Typography } from '@mui/material'
import { useAppSelector } from '../../hooks/hooks'
import StarIcon from '@mui/icons-material/Star'

export default function CarouselCard() {
	const { data, loading } = useAppSelector(state => state.movies)
	return (
		<>
			<Card sx={{ maxWidth: 310, minHeight: 80 }}>
				<CardMedia>
					<img
						src='https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60'
						loading='lazy'
						alt='example'
					/>
				</CardMedia>
			</Card>
			<Box sx={{ display: 'flex', alignItems: 'center', justifyContent:'space-between', marginTop:1,paddingRight:2, justifyItems:'end' }}>
				<Typography fontWeight={300}>{data[0].Title}</Typography>
				<Typography variant='body2' fontWeight={300}>
					2019
				</Typography>
				<SvgIcon>
					<StarIcon color='warning'/>
				</SvgIcon>
			</Box>
		</>
	)
}
