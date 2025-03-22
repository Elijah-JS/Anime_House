import ramenBowl from "../assets/ball.png";
import ramenBowlEmpty from "../assets/emptyball.png";

function RatingStars({ rating }) {
  const maxStars = 5;

  return (
    <div className="flex">
      {[...Array(maxStars)].map((_, index) => (
        <img
          key={index}
          src={index < rating ? ramenBowl : ramenBowlEmpty}
          alt={`Ramen bowl ${index + 1}`}
          className="w-12 h-12 mx-1"
        />
      ))}
    </div>
  );
}

export default RatingStars;