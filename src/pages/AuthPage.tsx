import { useAppSelector } from '../hooks/hooks'

export default function AuthPage() {
	const { data, loading, error } = useAppSelector(state => state.movies)
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
