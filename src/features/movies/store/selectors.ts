export const selectMovies = (state: any) => state.movies.items;
export const selectMoviesLoading = (state: any) => state.movies.loading;
export const selectSpotlightMovie = (state: any) => state.movies.spotlightMovie;
export const selectMovieById = (state: any, id: string) =>
  state.movies.movieDetailsId === id ? state.movies.movieDetails : null;
export const selectMovieDetailsLoading = (state: any) => state.movies.movieDetailsLoading;
export const selectMovieDetailsError = (state: any) => state.movies.movieDetailsError;
