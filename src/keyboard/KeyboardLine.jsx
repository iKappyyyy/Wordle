import { KeyboardKey } from './KeyboardKey';
import './KeyboardLine.css';

export function KeyboardLine({ line, setCurrentGuess, submitWord, guesses, keyboardColors }) {
  const lineChars = line.split(' ');
  return (
    <div className="keyboard-line">
      {lineChars.map(char => {
        return (
          <KeyboardKey
            key={char}
            char={char}
            setCurrentGuess={setCurrentGuess}
            submitWord={submitWord}
            guesses={guesses.filter(guess => guess !== null)}
            position={keyboardColors[char] || ''}
          />
        );
      })}
    </div>
  );
}