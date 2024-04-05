import React from "react";
import GameIcon from "./GameIcon";

interface GameGridProps {
  gameState: {
    grid: boolean[];
    bombPosition: number;
  };
  revealedIndexes: boolean[];
  handleIconClick: (index: number) => void;
  handleReset: () => void;
  hasReveal: boolean;
}

const GameGrid: React.FC<GameGridProps> = ({
  gameState,
  revealedIndexes,
  handleIconClick,
  handleReset,
  hasReveal,
}) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {gameState.grid.map((_, index) => (
          <GameIcon
            key={index}
            isBomb={index === gameState.bombPosition}
            onReveal={() => handleIconClick(index)}
            revealed={revealedIndexes[index]}
          />
        ))}
      </div>

      <button
        onClick={handleReset}
        disabled={!hasReveal}
        className={`${
          hasReveal
            ? "mt-4 py-4 relative inline-block px-6 font-bold group"
            : "mt-4 py-4 relative inline-block px-6 font-bold group opacity-50 cursor-not-allowed"
        }`}
      >
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
        <span className="relative text-black group-hover:text-white">
          Restart Game
        </span>
      </button>
    </div>
  );
};

export default GameGrid;
