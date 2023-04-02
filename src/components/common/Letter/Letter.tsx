import React from "react";

interface ILetter {
  className: string;
  letter: string;
  handleClick: Function;
}

const Letter: React.FC<ILetter> = ({ className, letter, handleClick }) => {
  return (
    <div
      key={letter}
      className={className}
      onClick={() => handleClick(letter)}
    >
      {letter}
    </div>
  );
};

export default Letter;
