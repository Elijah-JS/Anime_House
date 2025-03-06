import { Link } from "react-router-dom";
import RatingStars from "./RatingStars";

function AnimeCard({ anime }) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
      {/* Image Section with Hover Darkening Effect */}
      <div className="relative group">
        <img
          src={anime.image}
          alt={anime.title}
          className="w-full h-48 object-cover rounded-t-lg transition-opacity"
        />
        {/* Dark overlay only on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity"></div>
      </div>

      {/* Content Section (Stays Clear) */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-cyan-400">{anime.title}</h3>
        <RatingStars rating={anime.rating}  />
        <p className="text-sm text-gray-300">{anime.synopsis.substring(0, 100)}...</p>
        <Link
          to={`/anime/${anime.id}`}
          className="text-indigo-400 hover:text-blue-500 mt-2 block font-semibold"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default AnimeCard;

