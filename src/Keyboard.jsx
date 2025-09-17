import { Fragment, useEffect, useState } from 'react';
import './Keyboard.css';

const keyboardChars = [
  'q w e r t y u i o p',
  'a s d f g h j k l',
  'enter z x c v b n m delete'
];

export function Keyboard() {
  const [keyboardRows, setKeyboardRows] = useState([]);

  useEffect(() => {
    const rows = keyboardChars.map(line => {
      const lineChars = line.split(' ');
      return (
        <div className="keyboard-line" key={line}>
          {lineChars.map(char => {
            return (
              <div
                key={char}
                className={(char === 'enter' || char === 'delete') ? 'keyboard-key big' : 'keyboard-key'}
              >
                {char}
              </div>
            );
          })}
        </div>
      );
    });
    setKeyboardRows(rows);
  }, []);

  return (
    <div id="keyboard">
      {keyboardRows.map((row, i) => <Fragment key={i}>{row}</Fragment>)}
    </div>
  );
}