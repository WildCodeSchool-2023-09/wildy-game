import { Link } from "react-router-dom";

export default function Game1() {
  return (
    <div className="game3 reduced">
      <div className="game-button">
        <Link to="pacman">
          <button type="button">START</button>
        </Link>
      </div>
    </div>
  );
}
