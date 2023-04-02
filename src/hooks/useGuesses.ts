import {IGuess} from "models/IGuess";
import { useState } from "react";
import { ILetter } from "../models/ILetter";

type UseGuessesType = [IGuess[], (lettesr: string[]) => void];

const useGuesses = (word: string[]): UseGuessesType => {
  const [guesses, setGuesses] = useState<IGuess[]>([]);

  const addGuess = (guess: IGuess) => {
    setGuesses((prevGuesses) => [...prevGuesses, guess]);
  };

  const checkGuess = (randomWord: string[]) => {
    randomWord = randomWord.map((w) => w.toLowerCase());

    const isCorrect = randomWord.join("") === word.join("");
    const mappedLetters: ILetter[] = randomWord.map((letter, i) => ({
      letter: letter.toUpperCase(),
      status:
        word.indexOf(letter) === -1
          ? "incorrect"
          : word[i] === randomWord[i]
          ? "correct"
          : "misplaced",
    }));

    const guess: IGuess = {
      letters: mappedLetters,
      result: isCorrect,
    };

    addGuess(guess);
  };

  return [guesses, checkGuess];
};

export default useGuesses;
