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

const movie = {
	title: 'Inception',
	description:
		'A thief who steals corporate secrets through the use of dream-sharing technology.',
	duration: '148 min',
	genre: 'Action, Sci-Fi',
	year: '2010',
	image:
		'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRk_T9SN2HuOjvP31ZWHamTHjQluJn42SL7GPavWUEA9m-FFaa43t3LfaHkb-h3tXDigwmYgAEiRPsp9fRGhQ-K6olbaMPzd7MaIEt-BA0',
}

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
		<main className='w-full max-h-screen flex flex-col' style={{ maxWidth: 'calc(100% - var(--sidebar-size))' }}>
			<div className=' h-3/5 '>
				<Typography variant='h4'>My cinema</Typography>
				<ButtonGroup buttons={filterButtons} />
				<div className='flex gap-8 mt-5'>
					<MovieCard movie={movie} />
					<MovieCardSmall />
				</div>
			</div>
			<div className=''>
      <Typography variant='h5'>Special for you</Typography>
      <CustomCarousel />
      </div>
		</main>
		// <div className='flex flex-col'>
		//   <h1 className="text-3xl font-extrabold">My cinema</h1>
		//   <div className="mt-3">
		// 		<ButtonGroup buttons={filterButtons} />
		//     <div className="flex gap-8 mt-5">
		//       <MovieCard movie={movie} />
		//       <MovieCardSmall/>
		//     </div>
		//   </div>
		//   <h2 className='text-3xl font-extrabold mt-5'>Special for you</h2>
		//   <div className='flex-grow-1 w-screen'>
		//   <CustomCarousel />
		//   </div>
		// </div>
	)
}
