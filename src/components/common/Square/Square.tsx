import React from "react";

interface SquareProps {
  letter: string;
  color?: string;
}

const Square: React.FC<SquareProps> = ({ letter, color }) => {
  return (
    <div
      className={`relative w-12 h-12 border border-black rounded-md`}
      style={{backgroundColor: color}}
    >
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-gray-800`}
      >
        {letter || ""}
      </div>
    </div>
  );
};

export default Square;
