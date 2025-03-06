import { useState } from "react";
import { useAnime } from "../context/AnimeContext";
import AnimeCard from "../components/AnimeCard";

function SearchResults() {
  const { animeList } = useAnime();
  const [query, setQuery] = useState("");

  const filteredAnime = animeList.filter(anime =>
    anime.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Search Anime</h1>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for anime..."
        className="w-full p-2 border rounded mb-4"
      />
      <div className="grid grid-cols-3 gap-4">
        {filteredAnime.map((anime) => <AnimeCard key={anime.id} anime={anime} />)}
      </div>
    </div>
  );
}

export default SearchResults;
