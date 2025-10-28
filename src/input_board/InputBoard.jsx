import { BoardLine } from './BoardLine';
import { guessesAmount } from '../constants/boardConstants';
import './InputBoard.css';

export function InputBoard({ guesses, currentGuess, correctGuess, setKeyboardColors }) {
  const rows = [];
  for (let i = 0; i < guessesAmount; i++) {
    const currentGuessIndex = guesses.findIndex(guess => guess === null);

    rows.push(
      <BoardLine
        key={`board-line-${i}`}
        guess={i === currentGuessIndex ? currentGuess : guesses[i]}
        lineNumber={i + 1}
        isCurrentGuess={i === currentGuessIndex}
        correctGuess={correctGuess}
        setKeyboardColors={setKeyboardColors}
      />
    );
  }

  return (
    <div id="input-board">
      {rows}
    </div>
  );
}