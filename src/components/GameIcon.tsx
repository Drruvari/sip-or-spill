import React, { useState } from "react";
import bomb from "../images/bomb.svg";
import beer from "../images/beer.svg";

interface GameIconProps {
  isBomb: boolean;
  onReveal: () => void;
  revealed: boolean;
}

const GameIcon: React.FC<GameIconProps> = ({ isBomb, onReveal, revealed }) => {
  const [animationClass, setAnimationClass] = useState("");

  const handleClick = () => {
    if (!isBomb && !revealed) {
      setAnimationClass("animate-shrink-out");
      setTimeout(() => onReveal(), 300);
    } else {
      onReveal();
    }
  };

  return (
    <div
      className={`p-4 border rounded cursor-pointer flex items-center justify-center ${
        revealed ? "animate-reveal" : ""
      } ${animationClass}`}
      onClick={handleClick}
    >
      {!revealed ? (
        <img src={beer} alt="Beer" className="w-32 h-32" />
      ) : isBomb ? (
        <img src={bomb} alt="Bomb" className="w-48 h-48" />
      ) : (
        <div className="opacity-0">Empty</div>
      )}
    </div>
  );
};

export default GameIcon;
