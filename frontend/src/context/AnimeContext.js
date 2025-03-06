import { createContext, useContext, useState, useEffect } from "react";
import { 
  fetchAnimeList, 
  fetchAnimeDetails, 
  fetchUserFavorites, 
  addToFavorites, 
  removeFromFavorites, 
  updateAnimeRating  // ✅ Import the missing function
} from "../services/api";

const AnimeContext = createContext();

export function AnimeProvider({ children }) {
  const [animeList, setAnimeList] = useState([]);  // Stores all anime
  const [favorites, setFavorites] = useState([]);  // Stores user favorites
  const [selectedAnime, setSelectedAnime] = useState(null);  // Stores anime details
  const [error, setError] = useState(null);  // Stores errors if any API call fails

  // Fetch all anime (Mock Data for now)
  useEffect(() => {
    async function getAnime() {
      try {
        const data = await fetchAnimeList(); // Calls mock API
        setAnimeList(data);
      } catch (err) {
        setError("Failed to fetch anime list.");
      }
    }
    getAnime();
  }, []);

  // Fetch anime details by ID
  const getAnimeDetails = async (id) => {
    try {
      const data = await fetchAnimeDetails(id);
      setSelectedAnime(data);
    } catch (err) {
      setError("Failed to fetch anime details.");
    }
  };

  // Fetch user favorites
  const getUserFavorites = async () => {
    try {
      const data = await fetchUserFavorites();
      setFavorites(data);
    } catch (err) {
      setError("Failed to fetch user favorites.");
    }
  };

  // Add to favorites
  const handleAddToFavorites = async (anime) => {
    try {
      const updatedFavorites = await addToFavorites(anime);
      setFavorites(updatedFavorites);
    } catch (err) {
      setError("Failed to add to favorites.");
    }
  };

  // Remove from favorites
  const handleRemoveFromFavorites = async (id) => {
    try {
      const updatedFavorites = await removeFromFavorites(id);
      setFavorites(updatedFavorites);
    } catch (err) {
      setError("Failed to remove from favorites.");
    }
  };

  // Function to update anime rating
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
    <AnimeContext.Provider value={{
      animeList,
      favorites,
      selectedAnime,
      error,
      getAnimeDetails,
      getUserFavorites,
      handleAddToFavorites,
      handleRemoveFromFavorites,
      updateRating  // ✅ Now available in context
    }}>
      {children}
    </AnimeContext.Provider>
  );
}

// Custom Hook to use AnimeContext
export function useAnime() {
  return useContext(AnimeContext);
}
