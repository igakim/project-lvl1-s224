import { run } from '..';
import { calc } from './../gameFunctions/gameFunctions';
import gN from './../gameFunctions/randomNumber';

const game = () => {
  const message = 'What is the result of the expression?';
  const getQA = () => {
    const num1 = gN(0, 25);
    const num2 = gN(0, 25);
    const operators = ['+', '-', '*'];
    const currentOperator = operators[gN(0, 3)];
    const question = `${num1} ${currentOperator} ${num2}`;
    return [calc(currentOperator, num1, num2), question];
  };

  return run(message, getQA);
};

export default game;
