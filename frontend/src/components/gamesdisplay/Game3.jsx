import { Link } from "react-router-dom";

export default function Game3() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="game3 reduced">
      <div className="game-button">
        <Link to="tetris">
          <button onClick={handleScrollToTop} type="button">
            START
          </button>
        </Link>
      </div>
    </div>
  );
}
