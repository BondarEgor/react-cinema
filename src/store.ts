import { configureStore } from '@reduxjs/toolkit'
import moviesSlice from './features/movies/moviesSlice'
import seriesSlice from './features/series/seriesSlice'

const store = configureStore({
  reducer: {
    movies: moviesSlice,
    series: seriesSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store