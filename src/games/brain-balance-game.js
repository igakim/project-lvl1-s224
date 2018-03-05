import { run } from '..';
import { balanceNumber } from './../gameFunctions/gameFunctions';
import gN from './../gameFunctions/randomNumber';

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
