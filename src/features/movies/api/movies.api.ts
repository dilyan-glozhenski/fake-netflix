import http from "../../../shared/api/http";
import { MovieCategory } from "../../../shared/constants/categories";
import { Movie } from "../types";


export const getAllMovies = async (): Promise<Movie[]> => {
    // there is no endpoint to get all movies, so we will return a list of random movies for demonstration purposes
    const KEYWORDS = ["man", "love", "dark", "space", "world", "time", "dead", "star", "night", "city", "lord", "ring", "war", "life", "dream", "blood", "fire", "water", "earth", "winds"];
    const movies: Movie[] = [];
    const randomKeyword = KEYWORDS[Math.floor(Math.random() * KEYWORDS.length)];

    try {
        const requests = Array.from({ length: 5 }, (_, i) => http.get(process.env.EXPO_PUBLIC_MOVIES_BASE_URL || '',
            { s: randomKeyword, page: (i + 1).toString() }));
        const responses = await Promise.all(requests);
        responses.forEach((response: any) => {
            if (response.Search) {
                movies.push(...response.Search.map((movie: any) => ({
                    title: movie.Title,
                    year: movie.Year,
                    poster: movie.Poster,
                    imdbID: movie.imdbID,
                })));
            }
        });
    } catch (error) {
        console.error("Error fetching movies:", error);
        throw error;
    }

    return movies.sort(() => Math.random() - 0.5);
}

export const getMovieById = async (id: string): Promise<Movie> => {
    try {
        const movie = await http.get(process.env.EXPO_PUBLIC_MOVIES_BASE_URL || '', { i: id });
        return {
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster,
            imdbID: movie.imdbID,
            actors: movie.Actors,
            awards: movie.Awards,
            director: movie.Director,
            genre: movie.Genre,
            plot: movie.Plot,
            releasedDate: movie.Released,
            imdbRating: movie.imdbRating,
            duration: movie.Runtime,
        };
    } catch (error) {
        console.error("Error fetching movies:", error);
        throw error;
    }
}

