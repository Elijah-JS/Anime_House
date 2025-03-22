import { createContext, useContext, useState, useEffect } from "react";
import {
  fetchAnimeList,
  fetchAnimeDetails,
  fetchAnimeReviews,
} from "../services/api";

const AnimeContext = createContext();

export function AnimeProvider({ children }) {
  const [animeList, setAnimeList] = useState([]);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadAnime() {
      try {
        const data = await fetchAnimeList();
        setAnimeList(data);
      } catch (err) {
        setError("Error fetching anime list.");
      }
    }
    loadAnime();
  }, []);

  const getAnimeDetails = async (id) => {
    try {
      const data = await fetchAnimeDetails(id);
      setSelectedAnime(data);
    } catch (err) {
      setError("Error fetching anime details.");
    }
  };

  const getAnimeReviews = async (animeId) => {
    try {
      const data = await fetchAnimeReviews(animeId);
      setReviews(data);
    } catch (err) {
      setError("Error fetching reviews.");
    }
  };

  return (
    <AnimeContext.Provider
      value={{
        animeList,
        selectedAnime,
        reviews,
        getAnimeDetails,
        getAnimeReviews,
        error,
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
}

export function useAnime() {
  return useContext(AnimeContext);
}