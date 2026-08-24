import type { Movie } from "../types/movie";

interface FetchMoviesResponse {
  results: Movie[];
}

const BASE_URL = "https://api.themoviedb.org/3";

const token = import.meta.env.VITE_TMDB_TOKEN;

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const params = new URLSearchParams({ query });
  const res = await fetch(`${BASE_URL}/search/movie?${params.toString()}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch movies: ${res.status}`);
  }

  const data = (await res.json()) as FetchMoviesResponse;
  return data.results;
};