function MovieCard({ movie, onSelect, ratings, onRate }) {
  const rating = ratings[movie.imdbID] || 0;

  return (
    <div className="bg-gray-800 p-3 rounded">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-64 object-cover rounded cursor-pointer"
        onClick={() => onSelect(movie)}
      />

      <h2 className="mt-2 font-bold">{movie.Title}</h2>
      <p className="text-sm text-gray-400">{movie.Year}</p>

      {/* Stars */}
      <div className="flex gap-1 mt-2">
        {[1, 2, 3, 4, 5].map((s) => (
          <span
            key={s}
            onClick={() => onRate(movie.imdbID, s)}
            className={`cursor-pointer text-xl ${
              s <= rating ? "text-yellow-400" : "text-gray-500"
            }`}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
}

export default MovieCard;