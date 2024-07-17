import { API_KEY } from './constants'

export const fetchArticles = async () => {
	const url = `${process.env.REACT_APP_NEWS_MOVIES}`
	const response = await fetch(url)
	const data = await response.json()
	const articles = data["articles"]

	return articles
}

export const fetchMovies = async () => {
	const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/movies`, {
		headers: API_KEY,
	})
	const data = await response.json()
	return data
}
