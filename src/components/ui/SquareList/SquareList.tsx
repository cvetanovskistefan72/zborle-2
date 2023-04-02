import {IGuess} from "models/IGuess";
import { LetterStatusColor } from "models/LetterStatusColor";
import React from "react";
import Square from "../../common/Square/Square";

interface ISquareList {
  letters: string[];
  guesses: IGuess[];
  gameOver: boolean;
}

const SquareList: React.FC<ISquareList> = ({ letters, guesses, gameOver }) => {
  const guessedSquares = guesses.map((guess, index) => (
    <div key={index} className="flex justify-center space-x-2">
      {guess.letters.map((letter, index) => (
        <Square
          key={index}
          letter={letter.letter}
          color={LetterStatusColor[letter.status]}
        />
      ))}
    </div>
  ));

  const remainingSquares =
    !gameOver &&
    Array.from(Array(5)).map((_, index) => (
      <Square key={index} letter={letters[index]} />
    ));

  return (
    <div>
      <div className="flex justify-center space-x-2">
        <div className="flex flex-wrap justify-center space-y-2">
          {guessedSquares}
        </div>
      </div>
      <div className="flex justify-center space-x-2 mt-2">
        {remainingSquares}
      </div>
    </div>
  );
};

export default SquareList;
