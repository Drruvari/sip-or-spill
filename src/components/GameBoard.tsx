import React, { useState, useEffect, useCallback } from "react";
import { initializeGame } from "../utils/gameLogic";
import GameGrid from "./GameGrid";
import GameOverScreen from "./GameOverScreen";

interface GameBoardProps {
  size: number;
}

const GameBoard: React.FC<GameBoardProps> = ({ size }) => {
  const [resetKey, setResetKey] = useState<number>(0);
  const [gameState, setGameState] = useState(() => initializeGame(size));
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [revealedIndexes, setRevealedIndexes] = useState<boolean[]>(
    new Array(size).fill(false)
  );

  const handleReset = useCallback(() => {
    setGameOver(false);
    setGameState(initializeGame(size));
    setRevealedIndexes(new Array(size).fill(false));
    setResetKey((prevKey) => prevKey + 1);
  }, [size]);

  useEffect(() => {
    handleReset();
  }, [handleReset]);

  const handleIconClick = useCallback(
    (index: number) => {
      if (index === gameState.bombPosition) {
        setGameOver(true);
        setRevealedIndexes(new Array(size).fill(true));
      } else {
        const updatedRevealed = [...revealedIndexes];
        updatedRevealed[index] = true;
        setRevealedIndexes(updatedRevealed);
      }
    },
    [gameState.bombPosition, revealedIndexes, size]
  );

  const hasReveal = revealedIndexes.some((reveal) => reveal);

  return (
    <div
      key={resetKey}
      className="flex flex-col items-center justify-center h-full py-8"
    >
      {gameOver ? (
        <GameOverScreen handleReset={handleReset} />
      ) : (
        <GameGrid
          gameState={gameState}
          revealedIndexes={revealedIndexes}
          handleIconClick={handleIconClick}
          handleReset={handleReset}
          hasReveal={hasReveal}
        />
      )}
    </div>
  );
};

export default GameBoard;
