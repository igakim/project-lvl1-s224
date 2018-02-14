import { gN, run } from '..';

const game = () => {
  const message = 'What is the result of the expression? \n';
  const getQA = () => {
    const num1 = gN(0, 25);
    const num2 = gN(0, 25);
    const operators = ['+', '-', '*'];
    const currentOperator = operators[gN(0, 3)];
    const question = `${num1} ${currentOperator} ${num2}`;
    if (currentOperator === '+') {
      return [num1 + num2, question];
    } else if (currentOperator === '-') {
      return [num1 - num2, question];
    }
    return [num1 * num2, question];
  };

  return run(message, getQA);
};

export default game;
