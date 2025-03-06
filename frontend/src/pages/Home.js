import { useAnime } from "../context/AnimeContext";
import AnimeCard from "../components/AnimeCard";
import { Link } from "react-router-dom";

function Home() {
  const { animeList } = useAnime();

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <div className="text-center py-10">
        <h1 className="text-5xl font-extrabold mb-3 text-emerald-400">Welcome to AnimeHouse</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Explore the world of anime! Read reviews, rate your favorites, and join a community of anime lovers.
        </p>
        <Link to="/search">
          <button className="mt-5 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg text-lg font-semibold transition-all">
            Discover Anime
          </button>
        </Link>
      </div>

      {/* Featured Anime Section */}
      <div className="mt-10">
        <h2 className="text-3xl font-bold mb-4">🔥 Featured Anime</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {animeList.slice(0, 3).map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      </div>

      {/* Trending Anime Section */}
      <div className="mt-14">
        <h2 className="text-3xl font-bold mb-4">🚀 Trending Now</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {animeList.slice(3, 8).map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="mt-16 text-center py-10 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-emerald-400">Join AnimeHouse Today!</h2>
        <p className="text-gray-300 mt-2">Create an account to review and favorite your top anime picks.</p>
        <Link to="/register">
          <button className="mt-4 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg text-lg font-semibold transition-all">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
