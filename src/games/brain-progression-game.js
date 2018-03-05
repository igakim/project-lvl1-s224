import { run } from '..';
import { getProgression } from './../gameFunctions/gameFunctions';
import gN from './../gameFunctions/randomNumber';

const game = () => {
  const message = 'What number is missing in this progression?';
  const getQA = () => {
    const startNum = gN(1, 6);
    const difference = gN(2, 5);
    const order = gN(2, 9);
    const progression = getProgression(startNum, difference);
    const correctAnswer = progression.splice(order, 1, '..');
    const question = `${progression.join(', ')}`;
    return [correctAnswer.join(''), question];
  };
  return run(message, getQA);
};

export default game;
