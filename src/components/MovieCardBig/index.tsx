import {
  CardContent,
  Typography,
  Box,
  StyledEngineProvider,
  CardMedia,
} from "@mui/material";
import { Movie } from "../../types/movieCard";
import "./styles.css";
import { Link } from "react-router-dom";

interface CardBig {
  movie: Movie;
}

export default function MovieCard({ movie }: CardBig) {
  const { name, year, poster, imdb, genre } = movie;
  console.log(movie);
  return (
    <StyledEngineProvider injectFirst>
      <Link
        className="link"
        to="#"
        target="self"
        rel="noreferrer"
        style={{ flexGrow: 7, display: "flex" }}
      >
        <CardMedia
          image={poster}
        >
          <CardContent className="card-content">
            <Typography variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="white">
              Rating: {imdb}
            </Typography>
            <Box mt={1}>
              <Typography variant="body2" color="white">
                Genre: {genre}
              </Typography>
              <Typography variant="body2" color="white">
                Year: {year}
              </Typography>
            </Box>
          </CardContent>
        </CardMedia>
      </Link>
    </StyledEngineProvider>
  );
}
