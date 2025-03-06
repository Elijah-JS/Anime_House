import { useAnime } from "../context/AnimeContext";
import AnimeCard from "../components/AnimeCard";

function Favorites() {
  const { favorites } = useAnime();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">My Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {favorites.map((anime) => <AnimeCard key={anime.id} anime={anime} />)}
        </div>
      )}
    </div>
  );
}

export default Favorites;
