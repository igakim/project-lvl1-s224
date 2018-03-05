import { run } from '..';
import gN from './../gameFunctions/randomNumber';

const game = () => {
  const message = 'Answer "yes" if number even otherwise answer "no".';
  const getQA = () => {
    const num = gN(0, 100);
    const question = `${num}`;
    const answer = num % 2 === 0 ? 'yes' : 'no';
    return [answer, question];
  };
  return run(message, getQA);
};

export default game;
