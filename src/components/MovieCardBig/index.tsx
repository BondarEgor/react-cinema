import { CardContent, Typography, Box, CardActionArea } from "@mui/material";
import "./styles.css";
import { MovieCard100 } from "../../types/MoviesImdb100";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }: MovieCard100) {
  const { title, description, image, genre, imdb_link, year, rating } = movie;
  return (
      <Link style={{flexGrow:7}} to={imdb_link}>
        <CardActionArea>
          <CardContent
            style={{ backgroundImage: `url(${image})` }}
            className="card-media card-content flex-grow-7"
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
              }}
            >
              <Box>
                <Typography variant="h4" component="div">
                  {title}
                </Typography>
              </Box>
              <Box>
                <Typography sx={{fontWeight:300}}  component="div">
                  {description}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: "10px" }}>
                <Typography sx={{fontSize:'18px'}}>
                  Year: 
                  <span className='text-gray-300'>{year}</span>
                </Typography>
                <Typography sx={{fontSize:'18px'}}>
                  Rating: 
                  <span className='text-gray-300'>{rating}</span>
                </Typography>
                <Typography sx={{fontSize:'18px'}}>
                  {genre}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </CardActionArea>
      </Link>
  );
}
