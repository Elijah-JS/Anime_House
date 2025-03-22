import { useMockAnime as useAnime } from "../context/MockAnimeContext";
import AnimeCard from "../components/AnimeCard";

function Favorites() {
  const { favorites } = useAnime();

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <div className="text-center py-10">
        <h1 className="text-5xl font-extrabold mb-3 text-emerald-400">💖 My Favorite Anime</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Here are the anime you've saved as your favorites! Revisit your top picks anytime.
        </p>
      </div>

      {/* Favorites Section */}
      <div className="mt-10">
        <h2 className="text-3xl font-bold mb-4">⭐ Your Favorites</h2>
        {favorites.length === 0 ? (
          <p className="text-gray-400 text-center">No favorites yet. Start adding some anime to your list!</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {favorites.map((anime) => (
              <AnimeCard key={anime.id} anime={anime} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorites;