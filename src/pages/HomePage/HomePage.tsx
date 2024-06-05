import { useEffect } from 'react'
import getTopMovies from './topMovies'
import {
	fetchDataError,
	fetchDataSuccess,
	fetchMovies,
} from '../../features/movies/moviesSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { Settings } from '@mui/icons-material'
import { ButtonGroup, Button, IconButton, Stack } from '@mui/material'
import { filterButtons } from './filterButtons'

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
			<h1 className='text-3xl'>My cinema</h1>
			<Stack spacing={2} direction='row'>
				{filterButtons.map(btnText => (
					<Button variant='contained' color='warning'>{btnText}</Button>
				))}
			</Stack>
		</>
	)
}
