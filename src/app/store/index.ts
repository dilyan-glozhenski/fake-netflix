import {configureStore} from '@reduxjs/toolkit';
import moviesReducer from '../../features/movies/store/slice';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});