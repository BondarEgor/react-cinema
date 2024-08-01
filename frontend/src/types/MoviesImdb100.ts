export interface MoviesImdb100 {
	title: string
	description: string
	image: string
	genre: string[]
	rating: string
	year: string
	imdb_link: string
}

export interface MovieCard100 {
	movie: MoviesImdb100
}