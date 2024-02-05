import { Link } from "react-router-dom";
import handleScrollToTop from "../../services/scroll";

export default function Game3() {
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
