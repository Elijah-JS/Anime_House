import { useParams } from "react-router-dom";
import { useAnime } from "../context/AnimeContext";
import RatingStars from "../components/RatingStars";
import RatingSystem from "../components/RatingSystem";

function AnimeDetails() {
  const { id } = useParams();
  const { animeList, updateRating } = useAnime();

  const anime = animeList.find((a) => a.id === id);

  const handleUserRating = (newRating) => {
    updateRating(anime.id, newRating);
  };

  if (!anime) {
    return <p className="text-gray-400 text-center mt-10">Anime not found.</p>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-950 text-white p-6">
      <h1 className="text-4xl font-extrabold text-blue-400">{anime.title}</h1>
      <img src={anime.image} alt={anime.title} className="w-64 h-96 object-cover rounded-lg mt-4 shadow-md border border-blue-500" />

      <p className="text-gray-300 text-center mt-4 max-w-2xl">{anime.synopsis}</p>

      {/* ✅ Show Anime's Current Rating */}
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold text-purple-400">Current Rating:</h3>
        <RatingStars rating={anime.rating} />
      </div>

      {/* ✅ Let Users Rate the Anime */}
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold text-red-400">Rate this Anime:</h3>
        <RatingSystem onRate={handleUserRating} />
      </div>
    </div>
  );
}

export default AnimeDetails;
