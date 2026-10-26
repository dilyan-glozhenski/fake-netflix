import {createSlice} from '@reduxjs/toolkit';
import {getMovies, getMovieById} from './thunks';   
import { Movie } from '../types';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    items: [] as Movie[],
    loading: false,
    error: null as string | undefined | null,
    spotlightMovie: null as Movie | null,
    movieDetails: null as Movie | null,
    movieDetailsId: null as string | null,
    movieDetailsLoading: false,
    movieDetailsError: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.spotlightMovie = action.payload.length > 0 ? action.payload[0] : null;
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getMovieById.pending, (state, action) => {
        state.movieDetailsId = action.meta.arg;
        state.movieDetails = null;
        state.movieDetailsLoading = true;
        state.movieDetailsError = null;
      })
      .addCase(getMovieById.fulfilled, (state, action) => {
        if (state.movieDetailsId === action.meta.arg) {
          state.movieDetailsLoading = false;
          state.movieDetails = action.payload;
        }
      })
      .addCase(getMovieById.rejected, (state, action) => {
        if (state.movieDetailsId === action.meta.arg) {
          state.movieDetailsLoading = false;
          state.movieDetailsError = action.error.message ?? 'Unable to load movie details.';
        }
      })
  },
});

export default moviesSlice.reducer;
