import { Typography } from "@mui/material";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import CustomCarousel from "../../components/Carousel/Carousel";
import Loader from "../../components/Loader/Loader";
import MovieCard from "../../components/MovieCardBig/MovieCardBig";
import MovieCardSmall from "../../components/MovieCardSmall/MovieCardSmall";
import { getTopMovies } from "../../services/api.services";
import { filterButtons } from "./constants";
import ErrorPage from "../ErrorPage";
import { useQuery } from "react-query";

export default function HomePage() {
  async function fetchData() {
    return await getTopMovies();
  }
  const { data, isLoading, isError } = useQuery("movies", fetchData);

  if (isError) {
    return <ErrorPage />;
  }

  if (isLoading) {
    return <Loader loading={isLoading} />;
  }

  if (!data) {
    return <h3>No data</h3>;
  }

  return (
    <div className="lg:h-3/5">
      <Typography sx={{ marginBottom: 1 }} variant="h4">
        My cinema
      </Typography>
      <ButtonGroup buttons={filterButtons} />
      <div className="flex gap-8 mt-5 xs:flex-col">
        <MovieCard movie={data[1]} />
        <MovieCardSmall />
      </div>
      <div className="mt-3">
        <Typography marginBottom={1} fontWeight={500} variant="h5">
          Special for you
        </Typography>
        <CustomCarousel />
      </div>
    </div>
  );
}
