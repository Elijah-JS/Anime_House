import React, { useEffect, useState } from 'react';
import NarutoImage from "../assets/Naruto.jpg"
import AttackOnTitanImage from "../assets/Attack.jpg"
import { useParams } from 'react-router-dom';

const AnimeDetailsPage = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    const fetchAnimeDetails = () => {
      const animeData = {
        1: {
          title: 'Naruto',
          description: 'A story about a young ninja named Naruto Uzumaki.',
          image_url: NarutoImage,
        },
        2: {
          title: 'Attack on Titan',
          description: 'Humanity fights back against giant humanoid creatures called Titans.',
          image_url: AttackOnTitanImage,
        },
      };
      setAnime(animeData[id]);
    };

    fetchAnimeDetails();
  }, [id]);

  if (!anime) {
    return <div className="text-center mt-8 text-xl">Loading...</div>;
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-4">{anime.title}</h1>
        <img src={anime.image_url} alt={anime.title} className="w-full h-64 object-cover rounded-md mb-4" />
        <p className="text-lg text-gray-700">{anime.description}</p>
      </div>
    </div>
  );
};

export default AnimeDetailsPage;


