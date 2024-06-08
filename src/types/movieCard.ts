export interface MoviesCard {
	title:string,
	description: string,
	duration: string,
	genre: string,
	year: string,
	image: string,
}

export interface MoviesCardProps {
	movie: MoviesCard
}