import { useEffect, useState } from "react";

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

function Filter({ onFilter }) {
  const [genre, setGenre] = useState("All");

  // filter 
  useEffect(() => {
    onFilter({
      genre: genre === "All" ? "" : genre,
    });
  }, [genre, onFilter]);

  return (
    <div className="flex justify-center p-4">
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
    </div>
  );
}

export default Filter;