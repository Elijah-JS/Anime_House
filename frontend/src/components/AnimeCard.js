import { Link } from "react-router-dom";

function AnimeCard({ anime }) {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg bg-gray-800 hover:shadow-xl transition-shadow duration-300">
      {/* Anime Image with Overlay */}
      <div className="relative">
        <img 
          src={anime.image} 
          alt={anime.title} 
          className="w-full h-56 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-lg font-semibold">
          Click to View Details
        </div>
      </div>

      {/* Anime Info */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-emerald-400">{anime.title}</h3>
        <p className="text-sm text-gray-300 mt-2">{anime.synopsis.substring(0, 100)}...</p>

        {/* Details Button */}
        <Link 
          to={`/anime/${anime.id}`} 
          className="mt-3 inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default AnimeCard;
