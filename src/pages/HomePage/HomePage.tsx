import { Typography } from "@mui/material";
import { useEffect } from "react";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import CustomCarousel from "../../components/Carousel/Carousel";
import Loader from "../../components/Loader/Loader";
import MovieCard from "../../components/MovieCardBig/MovieCardBig";
import MovieCardSmall from "../../components/MovieCardSmall/MovieCardSmall";
import {
  fetchDataError,
  fetchDataSuccess,
  fetchMovies,
} from "../../features/movies/moviesSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getTopMovies } from "../../services/api.services";
import { filterButtons } from "./constants";
import ErrorPage from "../ErrorPage";

export default function HomePage() {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.movies);

  useEffect(() => {
    const fetchData = async () => {

      if (!data || data.length <= 0) {
        try {
          dispatch(fetchMovies());
          const response = await getTopMovies();
          dispatch(fetchDataSuccess(response));
        } catch (error) {
          dispatch(fetchDataError(`${error}`));
        }
      }
    };
    fetchData();
  }, [dispatch]);

  //добавить эффект на активный роут
  //

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <div className="lg:h-3/5">
          <Typography sx={{ marginBottom: 1 }} variant="h4">
            My cinema
          </Typography>
          <ButtonGroup buttons={filterButtons} />
          <div className="flex gap-8 mt-5 xs:flex-col">
            <MovieCard movie={data[0]} />
            <MovieCardSmall />
          </div>
          <div className="mt-3">
            <Typography marginBottom={1} fontWeight={500} variant="h5">
              Special for you
            </Typography>
            <CustomCarousel />
          </div>
        </div>
      )}
    </>
  );
}
