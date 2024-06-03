import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface Movie {
  id: number;
  Title: string;
}

interface MoviesState {
  data: Movie[];
  loading: boolean;
  error: string | null;
}

const initialState: MoviesState = { 
  data: [],
  loading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    fetchData(state) {
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

export const { fetchData, fetchDataSuccess, fetchDataError } = moviesSlice.actions;


export default moviesSlice.reducer;
