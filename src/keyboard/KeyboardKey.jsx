import './KeyboardKey.css';

export function KeyboardKey({ char, setUserInput }) {
  return (
    <div
      className={(char === 'Enter' || char === 'Delete') ? 'keyboard-key big' : 'keyboard-key'}
      onClick={() => {
        if (/^[A-Z]$/.test(char)) {
          setUserInput(currentInput => currentInput + char);
        } else if (char === 'Backspace' || char === 'Delete') {
          setUserInput(currentInput => currentInput.slice(0, -1));
        } else if (char === 'Enter') {
          console.log('submit');
          setUserInput('');
        }
      }}
      data-key={char}
    >
      {char}
    </div>
  );
}