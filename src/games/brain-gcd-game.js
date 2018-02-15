import run from '..';
import { gcd } from './../gameFunctions/gameFunctions';
import gN from './../gameFunctions/randomNumber';

const game = () => {
  const message = 'Find the greatest common divisor of given numbers.';
  const getQA = () => {
    const num1 = gN(1, 50);
    const num2 = gN(1, 50);
    const question = `${num1} ${num2}`;
    return [gcd(num1, num2), question];
  };
  return run(message, getQA);
};

export default game;
