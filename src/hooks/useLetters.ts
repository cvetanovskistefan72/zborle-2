import { useState } from "react";

type UseLettersType = [string[], (letter: string) => void, () => void, () => void];

const useLetters = (): UseLettersType => {
  const [letters, setLetters] = useState<string[]>([]);

  const addLetter = (letter: string) => {
    if (letters.length < 5) {
      setLetters((prevLetters) => [...prevLetters, letter]);
    }
  };

  const removeLastLetter = () => {
    if (letters.length > 0) {
      setLetters((prevLetters) => prevLetters.slice(0, -1));
    }
  };

  const clearLetters = () => {
    setLetters([])
  }

  return [letters, addLetter, removeLastLetter, clearLetters];
};

export default useLetters;
