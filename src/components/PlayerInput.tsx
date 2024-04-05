import React, { useState } from "react";
import logo from "../images/sos2.webp";

interface PlayerInputProps {
  onStart: (playerCount: number) => void;
}

const PlayerInput: React.FC<PlayerInputProps> = ({ onStart }) => {
  const [playerCount, setPlayerCount] = useState(0);
  const [error, setError] = useState("");

  const handleStart = () => {
    if (playerCount > 0) {
      onStart(playerCount);
      setError("");
    } else {
      setError("Please enter a valid number of players (at least 1).");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleStart();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1) {
      setPlayerCount(value);
      setError("");
    } else {
      setError("Please enter a positive number.");
      setPlayerCount(0);
    }
  };

  return (
    <div className="w-full px-4 sm:px-8 py-4 max-w-md mx-auto text-center">
      <img src={logo} alt="Beer" className="w-48 h-48 mx-auto mb-4" />
      <h1 className="text-2xl font-bold mb-4">Sip or Spill</h1>
      <p className="mb-4">
        Enter the number of players to start the game. Each player will choose a
        beer and the one who clicks the beer with the bomb loses.
      </p>
      {error && <div className="mb-4 text-red-500">{error}</div>}
      <input
        type="number"
        value={playerCount || ""}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        className="w-full py-4 px-4 text-center border-2 border-black focus:outline-none"
        placeholder="Enter number of players"
      />

      <button
        onClick={handleStart}
        className="mt-4 w-full py-4 relative inline-block px-4 font-bold group"
      >
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
        <span className="relative text-black group-hover:text-white">
          Start Game
        </span>
      </button>
    </div>
  );
};

export default PlayerInput;
