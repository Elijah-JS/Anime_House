function RatingStars({ rating }) {
    const maxStars = 5;

    return (
      <div className="flex text-lg">
        {[...Array(maxStars)].map((_, index) => (
          <span key={index} className={index < rating ? "text-amber-400" : "text-gray-500"}>
            ★
          </span>
        ))}
      </div>
    );
  }

  export default RatingStars;
