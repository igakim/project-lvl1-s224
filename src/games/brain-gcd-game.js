import { gN, gcd, run } from '..';

const game = () => {
  const message = 'Find the greatest common divisor of given numbers. \n';
  const getQA = () => {
    const num1 = gN(0, 50);
    const num2 = gN(0, 50);
    const question = `${num1} ${num2}`;
    return [gcd(num1, num2), question];
  };
  return run(message, getQA);
};

export default game;
