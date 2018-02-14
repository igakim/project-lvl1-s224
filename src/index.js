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

const run = (message, correctAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(message);
  const userName = greet();
  return startGame(0, userName, correctAnswer);
};

const gN = (min, max) => Math.floor((Math.random() * (max - min)) + min);

const gcd = (a, b) => {
  const bigNum = a > b ? a : b;
  const smallNum = a > b ? b : a;
  if (bigNum % smallNum === 0) return smallNum;
  return gcd(bigNum % smallNum, smallNum);
};

export { greet, gN, gcd, run };
