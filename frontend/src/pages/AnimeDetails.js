import { useParams } from "react-router-dom";
import { useAnime } from "../context/AnimeContext";
import { useAuth } from "../context/AuthContext";
import RatingStars from "../components/RatingStars";
import RatingSystem from "../components/RatingSystem";
import { useState } from "react";

function AnimeDetails() {
  const { id } = useParams();
  const { animeList, updateRating } = useAnime();
  const { user } = useAuth(); // Access the user object from AuthContext
  const [comments, setComments] = useState([]); // Local state for comments
  const [newComment, setNewComment] = useState(""); // Local state for new comment

  const anime = animeList.find((a) => a.id === id);

  const handleUserRating = (newRating) => {
    updateRating(anime.id, newRating);
  };

  const handleAddComment = () => {
    if (newComment.trim() === "") return; // Prevent empty comments
    const comment = { user: user.email, text: newComment }; // Add user email to comment
    setComments((prev) => [...prev, comment]); // Add comment to local state
    setNewComment(""); // Clear the input field
  };

  if (!anime) {
    return <p className="text-gray-400 text-center mt-10">Anime not found.</p>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-950 text-white p-6">
      <h1 className="text-4xl font-extrabold text-blue-400">{anime.title}</h1>
      <img
        src={anime.image}
        alt={anime.title}
        className="w-64 h-96 object-cover rounded-lg mt-4 shadow-md border border-blue-500"
      />

      <p className="text-gray-300 text-center mt-4 max-w-2xl">{anime.synopsis}</p>

      {/* Always show current rating */}
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold text-purple-400">Current Rating:</h3>
        <RatingStars rating={anime.rating} />
      </div>

      {/* Only show interactive rating if user is signed in */}
      {user ? (
        <div className="mt-4 text-center">
          <h3 className="text-lg font-semibold text-purple-400">Rate this Anime:</h3>
          <RatingSystem onRate={handleUserRating} initialRating={anime.rating} />
          <p className="text-sm text-gray-400 mt-2">
            Your vote helps shape the average!
          </p>
        </div>
      ) : (
        <p className="mt-4 text-gray-400 text-center">Sign in to rate this anime.</p>
      )}



      {/* Comments Section */}
      <div className="mt-8 w-full max-w-2xl">
        <h3 className="text-2xl font-bold text-green-400 mb-4">Comments:</h3>

        {/* Display Comments */}
        <div className="space-y-4">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md">
                <p className="text-sm text-gray-400">{comment.user}</p>
                <p className="text-white">{comment.text}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No comments yet. Be the first to comment!</p>
          )}
        </div>

        {/* Add Comment (Only if Signed In) */}
        {user ? (
          <div className="mt-4">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write a comment..."
              className="w-full p-2 border rounded bg-gray-800 text-white"
            />
            <button
              onClick={handleAddComment}
              className="mt-2 bg-green-500 text-white py-2 px-4 rounded"
            >
              Publish Comment
            </button>
          </div>
        ) : (
          <p className="mt-4 text-gray-400">Sign in to write a comment.</p>
        )}
      </div>
    </div>
  );
}

export default AnimeDetails;
