import React, { useRef } from 'react';
import { getPrice } from './calculator';

function App() {

  const widthInput = useRef<HTMLInputElement>(null);
  const heightInput = useRef<HTMLInputElement>(null);
  const countInput = useRef<HTMLInputElement>(null);
  const laminationInput = useRef<HTMLInputElement>(null);
  const roundingInput = useRef<HTMLInputElement>(null);

  function calcHandler() {
    console.log('start');
    if (widthInput.current && heightInput.current && countInput.current && laminationInput.current && roundingInput.current) {
      console.log('processing');

      const width = +widthInput.current.value;
      const height = +heightInput.current.value;
      const count = +countInput.current.value;
      const lamination = laminationInput.current.checked;
      const rounding = roundingInput.current.checked;

      const price = getPrice(width, height, count, lamination, rounding);
      console.log(price);
      console.log(width, height, count, lamination, rounding);
    }
  }

  return (
    <div className='app'>
      <h1 className='title'>Калькулятор стоимости<br />винилового магнита</h1>
      <div className='settings'>
        <div className="labels">
          <label htmlFor="width">Ширина:</label>
          <label htmlFor="height">Высота:</label>
          <label htmlFor="count">Количество:</label>
          <label htmlFor="lamination">Ламинирование:</label>
          <label htmlFor="cornerRounding">Скругление углов:</label>
        </div>
        <div className="inputs">
          <input id="width" type="text" ref={widthInput} />
          <input id="height" type="text" ref={heightInput} />
          <input id="count" type="text" ref={countInput} />
          <input id="lamination" type="checkbox" ref={laminationInput} />
          <input id="cornerRounding" type="checkbox" ref={roundingInput} />
        </div>
      </div>
      <button type='button' className='btn' onClick={calcHandler}>Рассчитать</button>
    </div>
  );
}

export default App;
