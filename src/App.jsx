import { useState } from 'react';
import { InputBoard } from './input_board/InputBoard';
import { Keyboard } from './keyboard/Keyboard';
import { guessesAmount } from './constants/boardConstants';
import './App.css';

function App() {
  const [guesses, setGuesses] = useState(Array(guessesAmount).fill(null));
  const [currentGuess, setCurrentGuess] = useState('');
  return (
    <>
      <InputBoard guesses={guesses} currentGuess={currentGuess} />
      <Keyboard currentGuess={currentGuess} setCurrentGuess={setCurrentGuess} guesses={guesses} setGuesses={setGuesses} />
    </>
  );
}

export default App;
