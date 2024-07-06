import { CardContent, Typography, Box, CardActionArea } from "@mui/material";
import "./styles.css";
import { MovieCard100 } from "../../types/MoviesImdb100";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }: MovieCard100) {
  const { title, description, image, genre, imdb_link, year, rating } = movie;
  return (
    <>
      <Link to={imdb_link}>
        <CardActionArea>
          <CardContent
            style={{ backgroundImage: `url(${image})` }}
            className="card-media card-content"
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="h6" component="div">
                {description}
              </Typography>
              <Typography variant="body2" color="white">
                Rating: {rating}
              </Typography>
              <Typography variant="body2" color="white">
                Genre: {genre}
              </Typography>
              <Typography variant="body2" color="white">
                Year: {year}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Link>
    </>
  );
}
