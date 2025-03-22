import { useState, useEffect } from "react";

function RatingSystem({ onRate, initialRating = 0 }) {
  const [rating, setRating] = useState(initialRating);
  const [hovered, setHovered] = useState(null); // Optional: to highlight bowls on hover

  useEffect(() => {
    setRating(initialRating);
  }, [initialRating]);

  const handleRate = (newRating) => {
    setRating(newRating);
    if (onRate) {
      onRate(newRating);
    }
  };

  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => {
        const current = index + 1;
        const filled = hovered !== null ? current <= hovered : current <= rating;

        return (
          <img
            key={index}
            src={
              filled
                ? "/assets/ramenBowl.png"
                : "/assets/ramenBowlEmpty.png"
            }
            alt={`Star ${current}`}
            className="w-12 h-12 sm:w-16 sm:h-16 mx-2 cursor-pointer transition-transform hover:scale-110"
            onClick={() => handleRate(current)}
            onMouseEnter={() => setHovered(current)}
            onMouseLeave={() => setHovered(null)}
          />
        );
      })}
    </div>
  );
}

export default RatingSystem;
