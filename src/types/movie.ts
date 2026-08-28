
export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  backdrop_path: string | null;
  overview: string;
  vote_average: number;
  release_date: string;
}

export interface MoviesResponse {
  results: Movie[];
  total_pages: number;
}
