import { useState } from 'react';
import { Keyboard } from './keyboard/Keyboard';
import './App.css';

function App() {
  const [userInput, setUserInput] = useState('');
  return (
    <>
      {userInput}
      <Keyboard setUserInput={setUserInput} />
    </>
  );
}

export default App;
