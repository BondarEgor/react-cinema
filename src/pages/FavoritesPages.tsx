import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import {
  fetchSeries,
  fetchSeriesError,
  fetchSeriesSuccess,
} from '../features/series/seriesSlice';
import getTopSeries from './HomePage/topSeries';

export default function FavoritesPage() {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.series);

  useEffect(() => {
    dispatch(fetchSeries());
    getTopSeries()
      .then((response) => {
        dispatch(fetchSeriesSuccess(response));
      })
      .catch((error) => {
        dispatch(fetchSeriesError(error));
      });
  }, [dispatch]);

  return (
    <>
      <h1>Top Series</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {data.map((series) => (
            <li key={series.id}>{series.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}
