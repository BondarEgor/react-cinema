import { useEffect, useState } from 'react'
import getTopMovies from '.'

export default function HomePage() {
	const [loading, setLoading] = useState(true)
	const [movies, setMovies] = useState([])



	useEffect(() => {
		async function fetchData() {
			try {
				setLoading(true)
				const data = await getTopMovies()
				setMovies(data)
			} catch (error) {
				console.log(error)
			} finally{
				setLoading(false)
			}
		}
//Проверить в глобал стейте
		fetchData()
	}, [])
	return (
		<>
			<h1>Top Movies</h1>
			{loading ? (
				<div>Loading...</div>
			) : (
				<ul>
					{movies.map((movie: any) => {
						return <li>{movie.Title}</li>
					})}
				</ul>
			)}
		</>
	)
}
