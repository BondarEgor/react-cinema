interface TvShow {
	id: number
	name: string
	permalink: string
	start_date: string
}

interface TopSeriesResponse {
	total: string
	page: number
	pages: number
	tv_shows: TvShow[]
}

export default async function getTopSeries(){
	try {
		const url = 'https://www.episodate.com/api/most-popular?page=2'
		const response = await fetch(url, {
			method: 'GET',
		})
		if (!response.ok) {
			throw new Error('Failed to fetch top series')
		}

		const data: TopSeriesResponse = await response.json()
		return data.tv_shows
	} catch (error) {
		throw new Error('An error occured while fetching series')
	}
}
