import {  createAsyncThunk } from '@reduxjs/toolkit';
import { getAllMovies, getMovieById as fetchMovieById } from '../api/movies.api';
import { Movie } from '../types';

export const getMovies = createAsyncThunk('movies/getMovies', async () => {
    const movies = await getAllMovies();
    return movies;
});

export const getMovieById = createAsyncThunk('movies/getMovieById', async (id: string) => {
    const movieDetails: Movie = await fetchMovieById(id);
    return movieDetails;
});

// 
