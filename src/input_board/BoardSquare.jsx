import { correctGuess } from '../constants/generalConstants';
import './BoardSquare.css';

export function BoardSquare({ char, position }) {
  let classes = 'board-square';
  if (position === -1) {
    return (
      <div className={classes}>
        {char}
      </div>
    );
  }

  if (char === '' || char === undefined) classes += ' active';
  if (char === correctGuess[position]) classes += ' correct';
  else if (correctGuess.includes(char) && (char !== '' || char === undefined)) classes += ' misplaced';

  return (
    <div className={classes}>
      {char}
    </div>
  );
}