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

  return (
    <div className={`board-square${!(char === '' || char === undefined) ? ' active' : ''} ${position}`}>
      {char}
    </div>
  );
}