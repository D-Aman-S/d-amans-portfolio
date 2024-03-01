/*eslint react/jsx-no-comment-textnodes: "off"*/

"use client";

import Link from "next/link";
import Image from "next/image";
import { KeyboardEvent, useEffect, useRef, useState } from "react";

const GRID_Y = 38;
const GRID_X = 21;
const INITIAL_DIRECTION: Direction = "UP"; // Initial direction of the snake

type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";

type Point = {
  x: number;
  y: number;
};

const defaultSnake: Point[] = [
  { x: 8, y: 12 },
  { x: 8, y: 13 },
  { x: 8, y: 14 },
  { x: 8, y: 15 },
  { x: 8, y: 16 },
  { x: 8, y: 17 },
  { x: 8, y: 18 },
  { x: 9, y: 18 },
  { x: 10, y: 18 },
  { x: 11, y: 18 },
  { x: 12, y: 18 },
  { x: 13, y: 18 },
  { x: 13, y: 19 },
  { x: 13, y: 20 },
  { x: 13, y: 21 },
  { x: 13, y: 22 },
  { x: 13, y: 23 },
  { x: 13, y: 24 },
];

const SnakeGame = () => {
  const [snake, setSnake] = useState<Point[]>(defaultSnake);
  const [food, setFood] = useState<Point>({ x: 8, y: 9 });
  const [direction, setDirection] = useState<Direction>(INITIAL_DIRECTION);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [gameWon, setGameWon] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0); //
  const [showCountDown, setShowCountDown] = useState<boolean>(false); // [1, 2, 3
  const gameContainerRef = useRef<HTMLDivElement>(null);
  function startgame() {
    setScore(0);
    setGameWon(false);
    setSnake(defaultSnake);
    generateFood();
    setDirection(INITIAL_DIRECTION);
    setGameOver(false);

    setGameStarted(true);
    if (gameStarted && gameContainerRef.current) {
      // Set focus to the game container when the game starts
      gameContainerRef.current.focus();
    }
  }
  const [time, setTime] = useState(3);

  const startCountdown = () => {
    setScore(0);
    setGameWon(false);
    setSnake(defaultSnake);
    generateFood();
    setDirection(INITIAL_DIRECTION);
    setTime(3);
    setShowCountDown(true);

    let count = 3;
    const countdownInterval = setInterval(() => {
      count -= 1;
      setTime(count);
      if (count === 0) {
        clearInterval(countdownInterval);
        setShowCountDown(false);
        startgame();
      }
    }, 1000);
  };

  useEffect(() => {
    if (gameStarted && gameContainerRef.current) {
      // Set focus to the game container when the game starts
      gameContainerRef.current.focus();
    }
  }, [gameStarted]);

  const moveSnake = (): void => {
    const newSnake = [...snake];
    const head = { ...newSnake[0] };

    switch (direction) {
      case "UP":
        head.y -= 1;
        break;
      case "DOWN":
        head.y += 1;
        break;
      case "LEFT":
        head.x -= 1;
        break;
      case "RIGHT":
        head.x += 1;
        break;
      default:
        break;
    }

    // Check if game over
    if (
      head.x < 0 ||
      head.x >= GRID_X ||
      head.y < 0 ||
      head.y >= GRID_Y ||
      newSnake.some((segment) => segment.x === head.x && segment.y === head.y)
    ) {
      setGameOver(true);
      return;
    }

    newSnake.unshift(head);

    // Check if snake eats food
    if (head.x === food.x && head.y === food.y) {
      generateFood();
      setScore((prev) => prev + 1);
      if (score === 9) {
        setGameWon(true);
        setGameStarted(false);
      }
    } else {
      newSnake.pop();
    }

    // Update the snake state
    setSnake(newSnake);
  };

  useEffect(() => {
    if (!gameOver && gameStarted) {
      const interval = setInterval(moveSnake, 30); // Adjust snake speed here
      return () => clearInterval(interval);
    }
  }, [snake, direction, gameStarted, showCountDown]);

  useEffect(() => {
    initGame();
  }, []);

  const initGame = (): void => {
    generateFood();
  };

  const generateFood = (): void => {
    const x = Math.floor(Math.random() * GRID_X);
    const y = Math.floor(Math.random() * GRID_Y);
    setFood({ x, y });
  };

  const changeDirection = (direction: Direction) => {
    setTimeout(() => {
      setDirection(direction);
    }, 100);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === "ArrowUp" && direction !== "DOWN") {
      setDirection("UP");
    }
    if (event.key === "ArrowDown" && direction !== "UP") {
      setDirection("DOWN");
    }
    if (event.key === "ArrowLeft" && direction !== "RIGHT") {
      setDirection("LEFT");
    }
    if (event.key === "ArrowRight" && direction !== "LEFT") {
      setDirection("RIGHT");
    }
  };

  return (
    <div
      className="relative focus:outline-none"
      ref={gameContainerRef}
      tabIndex={0}
      onKeyDown={handleKeyPress}
      autoFocus
    >
      <div className="hidden pc:block css-blurry-gradient-blue1"></div>

      <div className="hidden pc:block css-blurry-gradient-green1"></div>
      <div className="hidden pc:block css-blurry-gradient-green-small"></div>
      <div
        className="z-50 relative flex items-center justify-center h-[361px] w-[409px] rounded-lg border-[1.5px] border-[#000000] bg-gradient-to-b from-grad2 to-grad1  shadow-inner   backdrop-blur-3xl 
     
      "
      >
        <img
          src="/bolt_tl.svg"
          alt="Bolt"
          height={24}
          width={24}
          className="absolute top-2 left-2 w-6 h-6"
        />
        <img
          src="/bolt_tr.svg"
          alt="Bolt"
          height={24}
          width={24}
          className="absolute top-2 right-2 w-6 h-6"
        />
        <img
          src="/bolt_bl.svg"
          alt="Bolt"
          height={24}
          width={24}
          className="absolute bottom-2 left-2 w-6 h-6"
        />
        <img
          src="/bolt_br.svg"
          alt="Bolt"
          height={24}
          width={24}
          className="absolute bottom-2 right-2 w-6 h-6"
        />

        <div className="h-[304px] w-[336px] flex flex-row items-center justify-center">
          <div className="z-[150] bg-[#011627] basis-1/2 h-full rounded-lg shadow-[inset_1px_5px_11px_0_rgba(2,18,27,0.71)]">
            <div className="grid grid-cols-20 grid-rows-38">
              {gameOver && !showCountDown && (
                <div className="flex flex-col">
                  <div className="absolute flex items-center justify-center bottom-[30%] text-lg align-center w-[168px] m-auto text-[#43d9ad] bg-[#000000] h-10">
                    GAME OVER!
                  </div>
                  <button
                    onClick={() => startCountdown()}
                    className="absolute w-[168px] bottom-[12%] text-[#607b96] text-menu-text text-sm flex items-center justify-center  py-6 hover:text-white"
                  >
                    start-again
                  </button>
                </div>
              )}
              {gameWon && !showCountDown && (
                <div className="flex flex-col">
                  <div className="absolute flex items-center justify-center bottom-[30%] text-lg align-center w-[168px] m-auto text-[#43d9ad] bg-[#000000] h-10">
                    WELL DONE!
                  </div>
                  <button
                    onClick={() => startCountdown()}
                    className="absolute w-[168px] bottom-[12%] text-[#607b96] text-menu-text text-sm flex items-center justify-center  py-6 hover:text-white"
                  >
                    start-again
                  </button>
                </div>
              )}
              {showCountDown && (
                <div className="absolute ml-[75px] flex flex-col items-center">
                  <div className="text-3xl  mt-10 text-white animate-pulse ">
                    {time === 0 ? "Go!" : time}
                  </div>
                </div>
              )}

              <button
                className={`absolute ${
                  gameStarted || showCountDown || gameWon ? "hidden" : "flex"
                } justify-center w-[90px] bg-[#ffb277] bottom-[20%] left-[18%] text-xs text-black cursor-pointer p-1.5 rounded-[10px] border  border-black hover:bg-[#ffeb3b] hover:text-black hover:border-[#ffeb3b] transition-all duration-300 ease-in-out`}
                onClick={() => startCountdown()}
              >
                start-game
              </button>

              {Array.from({ length: GRID_Y }).map((_, y) => (
                <div key={y} className="flex">
                  {Array.from({ length: GRID_X }).map((_, x) => {
                    const isSnakeCell = snake.find(
                      (segment) => segment.x === x && segment.y === y
                    );
                    const isFoodCell = food.x === x && food.y === y;

                    // Tailwind CSS classes for snake cell
                    let snakeCellClasses = "";
                    let snakeCellStyle;
                    if (isSnakeCell) {
                      const opacity = parseFloat(
                        (1 - snake.indexOf(isSnakeCell) / snake.length).toFixed(
                          2
                        )
                      );
                      snakeCellStyle = {
                        opacity: opacity,
                      };
                      snakeCellClasses = `w-2 h-2 green bg-[#43d9ad]`;
                    }

                    // Tailwind CSS classes for food cell
                    const foodCellClasses = isFoodCell
                      ? "w-2 h-2 rounded-[50%] bg-[#43d9ad]"
                      : "w-2 h-2";

                    // Tailwind CSS classes for snake head
                    let headRadiusClasses = "";
                    if (
                      isSnakeCell &&
                      snake.findIndex(
                        (segment) => segment.x === x && segment.y === y
                      ) === 0
                    ) {
                      const headRadius = "5px";
                      headRadiusClasses = "";
                      console.log("direction", direction);
                      switch (direction) {
                        case "UP":
                          headRadiusClasses += "rounded-tl-lg rounded-tr-lg";
                          break;
                        case "DOWN":
                          headRadiusClasses += "rounded-bl-lg rounded-br-lg";
                          break;
                        case "LEFT":
                          headRadiusClasses += "rounded-tl-lg rounded-bl-lg";
                          break;
                        case "RIGHT":
                          headRadiusClasses += "rounded-tr-lg rounded-br-lg";
                          break;
                        default:
                          break;
                      }
                    }

                    return (
                      <div
                        key={x}
                        className={`${
                          isSnakeCell ? snakeCellClasses : foodCellClasses
                        } cell flex shrink-0 ${headRadiusClasses}`}
                        style={
                          isSnakeCell
                            ? snakeCellStyle
                            : isFoodCell
                            ? { boxShadow: "0 0 10px #43D9AD" }
                            : {}
                        }
                      ></div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
          <div className="z-50 h-full flex flex-col items-end justify-between basis-1/2 rounded-lg ">
            <div className=" bg-[#011423]/[0.3] w-[153px]  flex flex-col   h-[125px] rounded-[7px] p-[5px]  text-[11.5px] text-white ">
              <div className="">
                <p className="mt-[5px]">// use your keyboard</p>
                <p>// arrows to play</p>
              </div>

              <button className="bg-[#000000] ml-[52px] rounded-[8px] flex items-center justify-center w-[40px] h-[24px] mt-5 mb-1">
                <Image
                  src="/icons/gamescreen/arrow-button.svg"
                  alt=""
                  className=""
                  height={6}
                  width={9}
                />
              </button>
              <div className=" ml-[10px] flex flex-row justify-between h-[24px] w-[125px]">
                <button className="bg-[#000000]  rounded-[8px] flex items-center justify-center w-[40px] h-[24px] rotate-180">
                  <Image
                    src="/icons/gamescreen/arrow-button.svg"
                    alt=""
                    className="rotate-90"
                    height={6}
                    width={9}
                  />
                </button>
                <button className="bg-[#000000]  rounded-[8px] flex items-center justify-center w-[40px] h-[24px] rotate-180">
                  <Image
                    src="/icons/gamescreen/arrow-button.svg"
                    alt=""
                    className=""
                    height={6}
                    width={9}
                  />
                </button>
                <button className="bg-[#000000]  rounded-[8px] flex items-center justify-center w-[40px] h-[24px] ">
                  <Image
                    src="/icons/gamescreen/arrow-button.svg"
                    alt=""
                    className="rotate-90"
                    height={6}
                    width={9}
                  />
                </button>
              </div>
            </div>
            <div
              id="score-board"
              className="w-full flex flex-col pl-8 text-[11.5px]"
            >
              <p className="text-white">// food left</p>

              <div
                id="score"
                className="grid grid-cols-5 gap-5 justify-items-center pt-3 w-fit"
              >
                {[...Array(10)].map((_, index) => (
                  <div
                    key={index}
                    className="h-1.5 w-1.5 bg-[#43d9ad] rounded-[50%] shadow-[0,0,10px,#43d9ad]"
                    style={{
                      boxShadow: "0 0 10px #43d9ad",
                      opacity: index < score ? 1 : 0.3,
                    }}
                  ></div>
                ))}
              </div>
            </div>
            <div className="h-2"></div>
            <Link
              href={""}
              className="text-[12px] text-white p-0.5 px-2 border-2 border-white rounded-[8px] hover:bg-white/20 "
            >
              skip
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnakeGame;
