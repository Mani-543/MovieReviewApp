import MovieCard from "./MovieCard";

function MovieList({ movies, onSelect, ratings, onRate }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {movies.map((m) => (
        <MovieCard
          key={m.imdbID}
          movie={m}
          onSelect={onSelect}
          ratings={ratings}
          onRate={onRate}
        />
      ))}
    </div>
  );
}

export default MovieList;