import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAnime } from "../context/AnimeContext";

function AnimeDetails() {
  const { id } = useParams();
  const { selectedAnime, getAnimeDetails } = useAnime();

  useEffect(() => {
    getAnimeDetails(id);
  }, [id]);

  if (!selectedAnime) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{selectedAnime.title}</h1>
      <img src={selectedAnime.image} alt={selectedAnime.title} className="w-full h-64 object-cover rounded" />
      <p className="mt-2">{selectedAnime.synopsis}</p>
      <p className="mt-2 text-gray-600">Release Date: {selectedAnime.releaseDate}</p>
    </div>
  );
}

export default AnimeDetails;



