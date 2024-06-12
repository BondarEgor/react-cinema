import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../../types/movieCard';

interface MoviesState {
  data: Movie[];
  loading: boolean;
  error: string | null;
}

const initialState: MoviesState = {
  data: [],
  loading: true,
  error: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    fetchMovies(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess(state, action: PayloadAction<Movie[]>) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchMovies, fetchDataSuccess, fetchDataError } =
  moviesSlice.actions;

export default moviesSlice.reducer;
