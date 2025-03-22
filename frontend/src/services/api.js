const BASE_URL = "http://localhost:5000/api"; // Backend API URL

// Fetch the anime list from the backend
export const fetchAnimeList = async () => {
  try {
    const response = await fetch(`${BASE_URL}/anime`);
    if (!response.ok) throw new Error("Failed to fetch anime list");

    const data = await response.json();

    return data.map((anime) => ({
      id: anime.AnimeID,
      title: anime.Title,
      image: anime.PhotoUrl, // Make sure backend sends correct URL
      synopsis: anime.Description,
      releaseDate: anime.ReleaseDate,
      episodes: anime.Episodes,
      rating: anime.AverageRating || 0,
    }));
  } catch (error) {
    console.error("Error fetching anime list:", error);
    return [];
  }
};

//  Fetch anime details by ID
export const fetchAnimeDetails = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/anime/${id}`);
    if (!response.ok) throw new Error("Failed to fetch anime details");

    const anime = await response.json();

    return {
      id: anime.AnimeID,
      title: anime.Title,
      image: anime.PhotoUrl,
      synopsis: anime.Description,
      releaseDate: anime.ReleaseDate,
      episodes: anime.Episodes,
      rating: anime.AverageRating || 0,
    };
  } catch (error) {
    console.error(`Error fetching anime details for ID ${id}:`, error);
    return null;
  }
};

// ✅ Fetch reviews for a specific anime
export const fetchAnimeReviews = async (animeId) => {
  try {
    const response = await fetch(`${BASE_URL}/reviews/${animeId}`);
    if (!response.ok) throw new Error("Failed to fetch reviews");

    const data = await response.json();

    return data.map((review) => ({
      reviewId: review.review_id,
      userId: review.user_id,
      username: review.username, // Assuming backend joins this
      animeId: review.AnimeID,
      rating: review.rating,
      reviewText: review.review_text,
      createdAt: review.created_at,
    }));
  } catch (error) {
    console.error(`Error fetching reviews for anime ID ${animeId}:`, error);
    return [];
  }
};
