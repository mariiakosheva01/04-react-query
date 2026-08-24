import styles from "./MovieGrid.module.css";
import type { Movie } from "../../types/movie";

interface MovieGridProps {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}

export default function MovieGrid({
  movies,
  onSelect,
}: MovieGridProps) {
  const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w500";
  const PLACEHOLDER =
    "https://placehold.co/500x750?text=No+Image";

  return (
    <ul className={styles.grid}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <div
            className={styles.card}
            onClick={() => onSelect(movie)}
          >
            <img
              className={styles.image}
              src={
                movie.poster_path
                  ? `${POSTER_BASE_URL}${movie.poster_path}`
                  : PLACEHOLDER
              }
              alt={movie.title}
              loading="lazy"
            />

            <h2 className={styles.title}>{movie.title}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
}