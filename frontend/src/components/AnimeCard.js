import { Link } from "react-router-dom";

function AnimeCard({ anime }) {
  return (
    <div className="border p-4 rounded shadow-lg">
      <img src={anime.image} alt={anime.title} className="w-full h-48 object-cover rounded" />
      <h3 className="text-lg font-bold mt-2">{anime.title}</h3>
      <p className="text-sm text-gray-600">{anime.synopsis.substring(0, 100)}...</p>
      <Link to={`/anime/${anime.id}`} className="text-blue-500 mt-2 block">View Details</Link>
    </div>
  );
}

export default AnimeCard;
