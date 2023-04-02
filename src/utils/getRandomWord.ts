import { WORDS_FOR_GUESSING } from "constants/wordsForGuessing";

export const getRandomWord = () =>
  WORDS_FOR_GUESSING[Math.floor(Math.random() * WORDS_FOR_GUESSING.length)];
