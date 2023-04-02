import { Letter } from "./../models/Letter";
import { Guess } from "models/Guess";
import { useState } from "react";

type UseGuessesType = [Guess[], (lettesr: string[]) => void];

const useGuesses = (word: string[]): UseGuessesType => {
  const [guesses, setGuesses] = useState<Guess[]>([]);

  const addGuess = (guess: Guess) => {
    setGuesses((prevGuesses) => [...prevGuesses, guess]);
  };

  const checkGuess = (randomWord: string[]) => {
    randomWord = randomWord.map((w) => w.toLowerCase());

    const isCorrect = randomWord.join("") === word.join("");
    const mappedLetters: Letter[] = randomWord.map((letter, i) => ({
      letter: letter.toUpperCase(),
      status:
        word.indexOf(letter) === -1
          ? "incorrect"
          : word[i] === randomWord[i]
          ? "correct"
          : "misplaced",
    }));
 
    const guess: Guess = {
      letters: mappedLetters,
      result: isCorrect,
    };

    addGuess(guess);
  };

  return [guesses, checkGuess];
};

export default useGuesses;
