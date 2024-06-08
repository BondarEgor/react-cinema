export interface MoviesCard {
  Id: string;
  Title: string;
  Rating: string;
  Thumbnail: string;
  Link: string;
  Position: number;
}

export interface MoviesCardProps {
	movie: MoviesCard
}