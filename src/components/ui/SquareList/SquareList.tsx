import React from "react";
import Square from "../../common/Square/Square";
import { Guess } from "models/Guess";
import { LetterStatusColor } from "models/LetterStatusColor";

interface ISquareList {
  letters: string[];
  guesses: Guess[];
  gameOver: Boolean;
}

const SquareList: React.FC<ISquareList> = ({ letters, guesses, gameOver }) => {
  return (
    <div>
      <div className="flex justify-center space-x-2">
        <div className="flex flex-wrap justify-center space-y-2">
          {guesses?.map((g, index) => (
            <div key={index} className="flex justify-center space-x-2">
              {g.letters.map((letter, index) => (
                <Square
                  key={index}
                  letter={letter.letter}
                  color={LetterStatusColor[letter.status]}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center space-x-2 mt-2">
        {!gameOver && Array.from(Array(5)).map((_, i) => (
          <Square key={i} letter={letters[i]} />
        ))}
      </div>
    </div>
  );
};

export default SquareList;
