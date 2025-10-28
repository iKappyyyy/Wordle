import { useEffect, useState } from 'react';
import { KeyboardLine } from './KeyboardLine';
import { keyboardChars } from '../constants/keyboardConstants';
import { wordLength } from '../constants/generalConstants';
import './Keyboard.css';

export function Keyboard({ currentGuess, setCurrentGuess, guesses, setGuesses, wordList, correctGuess, keyboardColors }) {
  const [keyboardRows, setKeyboardRows] = useState([]);
  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    const submitWord = () => {
      const newGuesses = [...guesses];
      const currentGuessIndex = newGuesses.indexOf(null);

      if (currentGuess.length < wordLength || !wordList.includes(currentGuess)) {
        const currentLineElement = currentGuessIndex !== -1 ? document.getElementById(`input-line-${currentGuessIndex + 1}`) : null;
        if (currentLineElement && !currentLineElement.classList.contains('active')) {
          currentLineElement.classList.add('active');
          setTimeout(() => {
            currentLineElement.classList.remove('active');
          }, 1000);
        }
        return;
      }
      if (currentGuessIndex !== -1) newGuesses[currentGuessIndex] = currentGuess;
      if (currentGuess === correctGuess) setGameWon(true);
      setCurrentGuess('');
      setGuesses(newGuesses);
    }

    const rows = keyboardChars.map(line => {
      return <KeyboardLine
        key={line}
        line={line}
        setCurrentGuess={setCurrentGuess}
        submitWord={submitWord}
        guesses={guesses}
        keyboardColors={keyboardColors}
      />;
    });
    setKeyboardRows(rows);
    let keysPressed = [];

    const handleKeyDownEvent = event => {
      const key = event.key.length === 1 ? event.key.toUpperCase() : event.key;
      const element = document.querySelector(`[data-key="${key}"]`);
      if (element) element.classList.add('active');

      if (gameWon) return;
      if (!keysPressed.includes(key)) keysPressed.push(key);

      if (/^[A-Z]$/.test(key)) {
        setCurrentGuess(previousGuess => previousGuess.length < wordLength ? previousGuess + key : previousGuess);
      } else if (key === 'Backspace' || key === 'Delete') {
        if (keysPressed.includes('Control')) setCurrentGuess('');
        else setCurrentGuess(currentGuess => currentGuess.slice(0, -1));
      } else if (key === 'Enter') {
        submitWord();
      }
    };

    const handleKeyUpEvent = event => {
      let key = event.key === 'Backspace' ? 'Delete' : event.key;
      if (key.length === 1) key = key.toUpperCase();
      keysPressed = keysPressed.filter(currentKey => currentKey !== key);

      const element = document.querySelector(`[data-key="${key}"]`);
      if (element) element.classList.remove('active');
    };

    window.addEventListener('keydown', handleKeyDownEvent);
    window.addEventListener('keyup', handleKeyUpEvent);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDownEvent);
      window.removeEventListener('keyup', handleKeyUpEvent);
    };
  }, [currentGuess, keyboardColors]);

  return (
    <div id="keyboard">
      {keyboardRows}
    </div>
  );
}