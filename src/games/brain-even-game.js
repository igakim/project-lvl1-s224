import readlineSync from 'readline-sync';
import { generateNumber } from '..';

const game = (countAnswers, userName) => {
  if (countAnswers === 3) {
    return console.log(`Congratulation, ${userName}!`);
  }

  const num = generateNumber(1, 100);
  const rightAnswer = num % 2 === 0 ? 'yes' : 'no';
  const answer = readlineSync.question(`Question: ${num} `);

  if (answer === rightAnswer) {
    console.log(`Your answer: ${answer}`);
    console.log('Correct!');
    return game(countAnswers + 1, userName);
  }

  console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}`);
  return console.log(`Let's try again, ${userName}!`);
};

export default game;
