import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MoviesCard } from '../../types/movieCard'
interface MoviesState {
  data: MoviesCard[];
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
    fetchDataSuccess(state, action: PayloadAction<MoviesCard[]>) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchMovies, fetchDataSuccess, fetchDataError } = moviesSlice.actions;


export default moviesSlice.reducer;
