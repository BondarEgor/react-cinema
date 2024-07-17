import { useQueries } from 'react-query'
import { fetchArticles } from '../pages/HomePage/utils'
import { getTopMovies } from '../services/api.services'

export const useMediaInfo = (genre?: string) => {
	const medias = useQueries([
		{ queryKey: ['movies',genre], queryFn: () => getTopMovies(genre) },
		{ queryKey: 'articles', queryFn: fetchArticles }
	])

	const isError = medias.some(media => media.isError)
	const isLoading = medias.some(media => media.isLoading)

	const movies = medias[0].data
	const articles = medias[1].data

	return { isError, isLoading, movies, articles }
}