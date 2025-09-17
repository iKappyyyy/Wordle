import { useEffect, useState } from 'react';
import { BoardSquare } from './BoardSquare';
import './BoardLine.css';

const LINE_LENGTH = 5;
document.documentElement.style.setProperty('--line-length', LINE_LENGTH);

export function BoardLine({ lineNumber }) {
  const [boardColumns, setBoardColumns] = useState([]);
  useEffect(() => {
    const columns = [];
    for (let i = 0; i < LINE_LENGTH; i++) {
      columns.push(<BoardSquare key={`board-square-${lineNumber * LINE_LENGTH + i + 1}`} />);
    }
    setBoardColumns(columns);
  }, []);

  return (
    <div className="board-line">
      {boardColumns}
    </div>
  );
}