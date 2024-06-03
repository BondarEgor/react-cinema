import { useEffect, useState } from 'react'
import getTopMovies from '.'
import { UseDispatch, useDispatch, useSelector } from 'react-redux'
import { fetchData, fetchDataError, fetchDataSuccess } from '../../reducers'
import { RootState } from '../../store'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'

export default function HomePage() {
	const dispatch = useAppDispatch()
	const { data, loading, error } = useAppSelector(state => state.movies)

	useEffect(() => {
		dispatch(fetchData())
		getTopMovies().then(response => dispatch(fetchDataSuccess(response)))
		.catch((error)=> dispatch(fetchDataError(error.message)))
	}, [dispatch])
	
	return (
		<>
			<h1>Top Movies</h1>
			{loading ? (
				<div>Loading...</div>
			) : (
				<ul>
					{data.map((movie: any) => {
						return <li>{movie.Title}</li>
					})}
				</ul>
			)}
		</>
	)
}
