import Tetris from "react-tetris";
import { useState } from "react";
import "../styles/tetris.scss";
import borne from "../assets/images/borne_arcade.png";

function TetrisGame() {
  const [start, setStart] = useState(false);
  document.addEventListener("keydown", function (e) {
    if (
      e.key === "ArrowUp" ||
      e.key === "ArrowDown" ||
      e.key === "ArrowLeft" ||
      e.key === "ArrowRight" ||
      e.key === " "
    ) {
      e.preventDefault();
    }
  });

  return (
    <div className="game-container">
      <img src={borne} alt="" className="borne-arcade" />

      <div className="game-wrapper">
        {start && (
          <Tetris
            keyboardControls={{
              // Default values shown here. These will be used if no
              // `keyboardControls` prop is provided.
              down: "MOVE_DOWN",
              left: "MOVE_LEFT",
              right: "MOVE_RIGHT",
              space: "HARD_DROP",
              z: "FLIP_COUNTERCLOCKWISE",
              x: "FLIP_CLOCKWISE",
              up: "FLIP_CLOCKWISE",
              p: "TOGGLE_PAUSE",
              c: "HOLD",
              shift: "HOLD",
            }}
          >
            {({
              HeldPiece,
              Gameboard,
              PieceQueue,
              points,
              linesCleared,
              state,
              controller,
            }) => (
              <>
                <div className="scores">
                  <p>Points: {points}</p>
                  <p>Lines Cleared: {linesCleared}</p>
                </div>
                <div className="tetris-board">
                  <HeldPiece />
                  <Gameboard />
                  <PieceQueue />
                </div>
                {state === "LOST" && (
                  <div className="game-over">
                    <h2>Game Over</h2>
                    <button
                      type="button"
                      className="new-game"
                      onClick={controller.restart}
                    >
                      New game
                    </button>
                  </div>
                )}
              </>
            )}
          </Tetris>
        )}
      </div>

      {!start && (
        <button
          type="button"
          className="tetris-play"
          onClick={() => setStart(!start)}
        >
          PLAY
        </button>
      )}
    </div>
  );
}

export default TetrisGame;
