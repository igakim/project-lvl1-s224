import { gN, balanceNumber, run } from '..';

const game = () => {
  const message = 'Balance the given number.';
  const getQA = () => {
    const num1 = gN(100, 3333);
    const question = `${num1}`;
    return [balanceNumber(num1), question];
  };
  return run(message, getQA);
};

export default game;
