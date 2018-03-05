import { run } from '..';
import { isPrime } from './../gameFunctions/gameFunctions';
import gN from './../gameFunctions/randomNumber';

const game = () => {
  const message = 'Is this number prime?';
  const getQA = () => {
    const num = gN(2, 100);
    const correctAnswer = isPrime(num) ? 'yes' : 'no';
    const question = `${num}`;
    return [correctAnswer, question];
  };
  return run(message, getQA);
};

export default game;
