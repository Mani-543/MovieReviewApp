import { useState } from "react";

const genres = [
  "All",
  "Action",
  "Comedy",
  "Drama",
  "Romance",
  "Thriller",
  "Adventure",
  "Animation",
  "Horror",
];

function SearchBar({ setSearch, setFilters }) {
  const [input, setInput] = useState("");
  const [genre, setGenre] = useState("All");

  const handleSearch = () => {
    setSearch(input);
    setFilters({
      genre: genre === "All" ? "" : genre,
    });
  };

  return (
    <div className="flex justify-center gap-2 p-4 flex-wrap">
      {/* 🔍 Search Input */}
      <input
        className="p-2 rounded text-black"
        placeholder="Search movie..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {/* 🎭 Genre Dropdown */}
      <select
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className="p-2 rounded text-black"
      >
        {genres.map((g) => (
          <option key={g} value={g}>
            {g}
          </option>
        ))}
      </select>

      {/* 🔘 Button */}
      <button
        onClick={handleSearch}
        className="bg-blue-500 px-4 py-2 rounded"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;