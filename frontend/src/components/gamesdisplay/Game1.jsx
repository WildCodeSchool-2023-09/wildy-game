import { Link } from "react-router-dom";

export default function Game1() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="game1 reduced">
      <div className="game-button">
        <Link to="pacman">
          <button onClick={handleScrollToTop} type="button">
            START
          </button>
        </Link>
      </div>
    </div>
  );
}
