import { Link } from "react-router-dom";

export default function Game3() {
  return (
    <div className="game3 reduced">
      <div className="game-button">
        <Link to="tetris">
          <button type="button">START</button>
        </Link>
      </div>
    </div>
  );
}
