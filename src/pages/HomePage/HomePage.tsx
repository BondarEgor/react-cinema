import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup';
import CustomCarousel from '../../components/Carousel/Carousel';
import Loader from '../../components/Loader/Loader';
import MovieCard from '../../components/MovieCardBig/MovieCardBig';
import MovieCardSmall from '../../components/MovieCardSmall/MovieCardSmall';
import {
  fetchDataError,
  fetchDataSuccess,
  fetchMovies,
} from '../../features/movies/moviesSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getTopMovies} from '../../services/api.services';
import { filterButtons } from './constants';

export default function HomePage() {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.movies);
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    dispatch(fetchMovies());
    getTopMovies()
      .then((response: any) => {
        dispatch(fetchDataSuccess(response));
        setRandomNumber(Math.floor(Math.random() * response.length));
      })
      .catch((error) => dispatch(fetchDataError(error.message)));
  }, [dispatch]);

  if (error) {
    return <div>Error</div>;
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
            <MovieCard movie={data[randomNumber]} />
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
