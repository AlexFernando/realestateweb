import React from 'react';
import {ExchangeRates} from './ApiCall';

function ButtonComponent() {
    const { EuroRate, ShekelsRate } = ExchangeRates();
  const handleClickButton1 = () => {
    console.log('Button 1 clicked!');
  };

  const handleClickButton2 = () => {
    console.log('Button 2 clicked!');
  };

  const handleClickButton3 = () => {
    console.log('Button 3 clicked!');
  };

  return (
    <div>
      <button onClick={handleClickButton1}>Button 1</button>
      <button onClick={handleClickButton2}>Button 2</button>
      <button onClick={handleClickButton3}>Button 3</button>
    </div>
  );
}

export default ButtonComponent;
