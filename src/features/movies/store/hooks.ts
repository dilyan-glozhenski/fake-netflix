import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import type {Dispatch, UnknownAction} from 'redux';
import {getMovies, getMovieById} from './thunks';
import {
  selectMovies,
  selectMoviesLoading,
  selectSpotlightMovie,
  selectMovieById,
  selectMovieDetailsError,
  selectMovieDetailsLoading,
} from './selectors';
import { Movie } from '../types';

type MoviesThunk = ReturnType<typeof getMovies> | ReturnType<typeof getMovieById>;

export function useAllMovies() {
  const dispatch = useDispatch<Dispatch<UnknownAction> & ((action: MoviesThunk) => unknown)>();
  const movies:Movie[] = useSelector(selectMovies);
  const loading = useSelector(selectMoviesLoading); 
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return { movies, loading };
}

export function useSpotlightMovie() {
    return useSelector(selectSpotlightMovie);
}

export function useMovieById(id: string) {
    const dispatch = useDispatch<Dispatch<UnknownAction> & ((action: MoviesThunk) => unknown)>();
    const movieDetails = useSelector((state) => selectMovieById(state, id));
    const loading = useSelector(selectMovieDetailsLoading);
    const error = useSelector(selectMovieDetailsError);
    useEffect(() => {
      dispatch(getMovieById(id));
    }, [dispatch, id]);
    return { movieDetails, loading, error };
}
