//Organize imports
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useLetters from "hooks/useLetters";
import MainLayout from "components/layout/MainLayout";
import InfoHeader from "components/ui/InfoHeader/InfoHeader";
import SquareList from "components/ui/SquareList/SquareList";
import LettersList from "components/ui/LettersList/LettersList";
import { getRandomWord } from "utils/getRandomWord";
import useGuesses from "hooks/useGuesses";
import { stringToArray } from "utils/stringToArray";
import { WORDS } from "constants/words";
import PlayAgain from "components/ui/PlayAgain/PlayAgain";

function App() {
  const [letters, addLetter, removeLastLetter, clearLetters] = useLetters();
  const [word, setWord] = useState("");
  const [guesses, checkGuess] = useGuesses(stringToArray(word));
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    setWord(getRandomWord());
  }, []);

  useEffect(() => {
    const lastGuess = guesses.slice(-1)[0] || [];
    if (lastGuess?.result) {
      toast.success("Го погодивте зборот!");
      setGameOver(true);
    }
    if (guesses.length === 6 && !lastGuess?.result) {
      toast.error(`Не успеавте да го погодите зборот ${word.toUpperCase()}.`);
      setGameOver(true);
    }
  }, [guesses]);

  const onEnter = () => {
    if(letters.length < 5 && !gameOver) return;
    if (WORDS.indexOf(letters.join("").toLowerCase()) > 0 && !gameOver) {
      clearLetters();
      checkGuess(letters);
    } else toast.warning("Зборот не постои во речникот.");
  };

  return (
    <MainLayout>
      <ToastContainer autoClose={10000} />
      <div className="sm:max-w-md mx-auto bg-gray-100 p-4 border border-gray-300 mt-5">
        <InfoHeader headerText="Зборле 2" />
        <div className="mt-5">
          <SquareList letters={letters} guesses={guesses} gameOver={gameOver} />
        </div>
      </div>
      <div className="sm:max-w-2xl mx-auto mt-5">
        <LettersList
          onDeleteLetter={removeLastLetter}
          onAddLetter={addLetter}
          onEnter={onEnter}
          gameOver={gameOver}
        />
      </div>
      <div className="sm:max-w-2xl mx-auto mt-5">
        <PlayAgain />
      </div>
      {/* <InstructionsModal isOpen /> */}
    </MainLayout>
  );
}

export default App;
