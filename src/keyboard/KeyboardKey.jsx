import { wordLength } from '../constants/generalConstants';
import './KeyboardKey.css';

export function KeyboardKey({ char, setCurrentGuess, submitWord, position }) {
  return (
    <div
      className={(char === 'Enter' || char === 'Delete') ? `keyboard-key big ${position}` : `keyboard-key ${position}`}
      onClick={() => {
        if (char === 'Enter') {
          submitWord();
        } else if (char === 'Backspace' || char === 'Delete') {
          setCurrentGuess(currentGuess => currentGuess.slice(0, -1));
        } else if (/^[A-Z]$/.test(char)) {
          setCurrentGuess(currentGuess => {
            if (currentGuess.length >= wordLength) return currentGuess;
            return currentGuess + char;
          });
        }
      }}
      data-key={char}
    >
      {char}
    </div>
  );
}