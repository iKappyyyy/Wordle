import { KeyboardKey } from './KeyboardKey';
import './KeyboardLine.css';

export function KeyboardLine({ line, setUserInput }) {
  const lineChars = line.split(' ');
  return (
    <div className="keyboard-line">
      {lineChars.map(char => {
        return (
          <KeyboardKey key={char} char={char} setUserInput={setUserInput} />
        );
      })}
    </div>
  );
}