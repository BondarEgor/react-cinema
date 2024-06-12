import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Series {
  id: string;
  name: string;
}
interface SeriesState {
  data: Series[];
  loading: boolean;
  error: string | null;
}

const initialState: SeriesState = {
  data: [],
  loading: true,
  error: null,
};

const seriesSlice = createSlice({
  name: 'series',
  initialState,
  reducers: {
    fetchSeries(state) {
      state.loading = true;
      state.error = null;
    },
    fetchSeriesSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchSeriesError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchSeries, fetchSeriesSuccess, fetchSeriesError } =
  seriesSlice.actions;

export default seriesSlice.reducer;
