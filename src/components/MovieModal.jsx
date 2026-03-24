function MovieModal({ movie, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
      <div className="bg-white text-black p-5 rounded w-[90%] md:w-[500px] relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-red-500"
        >
          ✖
        </button>

        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full h-60 object-cover"
        />

        <h2 className="text-xl font-bold mt-2">{movie.Title}</h2>
        <p>{movie.Plot}</p>
        <p className="mt-2">⭐ IMDB: {movie.imdbRating}</p>
        <p>🎭 Genre: {movie.Genre}</p>
      </div>
    </div>
  );
}

export default MovieModal;