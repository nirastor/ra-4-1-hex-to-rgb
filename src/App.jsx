import React, { useState } from 'react';
import './App.css';
import createRGB from './utils/createRGB';
import validateInput from './utils/isInputValid';

/*
  В прошлом задании было прям очевидно как поделить
  Здесь кажется пока проще одним компонетом

  На само деле много вопросов как правильно делить функционал
  Должна лифункция валидации отдавать true или false и только потом если false то вызывать
*/

function App() {
  const [input, setInput] = useState('');

  const handleInput = (e) => {
    setInput(() => e.target.value);
  };

  let message = 'Все верно';

  const validaton = validateInput(input);
  const style = {};
  if (!validaton.result) {
    message = validaton.err;
  } else {
    const rgbString = createRGB(input).string;
    message = rgbString;
    style.backgroundColor = rgbString;
  }

  return (
    <div className="full-screen" style={style}>
      <div className="center-block">
        <form>
          <input className="input" type="text" value={input} onChange={handleInput} />
        </form>
        <div className="result-message">{message}</div>
      </div>
    </div>
  );
}

export default App;
