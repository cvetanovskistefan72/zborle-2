import React, { useEffect, useState } from "react";
import { LETTERS } from "constants/letters";
import Letter from "components/common/Letter/Letter";

interface LettersList {
  onAddLetter: Function;
  onDeleteLetter: Function;
  onEnter: Function;
  gameOver: Boolean;
  finalLetters: string[];
}

const LettersList: React.FC<LettersList> = ({
  onAddLetter,
  onDeleteLetter,
  onEnter,
  gameOver,
  finalLetters,
}) => {
  const [letters, setLetters] = useState<string[]>([]);

  useEffect(() => {
    setLetters(LETTERS);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toUpperCase();
      if (LETTERS.includes(key)) handleLetterClick(key);
      if (key === "ENTER") onEnter(finalLetters);
      if (key === "BACKSPACE") handleDeleteClick();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [finalLetters]);

  const handleLetterClick = (letter: string) => {
    if (!gameOver) {
      onAddLetter(letter);
    }
  };

  const handleDeleteClick = () => {
    if (!gameOver) {
      onDeleteLetter();
    }
  };

  return (
    <div className="bg-gray-100 rounded-md p-3">
      <div className="grid grid-cols-11 gap-2">
        {letters.slice(0, 11).map((letter, i) => (
          <Letter
            key={i}
            className={`rounded-md flex items-center justify-center text-gray-800 font-bold text-2xl cursor-pointer shadow-md hover:shadow-lg transition duration-200 p-4`}
            letter={letter}
            handleClick={handleLetterClick}
          />
        ))}
        {letters.slice(11, 22).map((letter, i) => (
          <Letter
            key={i}
            className={`rounded-md flex items-center justify-center text-gray-800 font-bold text-2xl cursor-pointer shadow-md hover:shadow-lg transition duration-200 p-4`}
            letter={letter}
            handleClick={handleLetterClick}
          />
        ))}
        <Letter
          className="bg-red-600  col-span-1 rounded-md flex items-center justify-center text-white font-bold text-1xl cursor-pointer shadow-md hover:shadow-lg transition duration-200"
          letter="&#x232b;"
          handleClick={handleDeleteClick}
        />
        {letters.slice(22, -1).map((letter, i) => (
          <Letter
            key={i}
            className={`rounded-md flex items-center justify-center text-gray-800 font-bold text-2xl cursor-pointer shadow-md hover:shadow-lg transition duration-200 p-4`}
            letter={letter}
            handleClick={handleLetterClick}
          />
        ))}
        <Letter
          className="bg-gray-300 col-span-2 rounded-md flex items-center justify-center text-gray-800 font-bold text-2xl cursor-pointer shadow-md hover:shadow-lg transition duration-200"
          letter="&#x23ce;"
          handleClick={() => onEnter(finalLetters)}
        />
      </div>
    </div>
  );
};

export default LettersList;
