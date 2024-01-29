import { Link } from "react-router-dom";

export default function Game2() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="game2 reduced">
      <div className="game-button">
        <Link to="snake">
          <button onClick={handleScrollToTop} type="button">
            START
          </button>
        </Link>
      </div>
    </div>
  );
}
