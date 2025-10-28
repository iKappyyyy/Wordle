import { BoardSquare } from './BoardSquare';
import { wordLength } from '../constants/generalConstants';
import './BoardLine.css';

document.documentElement.style.setProperty('--line-length', wordLength);

export function BoardLine({ guess, lineNumber, isCurrentGuess }) {
  const columns = [];
  for (let i = 0; i < wordLength; i++) {
    columns.push(
      <BoardSquare
        key={`board-square-${lineNumber * wordLength + i + 1}`}
        char={guess ? guess[i] : ''}
        position={isCurrentGuess ? -1 : i}
      />
    );
  }

  return (
    <div className="board-line" id={`input-line-${lineNumber}`}>
      {columns}
    </div>
  );
}