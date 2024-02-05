import { Link } from "react-router-dom";
import handleScrollToTop from "../../services/scroll";

export default function Game2() {
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
