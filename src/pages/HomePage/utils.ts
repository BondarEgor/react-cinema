import { API_KEY } from './constants'

export const fetchArticles = async () => {
	const url = `${process.env.REACT_APP_NEWS_MOVIES}`
	const response = await fetch(url)
	const data = await response.json()
	const articles = data["articles"]

	return articles
}