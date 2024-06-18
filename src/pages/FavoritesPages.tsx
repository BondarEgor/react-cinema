import { useEffect } from "react"
import {
  fetchSeries,
  fetchSeriesError,
  fetchSeriesSuccess,
} from "../features/series/seriesSlice"
import { useAppDispatch, useAppSelector } from "../hooks"
import { getTopMedia } from '../services/api.services'

export default function FavoritesPage() {
  const dispatch = useAppDispatch()
  const { data, loading, error } = useAppSelector((state) => state.series)

  useEffect(() => {
    dispatch(fetchSeries())
    getTopMedia("series")
      .then((response) => {
        dispatch(fetchSeriesSuccess(response))
      })
      .catch((error) => {
        dispatch(fetchSeriesError(error))
      })
  }, [dispatch])

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
  )
}
