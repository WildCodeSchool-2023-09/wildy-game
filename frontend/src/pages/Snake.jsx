import { useState, useRef, useEffect } from "react";
import useInterval from "../components/useInterval";
import borne from "../assets/images/borne_arcade.png";
import "../styles/snake.scss";

const CANVAS_SIZE = [800, 800];
const SNAKE_START = [
  [8, 12],
  [8, 13],
];
const APPLE_START = [8, 3];
const SCALE = 40;
const SPEED = 100;
const DIRECTIONS = {
  38: [0, -1], // up
  40: [0, 1], // down
  37: [-1, 0], // left
  39: [1, 0], // right
};

function Snake() {
  const gameContainerRef = useRef();
  const canvasRef = useRef();
  const [snake, setSnake] = useState(SNAKE_START);
  const [apple, setApple] = useState(APPLE_START);
  const [dir, setDir] = useState([0, -1]);
  const [speed, setSpeed] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [start, setStart] = useState(false);

  const endGame = () => {
    setSpeed(null);
    setGameOver(true);
    setStart(false);
  };

  const moveSnake = ({ keyCode }) =>
    keyCode >= 37 && keyCode <= 40 && setDir(DIRECTIONS[keyCode]);

  const createApple = () =>
    apple.map((_a, i) => Math.floor(Math.random() * (CANVAS_SIZE[i] / SCALE)));

  const checkCollision = (piece, snk = snake) => {
    if (
      piece[0] * SCALE >= CANVAS_SIZE[0] ||
      piece[0] < 0 ||
      piece[1] * SCALE >= CANVAS_SIZE[1] ||
      piece[1] < 0
    )
      return true;

    for (const segment of snk) {
      if (piece[0] === segment[0] && piece[1] === segment[1]) return true;
    }
    return false;
  };

  const checkAppleCollision = (newSnake) => {
    if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
      let newApple = createApple();
      while (checkCollision(newApple, newSnake)) {
        newApple = createApple();
      }
      setApple(newApple);
      setScore((prev) => prev + 1);
      return true;
    }
    return false;
  };

  const gameLoop = () => {
    const snakeCopy = JSON.parse(JSON.stringify(snake));
    const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]];
    snakeCopy.unshift(newSnakeHead);
    if (checkCollision(newSnakeHead)) endGame();
    if (!checkAppleCollision(snakeCopy)) snakeCopy.pop();
    setSnake(snakeCopy);
  };

  useInterval(() => {
    if (start) {
      gameLoop();
    }
  }, speed);

  const startGame = () => {
    gameContainerRef.current.focus();
    setSnake(SNAKE_START);
    setApple(APPLE_START);
    setDir([0, -1]);
    setSpeed(SPEED);
    setGameOver(false);
    setScore(0);
    setStart(true);
  };

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    context.fillStyle = "pink";
    snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1));
    context.fillStyle = "lightblue";
    context.fillRect(apple[0], apple[1], 1, 1);
  }, [snake, apple, gameOver]);

  useEffect(() => {
    if (!gameOver) {
      if (score > 35) {
        setSpeed(30);
      } else if (score > 25) {
        setSpeed(50);
      } else if (score > 15) {
        setSpeed(80);
      } else {
        setSpeed(SPEED);
      }
    }
  }, [score, gameOver]);

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
    <div className="game-container ">
      <img src={borne} alt="" className="borne-arcade" />
      <div
        className="snake-wraper"
        role="button"
        tabIndex="0"
        onKeyDown={(e) => moveSnake(e)}
        ref={gameContainerRef}
      >
        <canvas
          className="canvas-snake"
          style={{ border: "1px solid black" }}
          ref={canvasRef}
          width={`${CANVAS_SIZE[0]}px`}
          height={`${CANVAS_SIZE[1]}px`}
        />
        <div className="score">Score: {score}</div>
        {gameOver && (
          <button type="button" className="game-over" onClick={startGame}>
            GAME OVER RETRY?
          </button>
        )}
        <button type="button" className="play" onClick={startGame}>
          PLAY
        </button>
      </div>
    </div>
  );
}

export default Snake;
