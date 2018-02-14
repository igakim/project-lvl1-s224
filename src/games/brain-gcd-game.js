import readlineSync from 'readline-sync';
import { generateNumber, gcd } from '..';

const game = (countAnswers, userName) => {
  if (countAnswers === 3) return console.log(`Congratulation ${userName}!`);

  const num1 = generateNumber(1, 50);
  const num2 = generateNumber(1, 50);
  const rightAnswer = gcd(num1, num2);
  const answer = readlineSync.question(`Question: ${num1} ${num2} \n`);
  if (rightAnswer === Number(answer)) {
    console.log('Correct!');
    return game(countAnswers + 1, userName);
  }
  console.log(`${answer} is wrong answer ;(. Correct answer is ${rightAnswer}`);
  return console.log(`Try again, ${userName}!`);
};

export default game;
