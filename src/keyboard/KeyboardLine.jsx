import { KeyboardKey } from './KeyboardKey';
import './KeyboardLine.css';

export function KeyboardLine({ line, setCurrentGuess, submitWord }) {
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
          />
        );
      })}
    </div>
  );
}