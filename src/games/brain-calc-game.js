import readlineSync from 'readline-sync';
import { generateNumber, operation } from '..';

const game = (countAnswers, userName) => {
  if (countAnswers === 3) return console.log(`Congratulation ${userName}!`);
  const operators = ['+', '-', '*'];
  const currentOperator = operators[generateNumber(0, 3)];
  const num1 = generateNumber(0, 25);
  const num2 = generateNumber(0, 25);
  const rightAnswer = operation(currentOperator, num1, num2);
  const answer = readlineSync.question(`Question: ${num1} ${currentOperator} ${num2} \n`);
  if (rightAnswer === Number(answer)) {
    console.log('Correct!');
    return game(countAnswers + 1, userName);
  }
  console.log(`${answer} is wrong answer ;(. Correct answer is ${rightAnswer}`);
  return console.log(`Try again, ${userName}!`);
};

export default game;
