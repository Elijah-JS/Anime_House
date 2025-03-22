import ramenBowl from "../assets/ramenBowl.jpg";
import ramenBowlEmpty from "../assets/ramenBowlEmpty.png";

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
