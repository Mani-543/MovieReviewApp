import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";
import MovieModal from "./components/MovieModal";

const API_KEY = "68b913e0";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("batman");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [filters, setFilters] = useState({ genre: "" });

  // ⭐ Ratings (persist)
  const [ratings, setRatings] = useState(() => {
    return JSON.parse(localStorage.getItem("ratings")) || {};
  });

  useEffect(() => {
    localStorage.setItem("ratings", JSON.stringify(ratings));
  }, [ratings]);

  const handleRating = (id, value) => {
    setRatings((prev) => ({ ...prev, [id]: value }));
  };

  // 🔥 Fetch with FULL DETAILS (needed for genre)
  const fetchMovies = async (query) => {
    const res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
    const data = await res.json();

    if (!data.Search) return;

    const fullData = await Promise.all(
      data.Search.map(async (m) => {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&i=${m.imdbID}`
        );
        return res.json();
      })
    );

    setMovies(fullData);
  };

  useEffect(() => {
    fetchMovies(search);
  }, [search]);

  // 🎯 Filters
  const filteredMovies = movies.filter((m) => {
    return (
      !filters.genre ||
      m.Genre?.toLowerCase().includes(filters.genre.toLowerCase())
    );
  });

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <SearchBar setSearch={setSearch} setFilters={setFilters} />
      

      <MovieList
        movies={filteredMovies}
        onSelect={setSelectedMovie}
        ratings={ratings}
        onRate={handleRating}
      />

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
}

export default App;