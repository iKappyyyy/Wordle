import { useEffect, useState } from 'react';
import { InputBoard } from './input_board/InputBoard';
import { Keyboard } from './keyboard/Keyboard';
import { wordLength } from './constants/generalConstants';
import { guessesAmount } from './constants/boardConstants';
import './App.css';

function App() {
  const [wordList, setWordList] = useState([]);
  const [correctGuess, setCorrectGuess] = useState('');
  const [guesses, setGuesses] = useState(Array(guessesAmount).fill(null));
  const [currentGuess, setCurrentGuess] = useState('');
  const [keyboardColors, setKeyboardColors] = useState({});

  useEffect(() => {
    fetch('https://corsproxy.io/?https://www.mit.edu/~ecprice/wordlist.10000')
      .then(response => response.text())
      .then(data => {
        const newWordList = data
          .split('\n')
          .map(w => w.trim())
          .filter(Boolean)
          .filter(w => w.length === wordLength)
          .map(w => w.toUpperCase());

        setWordList(newWordList);
        setCorrectGuess(newWordList[Math.floor(Math.random() * newWordList.length)].toUpperCase());
      });
  }, [wordLength]);

  return (
    <>
      {}
      <InputBoard
        guesses={guesses}
        currentGuess={currentGuess}
        correctGuess={correctGuess}
        setKeyboardColors={setKeyboardColors}
      />
      <Keyboard
        currentGuess={currentGuess}
        setCurrentGuess={setCurrentGuess}
        guesses={guesses}
        setGuesses={setGuesses}
        wordList={wordList}
        correctGuess={correctGuess}
        keyboardColors={keyboardColors}
      />
      {correctGuess}
    </>
  );
}

export default App;
