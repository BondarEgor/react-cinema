export default async function getTopMovies() {
	const result = await fetch('https://aiom-db-all-in-one-movie-database.p.rapidapi.com/showtime/?mode=popular',{
		method: 'GET',
		headers:{
			'x-rapidapi-key':'7505d69b34msh4e599e0255c0608p150ca5jsn7817adc1cb01',
			'x-rapidapi-host': 'aiom-db-all-in-one-movie-database.p.rapidapi.com'
		}
	}).catch(e => {throw new Error('123')})

	return result.json()
}