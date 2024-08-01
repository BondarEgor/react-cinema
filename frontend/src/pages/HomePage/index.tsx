import { Box, Container, Typography } from "@mui/material";
import CustomCarousel from "../../components/Carousel/Carousel";
import Loader from "../../components/Loader/Loader";
import MovieCard from "../../components/MovieCardBig";
import { MovieCardSmall } from "../../components/MovieCardSmall";
import { filterButtons } from "./constants";
import "./style.css";
import { useParams } from "react-router-dom";
import CustomLink from "../../components/kit/Link";
import NotFoundPage from "../NotFoundPage/Index";
import { useMediaInfo } from '../../hooks/useMedia'

export default function HomePage() {
  const { genre } = useParams();
  const activeButton = filterButtons.findIndex((button) => {
    if (genre === undefined) {
      return true;
    }
    return button.label === genre;
  });
  const {isError, isLoading, movies, articles} = useMediaInfo(genre)

  if (isError) {
    return <NotFoundPage></NotFoundPage>;
  }

  if (isLoading) {
    return <Loader loading={true} />;
  }

  if (!movies || !articles) {
    return <NotFoundPage></NotFoundPage>
  }

  return (
    <Container
      maxWidth="xl"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <Box>
        <Typography
          sx={{ marginBottom: 1, color: "#ff7e00", fontWeight: "600" }}
          variant="h4"
        >
          My cinema
        </Typography>
        <Box sx={{ display: "flex", gap: "8px" }}>
          {filterButtons.map((button, index) => {
            return (
              <CustomLink
                key={index}
                to={`/home/${button.genre}`}
                isActiveBtn={activeButton === button.id}
                label={button.label}
              />
            );
          })}
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: "20px" }}>
        <MovieCard movie={movies[1]} />
        <MovieCardSmall article={articles[0]} />
      </Box>
      <Box>
        <Typography marginBottom={1} fontWeight={500} variant="h5">
          Special for you
        </Typography>

        <CustomCarousel data={movies} />
      </Box>
    </Container>
  );
}
