import { Link } from "react-router-dom";
import RatingStars from "./RatingStars";

function AnimeCard({ anime }) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
      {/* Image Section with Hover Darkening Effect */}
      <div className="relative group">
        <img
          src={anime.image}
          alt={anime.title}
          className="w-full h-56 object-cover rounded-t-lg transition-all duration-300"
        />
        {/* Dark overlay only on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
      </div>

      {/* Content Section (Aligned with Homepage Aesthetic) */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-emerald-400">{anime.title}</h3>
        <RatingStars rating={anime.rating} />
        <p className="text-sm text-gray-300 mt-2">{anime.synopsis.substring(0, 100)}...</p>
        <Link
          to={`/anime/${anime.id}`}
          className="text-cyan-400 hover:text-emerald-500 mt-3 inline-block font-semibold transition-all"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}

export default AnimeCard;

