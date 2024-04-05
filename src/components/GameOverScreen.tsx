import React from "react";
import GameIcon from "./GameIcon";

interface GameOverScreenProps {
  handleReset: () => void;
}

const GameOverScreen: React.FC<GameOverScreenProps> = ({ handleReset }) => {
  return (
    <div className="text-center">
      <GameIcon isBomb={true} onReveal={() => {}} revealed={true} />
      <button
        onClick={handleReset}
        className=" mt-4 py-4 px-12 w-full sm:w-auto bg-purple-500 text-white font-bold hover:text-purple-500 hover:bg-white transition-colors duration-200"
        aria-label="Reset game"
      >
        Reset Game
      </button>
    </div>
  );
};

export default GameOverScreen;
