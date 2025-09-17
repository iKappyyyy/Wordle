import { Fragment, useEffect, useState } from 'react';
import { KeyboardLine } from './KeyboardLine';
import './Keyboard.css';

const keyboardChars = [
  'Q W E R T Y U I O P',
  'A S D F G H J K L',
  'Enter Z X C V B N M Delete'
];

export function Keyboard({ setUserInput }) {
  const [keyboardRows, setKeyboardRows] = useState([]);

  useEffect(() => {
    const rows = keyboardChars.map(line => {
      return <KeyboardLine key={line} line={line} setUserInput={setUserInput} />;
    });
    setKeyboardRows(rows);

    const handleKeyDownEvent = event => {
      const key = event.key.length === 1 ? event.key.toUpperCase() : event.key;
      const element = document.querySelector(`[data-key="${key}"]`);
      if (element) element.classList.add('active');

      if (/^[A-Z]$/.test(key)) {
        setUserInput(currentInput => currentInput + key);
      } else if (key === 'Backspace' || key === 'Delete') {
        setUserInput(currentInput => currentInput.slice(0, -1));
      } else if (key === 'Enter') {
        console.log('submit');
        setUserInput('');
      }
    };

    const handleKeyUpEvent = event => {
      let key = event.key === 'Backspace' ? 'Delete' : event.key;
      if (key.length === 1) key = key.toUpperCase();

      const element = document.querySelector(`[data-key="${key}"]`);
      if (element) element.classList.remove('active');
    };

    window.addEventListener('keydown', handleKeyDownEvent);
    window.addEventListener('keyup', handleKeyUpEvent);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDownEvent);
      window.removeEventListener('keyup', handleKeyUpEvent);
    };
  }, []);

  return (
    <div id="keyboard">
      {keyboardRows.map((row, i) => <Fragment key={i}>{row}</Fragment>)}
    </div>
  );
}