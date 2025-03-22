// Sample mock anime data
const mockAnimeList = [
    { id: "1", title: "Attack on Titan", image: "/images/aot.jpg", synopsis: "Humanity's last stand against titans.", releaseDate: "2013-04-06", rating: 5 },
    { id: "2", title: "Naruto", image: "/images/naruto.jpg", synopsis: "A young ninja's journey to becoming Hokage.", releaseDate: "2002-10-03", rating: 4 },
    { id: "3", title: "Demon Slayer", image: "/images/demon_slayer.jpg", synopsis: "A boy fights demons to save his sister.", releaseDate: "2019-04-06", rating: 5 }
  ];
  
  // Function to fetch the anime list (mocked)
  export const fetchAnimeList = async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockAnimeList), 500); // Simulates API delay
    });
  };
  
  // Function to fetch anime details by ID (mocked)
  export const fetchAnimeDetails = async (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const anime = mockAnimeList.find(a => a.id === id);
        resolve(anime || null);
      }, 500);
    });
  };
  
  // Function to fetch user favorites (mocked)
  const mockFavorites = [];
  export const fetchUserFavorites = async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockFavorites), 500);
    });
  };
  
  // Function to add anime to favorites (mocked)
  export const addToFavorites = async (anime) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        mockFavorites.push(anime);
        resolve([...mockFavorites]); // Returns a new array to avoid mutation issues
      }, 500);
    });
  };
  
  // Function to remove anime from favorites (mocked)
  export const removeFromFavorites = async (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = mockFavorites.findIndex(anime => anime.id === id);
        if (index !== -1) mockFavorites.splice(index, 1);
        resolve([...mockFavorites]); // Returns a new array to avoid mutation issues
      }, 500);
    });
  };
  
  // Function to update anime rating (mocked)
  export const updateAnimeRating = async (id, newRating) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const anime = mockAnimeList.find(a => a.id === id);
        if (anime) {
          anime.rating = newRating;
        }
        resolve(anime ? { success: true, id, newRating } : { success: false });
      }, 500);
    });
  };
  
  // Function to fetch anime reviews (mocked)
  const mockReviews = {
    "1": [{ user: "John", review: "Amazing!", rating: 5 }],
    "2": [{ user: "Jane", review: "Classic!", rating: 4 }]
  };
  export const fetchAnimeReviews = async (animeId) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockReviews[animeId] || []), 500);
    });
  };
  
  // Function to submit a review (mocked)
  export const submitReview = async (animeId, reviewText, rating) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (!mockReviews[animeId]) mockReviews[animeId] = [];
        mockReviews[animeId].push({ user: "Guest", review: reviewText, rating });
        resolve(mockReviews[animeId]);
      }, 500);
    });
  };