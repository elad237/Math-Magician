import calculate from '../logic/calculate';
import '@testing-library/jest-dom';

describe('Testing suite for operate', () => {
  it('renders result', () => {
    const calculation = { total: '0', next: null, operation: null };
    const buttonName = '0';
    const result = { next: '0', total: null };
    expect(calculate(calculation, buttonName)).toStrictEqual(result);
  });
  it('renders result', () => {
    const calculation = { total: '0', next: null, operation: null };
    const buttonName = 'AC';
    const result = { total: '0', next: null, operation: null };
    expect(calculate(calculation, buttonName)).toStrictEqual(result);
  });
});
