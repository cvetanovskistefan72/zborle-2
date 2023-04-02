import { ILetter } from "./ILetter";

export interface IGuess {
  letters: ILetter[];
  result: boolean;
}
