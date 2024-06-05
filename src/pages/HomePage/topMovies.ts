interface Movies {
	Position: string,
	Title: string,
	ID: string,
	Rating: string,
	Thumbnail: string,
	Link: string
}

export default async function getTopMovies() {
	const url = 'https://aiom-db-all-in-one-movie-database.p.rapidapi.com/showtime/?mode=popular'
	const result = await fetch(url,{
		method: 'GET',
		headers:{
			'x-rapidapi-key':'7505d69b34msh4e599e0255c0608p150ca5jsn7817adc1cb01',
			'x-rapidapi-host': 'aiom-db-all-in-one-movie-database.p.rapidapi.com'
		}
	}).catch(e => {throw new Error('Movies fetch failed')})

	return result.json()
}