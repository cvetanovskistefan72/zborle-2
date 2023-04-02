import { WORDS } from "constants/words";

export const getRandomWord = () =>
  WORDS[Math.floor(Math.random() * WORDS.length)];
