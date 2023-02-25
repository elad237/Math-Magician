import React, { useState } from 'react';
import Output from './Output';
import ButtonsBox from './ButtonsBox';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calculation, setCalculation] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const handleClick = (event) => {
    const values = calculate(calculation, event.target.innerText);
    setCalculation(values);
  };

  return (
    <div className="calculator">
      <h1 className="calculator-title">Let&apos;s do some math!</h1>
      <div>
        <Output calculation={calculation} />
        <ButtonsBox handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
