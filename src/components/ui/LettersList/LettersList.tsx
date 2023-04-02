import React, { useEffect, useState } from "react";
import { LETTERS } from "constants/letters";

interface LettersListProps {
  onAddLetter: Function;
  onDeleteLetter: Function;
  onEnter: Function;
  gameOver: Boolean;
}

const LettersList: React.FC<LettersListProps> = ({
  onAddLetter,
  onDeleteLetter,
  onEnter,
  gameOver,
}) => {
  const [letters, setLetters] = useState<string[]>([]);

  useEffect(() => {
    setLetters(LETTERS);
  }, []);

  const handleLetterClick = (letter: string) => {
    if(!gameOver){
      onAddLetter(letter);
    }
  };

  const handleDeleteClick = () => {
    if(!gameOver){
      onDeleteLetter();
    }
  };

  return (
    <div className="bg-gray-100 rounded-md p-4">
      <div className="grid grid-cols-10 gap-2">
        {letters.map((letter) => (
          <div
            key={letter}
            className={`rounded-md flex items-center justify-center text-gray-800 font-bold text-2xl cursor-pointer shadow-md hover:shadow-lg transition duration-200 p-4`}
            onClick={() => handleLetterClick(letter)}
          >
            {letter}
          </div>
        ))}
        <div
          className="bg-red-600  col-span-2 rounded-md flex items-center justify-center text-white font-bold text-1xl cursor-pointer shadow-md hover:shadow-lg transition duration-200"
          onClick={handleDeleteClick}
        >
          &#x232b;
        </div>
        <div
          onClick={() => onEnter()}
          className="bg-gray-300 col-span-2 rounded-md flex items-center justify-center text-gray-800 font-bold text-2xl cursor-pointer shadow-md hover:shadow-lg transition duration-200"
        >
          &#x23ce;
        </div>
      </div>
    </div>
  );
};

export default LettersList;
