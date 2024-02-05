import { Link } from "react-router-dom";

import handleScrollToTop from "../../services/scroll";

export default function Game1() {
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
