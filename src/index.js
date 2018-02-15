import readlineSync from 'readline-sync';

const greet = () => {
  const userName = readlineSync.question('May I have your name? \n');
  console.log(`Hi ${userName}!`);
  return userName;
};

const startGame = (countAnswers, userName, correctAnswer) => {
  if (countAnswers === 3) return console.log(`Congratulation, ${userName}!`);
  const curData = correctAnswer();
  const answer = readlineSync.question(`Question: ${curData[1]} \n`);
  const correct = curData[0];
  if (answer === String(correct)) {
    console.log('Correct!');
    return startGame(countAnswers + 1, userName, correctAnswer);
  }
  return console.log(`${answer} is wrong answer ;(. Correct answer is ${correct}`);
};

export default (message, correctAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${message}\n`);
  const userName = greet();
  return startGame(0, userName, correctAnswer);
};
