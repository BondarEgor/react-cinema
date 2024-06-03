import { configureStore } from '@reduxjs/toolkit'
import movieReducers from './reducers'
// ...

const store = configureStore({
  reducer: {
    movies: movieReducers
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store