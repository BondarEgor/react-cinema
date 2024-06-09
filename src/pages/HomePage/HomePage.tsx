import { useEffect } from 'react'
import getTopMovies from './topMovies'
import {
	fetchDataError,
	fetchDataSuccess,
	fetchMovies,
} from '../../features/movies/moviesSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { filterButtons } from './filterButtons'
import MovieCard from '../../components/MovieCardBig/MovieCardBig'
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup'
import MovieCardSmall from '../../components/MovieCardSmall/MovieCardSmall'
import CustomCarousel from '../../components/Carousel/Carousel'
import { Typography } from '@mui/material'
import Loader from '../../components/Loader/Loader'

export default function HomePage() {
	const dispatch = useAppDispatch()
	const { data, loading } = useAppSelector(state => state.movies)

	useEffect(() => {
		dispatch(fetchMovies())
		getTopMovies()
			.then(response => {
				dispatch(fetchDataSuccess(response))
			})
			.catch(error => dispatch(fetchDataError(error.message)))
	}, [dispatch])

	return (
		<>
			{loading ? (
				<Loader loading={loading} />
			) : (
				<div className='lg:h-3/5'>
					<Typography sx={{ marginBottom: 1 }} variant='h4'>
						My cinema
					</Typography>
					<ButtonGroup buttons={filterButtons} />
					<div className='flex gap-8 mt-5 xs:flex-col'>
						<MovieCard movie={data[1]} />
						<MovieCardSmall />
					</div>
					<div className='mt-3'>
						<Typography marginBottom={1} fontWeight={500} variant='h5'>
							Special for you
						</Typography>
						<CustomCarousel />
					</div>
				</div>
			)}
		</>
	)
}
