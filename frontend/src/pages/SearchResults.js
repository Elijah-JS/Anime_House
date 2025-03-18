import { useState } from "react";
import { useAnime } from "../context/AnimeContext";
import AnimeCard from "../components/AnimeCard";

function SearchResults() {
  const { animeList } = useAnime();
  const [query, setQuery] = useState("");

  const filteredAnime = animeList?.filter((anime) =>
    anime.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="bg-[#0F172A] min-h-screen text-white">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between bg-[#1E293B] p-4">
        <h1 className="text-green-400 text-2xl font-bold">
          Browse The AnimeHouse!
        </h1>

        {/* Search Bar */}
        <div className="relative ml-auto">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="p-2 border rounded w-64 bg-[#0F172A] text-white placeholder-gray-400 border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
      </div>
      <div className="flex p-6 space-x-6">
        {/* Left Section - Anime List */}
        <div className="w-2/3 p-6 bg-[#1E293B] rounded-2xl">
          {/* <h2 className="text-2xl font-bold mb-4 text-green-400">
            Welcome to animehouse.com!
          </h2> */}
          <div className="grid grid-cols-1 gap-6">
            {filteredAnime?.map((anime) => (
              <div key={anime.id} className="bg-[#0F172A] p-4 rounded-xl border border-gray-700">
                <AnimeCard anime={anime} />
                {anime.description && (
                  <p className="text-gray-300 mt-2">{anime.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Most Rated */}
        <div className="w-1/3 bg-[#1E293B] p-6 rounded-2xl">
          <h2 className="text-xl font-bold mb-4 text-green-400 text-center">Most Rated</h2>
          <ol className="space-y-4">
            {animeList
              ?.sort((a, b) => b.rating - a.rating)
              .slice(0, 3)
              .map((anime, index) => (
                <li key={anime.id} className="flex items-center gap-4 bg-[#0F172A] p-3 rounded-xl border border-gray-700">
                  <span className="text-3xl font-extrabold text-white">{index + 1}.</span>
                  <img src={anime.image} alt={anime.title} className="w-16 h-24 rounded-md" />
                  <div className="flex-1">
                    <p className="text-lg font-semibold text-white">{anime.title}</p>
                    <p className="text-yellow-300">{anime.rating} ⭐</p>
                  </div>
                  <button className="bg-green-500 hover:bg-green-600 px-4 py-1 rounded text-sm text-white transition-all duration-200">
                    Label
                  </button>
                </li>
              ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
