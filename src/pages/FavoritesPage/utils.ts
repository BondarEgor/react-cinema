import { IFavoriteMovie } from '../../types/IFavoriteMovies'

export const fetchFavorites = async () => {
	return new Promise<IFavoriteMovie[]>((resolve) => {
		setTimeout(async () => {
			const response = await fetch(
				`${process.env.REACT_APP_API_BASE_URL}/favorites`
			)
			const data = await response.json()
			resolve(data)
		}, 2000)
	})
}