import { createContext, useContext, useState, useEffect } from "react";
import { fetchAnimeList, fetchAnimeDetails, fetchUserFavorites, addToFavorites, removeFromFavorites } from "../services/api";

const AnimeContext = createContext();

export function AnimeProvider({ children }) {
  const [animeList, setAnimeList] = useState([]);  // Stores all anime
  const [favorites, setFavorites] = useState([]);  // Stores user favorites
  const [selectedAnime, setSelectedAnime] = useState(null);  // Stores anime details

  // Fetch all anime (Mock Data for now)
  useEffect(() => {
    async function getAnime() {
      const data = await fetchAnimeList(); // Calls mock API
      setAnimeList(data);
    }
    getAnime();
  }, []);

  // Fetch anime details by ID
  const getAnimeDetails = async (id) => {
    const data = await fetchAnimeDetails(id);
    setSelectedAnime(data);
  };

  // Fetch user favorites
  const getUserFavorites = async () => {
    const data = await fetchUserFavorites();
    setFavorites(data);
  };

  // Add to favorites
  const handleAddToFavorites = async (anime) => {
    const updatedFavorites = await addToFavorites(anime);
    setFavorites(updatedFavorites);
  };

  // Remove from favorites
  const handleRemoveFromFavorites = async (id) => {
    const updatedFavorites = await removeFromFavorites(id);
    setFavorites(updatedFavorites);
  };

  return (
    <AnimeContext.Provider value={{
      animeList,
      favorites,
      selectedAnime,
      getAnimeDetails,
      getUserFavorites,
      handleAddToFavorites,
      handleRemoveFromFavorites
    }}>
      {children}
    </AnimeContext.Provider>
  );
}

// Custom Hook to use AnimeContext
export function useAnime() {
  return useContext(AnimeContext);
}
