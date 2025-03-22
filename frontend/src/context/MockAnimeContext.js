import { createContext, useContext, useState, useEffect } from "react";
import { 
  fetchAnimeList, 
  fetchAnimeDetails, 
  fetchUserFavorites, 
  addToFavorites, 
  removeFromFavorites, 
  updateAnimeRating  
} from "../services/mockapi";

const MockAnimeContext = createContext();

export function MockAnimeProvider({ children }) {  // ✅ Clear, descriptive name
  const [animeList, setAnimeList] = useState([]);  
  const [favorites, setFavorites] = useState([]);  
  const [selectedAnime, setSelectedAnime] = useState(null);  
  const [error, setError] = useState(null);  

  useEffect(() => {
    async function getAnime() {
      try {
        const data = await fetchAnimeList(); 
        setAnimeList(data);
      } catch (err) {
        setError("Failed to fetch anime list.");
      }
    }
    getAnime();
  }, []);

  const getAnimeDetails = async (id) => {
    try {
      const data = await fetchAnimeDetails(id);
      setSelectedAnime(data);
    } catch (err) {
      setError("Failed to fetch anime details.");
    }
  };

  const getUserFavorites = async () => {
    try {
      const data = await fetchUserFavorites();
      setFavorites(data);
    } catch (err) {
      setError("Failed to fetch user favorites.");
    }
  };

  const handleAddToFavorites = async (anime) => {
    try {
      const updatedFavorites = await addToFavorites(anime);
      setFavorites(updatedFavorites);
    } catch (err) {
      setError("Failed to add to favorites.");
    }
  };

  const handleRemoveFromFavorites = async (id) => {
    try {
      const updatedFavorites = await removeFromFavorites(id);
      setFavorites(updatedFavorites);
    } catch (err) {
      setError("Failed to remove from favorites.");
    }
  };

  const updateRating = async (id, newRating) => {
    try {
      await updateAnimeRating(id, newRating);
      setAnimeList((prev) =>
        prev.map((anime) => 
          anime.id === id ? { ...anime, rating: newRating } : anime
        )
      );
    } catch (err) {
      setError("Failed to update rating.");
    }
  };

  return (
    <MockAnimeContext.Provider value={{
      animeList,
      favorites,
      selectedAnime,
      error,
      getAnimeDetails,
      getUserFavorites,
      handleAddToFavorites,
      handleRemoveFromFavorites,
      updateRating 
    }}>
      {children}
    </MockAnimeContext.Provider>
  );
}

// Custom Hook to use the MockAnimeContext
export function useMockAnime() {
  return useContext(MockAnimeContext);
}
