import React from 'react';
import NarutoImage from "../assets/Naruto.jpg"
import AttackOnTitanImage from "../assets/Attack.jpg"
import { Link } from 'react-router-dom';

const HomePage = () => {
  const animes = [
    { id: 1, title: 'Naruto', image_url: NarutoImage },
    { id: 2, title: 'Attack on Titan', image_url: AttackOnTitanImage },
  ];

  return (
    <div className="home-page p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-6">Featured Animes</h2>
      <div className="anime-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {animes.map((anime) => (
          <div key={anime.id} className="anime-card p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
            <Link to={`/anime/${anime.id}`} className="block text-center">
              <img src={anime.image_url} alt={anime.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold">{anime.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
