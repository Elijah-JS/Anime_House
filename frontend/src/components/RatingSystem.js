import { useState } from "react";

function RatingSystem({ onRate }) {
  const [rating, setRating] = useState(0);

  const handleRate = (newRating) => {
    setRating(newRating);
    if (onRate) {
      onRate(newRating); // Send rating to backend or parent component
    }
  };

  return (
    <div className="flex text-lg">
      {[...Array(5)].map((_, index) => (
        <button
          key={index}
          onClick={() => handleRate(index + 1)}
          className={`transition-all ${
            index < rating ? "text-emerald-400" : "text-gray-400 hover:text-emerald-300"
          }`}
        >
          ★
        </button>
      ))}
    </div>
  );
}

export default RatingSystem;
