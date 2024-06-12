import qs from 'qs'
import { $API_BASE_URL } from '../../config/env'
import { Movie } from '../../types/movieCard'

const params = {
    "limit": "100",
    "selectFields": [
        "id",
        "name",
        "year",
        "rating",
        "genres",
        "poster",
        "logo"
    ],
    "notNullFields": [
        "id",
        "name",
        "year",
        "rating.imdb",
        "poster.url"
    ],
    "type": "movie",
    "status": "completed",
    "year": "2000-2024"
}

interface Response {
	docs: Movie[]
}

export default async function getTopMovies() {
	const url = `${$API_BASE_URL}?${params}`
	const result = await fetch(url, {
		method: 'GET',
		headers: {
			'X-API-KEY': 'XRPJ346-MHPMQDQ-KP39FS8-EE2Y28Z',
		},
	}).catch(e => {
		throw new Error('Movies fetch failed')
	})
	const response: Response = await result.json()
	return response.docs
}
