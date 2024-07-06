import { Box, Container, Typography } from "@mui/material";
import CustomCarousel from "../../components/Carousel/Carousel";
import Loader from "../../components/Loader/Loader";
import MovieCard from "../../components/MovieCardBig";
import { MovieCardSmall } from "../../components/MovieCardSmall";
import { getTopMovies } from "../../services/api.services";
import { filterButtons } from "./constants";
import ErrorPage from "../ErrorPage";
import { useQuery } from "react-query";
import "./style.css";
import { useParams } from "react-router-dom";
import CustomLink from "../../components/kit/Link";

export default function HomePage() {
  const { genre } = useParams();

  const activeButton = filterButtons.findIndex((button) => {
    return button.label === genre;
  });

  const fetchArticles = async () => {
    const url = `${process.env.REACT_APP_NEWS_MOVIES}`;
    const response = await fetch(url);
    const data = await response.json();
    const articles = data["articles"];

    return articles;
  };
  const fetchMovies = async () => {
    const url = "https://imdb-top-100-movies.p.rapidapi.com";
    const response = await fetch(url, {
      headers: {
        "x-rapidapi-key": "7505d69b34msh4e599e0255c0608p150ca5jsn7817adc1cb01",
      },
    });
    const data = await response.json();
    return data;
  };
  const {
    data: imdbMovies,
    isLoading: isImdbLoading,
    isError: isImdbError,
  } = useQuery("imdb", fetchMovies);

  const {
    data: articles,
    isLoading: isNewsLoading,
    isError: isNewsError,
  } = useQuery("news", fetchArticles);

  if (isImdbError || isNewsError) {
    return <ErrorPage />;
  }

  if (isImdbLoading || isNewsLoading) {
    return <Loader loading={true} />;
  }

  if (!imdbMovies || !articles) {
    return <h3>No data</h3>;
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
        <MovieCard movie={imdbMovies[0]} />
        <MovieCardSmall article={articles[0]} />
      </Box>
      <Box>
        <Typography marginBottom={1} fontWeight={500} variant="h5">
          Special for you
        </Typography>

        <CustomCarousel data={imdbMovies} />
      </Box>
    </Container>
  );
}
