import { useEffect, useMemo } from 'react';
import { BoardSquare } from './BoardSquare';
import { wordLength } from '../constants/generalConstants';
import './BoardLine.css';

document.documentElement.style.setProperty('--line-length', wordLength);

export function BoardLine({ guess, lineNumber, isCurrentGuess, correctGuess, setKeyboardColors }) {
  const results = useMemo(() => {
    if (!guess || isCurrentGuess) return { positions: [], keyboardUpdates: {} };

    const positions = [];
    const keyboardUpdates = {};

    for (let i = 0; i < wordLength; i++) {
      const letter = guess[i];
      const whereItShows = [];
      let correctGuessWithoutCorrect = '';
      let guessWithoutCorrect = '';
      let position = '';

      for (let j = 0; j < wordLength; j++) {
        if (correctGuess[j] === letter) whereItShows.push(j);
        if (guess[j] !== correctGuess[j]) {
          correctGuessWithoutCorrect += correctGuess[j];
          guessWithoutCorrect += guess[j];
        }
      }

      if (whereItShows.includes(i)) position = 'correct';
      else if (correctGuessWithoutCorrect.includes(letter) && guessWithoutCorrect.indexOf(letter) === i) position = 'misplaced';
      else position = 'incorrect';

      positions.push(position);

      if (
        !keyboardUpdates[letter] ||
        keyboardUpdates[letter] === 'incorrect' ||
        (keyboardUpdates[letter] === 'misplaced' && position === 'correct')
      ) {
        keyboardUpdates[letter] = position;
      }
    }

    return { positions, keyboardUpdates };
  }, [guess, isCurrentGuess, correctGuess]);

  useEffect(() => {
    if (!guess || isCurrentGuess) return;

    setKeyboardColors(currentColors => {
      const newColors = { ...currentColors };
      for (const [letter, position] of Object.entries(results.keyboardUpdates)) {
        if (
          !newColors[letter] ||
          newColors[letter] === 'incorrect' ||
          (newColors[letter] === 'misplaced' && position === 'correct')
        ) {
          newColors[letter] = position;
        }
      }
      return newColors;
    });
  }, [guess, correctGuess, isCurrentGuess, setKeyboardColors, results.keyboardUpdates]);

  const columns = [];
  for (let i = 0; i < wordLength; i++) {
    columns.push(
      <BoardSquare
        key={`board-square-${lineNumber * wordLength + i + 1}`}
        char={guess ? guess[i] : ''}
        position={results.positions[i]}
      />
    );
  }

  return (
    <div className="board-line" id={`input-line-${lineNumber}`}>
      {columns}
    </div>
  );
}
