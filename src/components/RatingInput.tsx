import React, { useEffect, useState } from "react";

// Define the maximum number of stars
const MAX_RATING = 5;

// --- Props Definition (Updated) ---
interface StarRatingProps {
  initialValue?: number;
  onUpdateRating?: (rating: number) => void;
  readonly?: boolean; // Consume the readOnly prop
}

const StarIcon = ({
  fill,
  isInteractive,
}: {
  fill: boolean;
  isInteractive: boolean;
}) => (
  // SVG Star Icon with dynamic fill color and cursor style
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className={`w-6 h-6 transition-colors ${
      // Apply cursor style based on interactivity
      isInteractive ? "cursor-pointer" : "cursor-default"
    } ${
      // Apply fill color
      fill
        ? "text-yellow-400 fill-yellow-400"
        : "text-gray-300 fill-transparent"
    }`}
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.225 3.791a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.6l-4.755-2.885a.562.562 0 0 0-.549 0l-4.755 2.885a.563.563 0 0 1-.84-.6l1.285-5.385a.562.562 0 0 0-.182-.557L3.18 10.44a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345l2.125-5.111Z"
    />
  </svg>
);

export const RatingInput: React.FC<StarRatingProps> = ({
  initialValue = 0,
  onUpdateRating,
  readonly = false, 
}) => {
  const [rating, setRating] = useState(initialValue);
  const [hover, setHover] = useState(0);
  const isInteractive = readonly ? false : true;
  const displayRating = isInteractive ? hover || rating : initialValue;

  const handleClick = (newRating: number) => {
    if (!isInteractive) return;
    setRating(newRating);
    if (onUpdateRating) {
      onUpdateRating(newRating);
    }
  };

  useEffect(() => {
    setRating(initialValue);
  }, [initialValue]);

  const handleMouseEnter = (starValue: number) => {
    if (isInteractive) setHover(starValue);
  };

  const handleMouseLeave = () => {
    if (isInteractive) setHover(0);
  };

  return (
    <div className="flex items-center space-x-0.5">
      {Array.from({ length: MAX_RATING }, (_, index) => {
        const starValue = index + 1;

        return (
          <div
            key={index}
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => handleMouseEnter(starValue)}
            onMouseLeave={handleMouseLeave}
            className={!isInteractive ? "pointer-events-none" : ""}
            role={isInteractive ? "radio" : "img"}
            aria-checked={isInteractive ? starValue === rating : undefined}
            aria-label={`${starValue} Stars`}
            tabIndex={isInteractive ? 0 : -1} 
          >
            <StarIcon
              fill={starValue <= displayRating}
              isInteractive={isInteractive}
            />
          </div>
        );
      })}

      <span className="ml-2 text-lg font-semibold text-gray-700">
        ({displayRating} / {MAX_RATING})
      </span>
    </div>
  );
};

export default RatingInput;
