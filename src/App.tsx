import React, { useState, Suspense, lazy } from "react";
import PlayerInput from "./components/PlayerInput";
const GameBoard = lazy(() => import("./components/GameBoard"));
const ChampagneBubbles = lazy(() => import("./components/ChampagneBubbles"));

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [playerCount, setPlayerCount] = useState(0);

  const handleStart = (count: number) => {
    setPlayerCount(count);
    setGameStarted(true);
  };

  const handleGoBack = () => {
    setGameStarted(false);
    setPlayerCount(0);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen px-4">
        {!gameStarted ? (
          <PlayerInput onStart={handleStart} />
        ) : (
          <div className="w-full max-w-4xl">
            <button
              onClick={handleGoBack}
              className="mt-4 py-4 px-12 w-full sm:w-auto bg-red-500 text-white font-bold hover:text-red-500 hover:bg-white transition-colors duration-200"
            >
              Go Back
            </button>

            <Suspense fallback={<div>Loading game...</div>}>
              <GameBoard size={playerCount * 3} />
            </Suspense>
          </div>
        )}
      </div>
      <Suspense fallback={<div>Loading effects...</div>}>
        <ChampagneBubbles />
      </Suspense>
    </>
  );
};

export default App;
