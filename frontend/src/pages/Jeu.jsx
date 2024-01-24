import Pacman from "react-pacman";
import { useState } from "react";
import "../styles/pacman.scss";
import borne from "../assets/images/borne_game.png";

function Jeu() {
  /* PREVENT DEFAULT SCROLL BY KEY */
  document.addEventListener("keydown", function (e) {
    if (
      e.key === "ArrowUp" ||
      e.key === "ArrowDown" ||
      e.key === "ArrowLeft" ||
      e.key === "ArrowRight"
    ) {
      e.preventDefault();
    }
  });

  /* LAUNCH */
  const [start, setStart] = useState(false);

  /* SCORES */

  return (
    <div className="pacman-container">
      <img src={borne} alt="" className="borne-arcade" />
      <div className="game">{start && <Pacman />}</div>
      {!start && (
        <button
          type="button"
          className="pacman-play"
          onClick={() => setStart(!start)}
        >
          PLAY
        </button>
      )}
    </div>
  );
}

export default Jeu;
