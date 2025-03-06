import { useState } from "react";

function ReviewForm({ onSubmit }) {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(review, rating);
    setReview("");
    setRating(1);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-lg">
      <textarea 
        value={review} 
        onChange={(e) => setReview(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Write your review..."
      />
      <label className="block mt-2">
        Rating:
        <select value={rating} onChange={(e) => setRating(e.target.value)} className="ml-2">
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>{num} ⭐</option>
          ))}
        </select>
      </label>
      <button type="submit" className="bg-blue-500 px-3 py-1 rounded text-white mt-2">Submit</button>
    </form>
  );
}

export default ReviewForm;
