import { useState } from "react";
import "./style.css";

function App() {
  return <StarRating numStars={10} />;
}

function StarRating({ numStars }) {
  const [numOfStar, setNumOfStar] = useState(0);
  const [lock, setLock] = useState(false);

  function handleOnClick(i) {
    setNumOfStar(i + 1);
    setLock((lock) => !lock);
  }

  return (
    <section>
      {Array.from(Array(numStars).keys()).map((i) => (
        <Star
          onMouseEnter={() => !lock && setNumOfStar(i + 1)}
          onMouseLeave={() => !lock && setNumOfStar(0)}
          fill={i + 1 <= numOfStar ? "gold" : "white"}
          onClick={() => handleOnClick(i)}
          key={i}
        />
      ))}
      <span>{numOfStar}</span>
    </section>
  );
}

function Star({ onMouseEnter, onMouseLeave, fill, onClick }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="32"
      height="32"
      fill={fill}
      stroke="gold"
      className="star"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
    </svg>
  );
}

export default App;
