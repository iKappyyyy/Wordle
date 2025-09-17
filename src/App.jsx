import { useState } from 'react';
import { InputBoard } from './input_board/InputBoard';
import { Keyboard } from './keyboard/Keyboard';
import './App.css';

function App() {
  const [userInput, setUserInput] = useState('');
  return (
    <>
      {userInput}
      <InputBoard />
      <Keyboard setUserInput={setUserInput} />
    </>
  );
}

export default App;
