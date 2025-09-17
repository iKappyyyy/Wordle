import { useEffect, useState } from 'react';
import { BoardLine } from './BoardLine';
import './InputBoard.css';

const GUESSES_AMOUNT = 6;

export function InputBoard() {
  const [boardRows, setBoardRows] = useState([]);
  useEffect(() => {
    const rows = [];
    for (let i = 0; i < GUESSES_AMOUNT; i++) {
      rows.push(
        <BoardLine key={`board-line-${i}`} lineNumber={i + 1} />
      );
    }
    setBoardRows(rows);
  }, []);

  return (
    <div id="input-board">
      {boardRows}
    </div>
  );
}