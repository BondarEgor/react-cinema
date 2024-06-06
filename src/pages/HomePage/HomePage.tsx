import { useEffect } from 'react';
import getTopMovies from './topMovies';
import {
  fetchDataError,
  fetchDataSuccess,
  fetchMovies,
} from '../../features/movies/moviesSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { filterButtons } from './filterButtons';
import MovieCard from '../../components/MovieCard/MovieCard';
import './HomePage.css';
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup'

const movie = {
  title: 'Inception',
  description:
    'A thief who steals corporate secrets through the use of dream-sharing technology.',
  duration: '148 min',
  genre: 'Action, Sci-Fi',
  year: '2010',
  image:
    'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRk_T9SN2HuOjvP31ZWHamTHjQluJn42SL7GPavWUEA9m-FFaa43t3LfaHkb-h3tXDigwmYgAEiRPsp9fRGhQ-K6olbaMPzd7MaIEt-BA0',
};

export default function HomePage() {
  const dispatch = useAppDispatch();
  const { data, loading } = useAppSelector(state => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
    getTopMovies()
      .then(response => {
        dispatch(fetchDataSuccess(response));
      })
      .catch(error => dispatch(fetchDataError(error.message)));
  }, [dispatch]);

  return (
    <>
      <h1 className="text-3xl">My cinema</h1>
      <div className="mt-10">
				<ButtonGroup buttons={filterButtons} />
        <div className="flex justify-between mt-10">
          <MovieCard movie={movie} />
        </div>
      </div>
    </>
  );
}
