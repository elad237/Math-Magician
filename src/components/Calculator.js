import React from 'react';
import Output from './Output';
import ButtonsBox from './ButtonsBox';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="calculator">
        <Output />
        <ButtonsBox />
      </div>
    );
  }
}

export default Calculator;
