import readlineSync from 'readline-sync';

const greet = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
  return userName;
};

const generateNumber = (min, max) => Math.floor((Math.random() * (max - min)) + min);

const operation = (sign, a, b) => {
  if (sign === '+') {
    return a + b;
  } else if (sign === '-') {
    return a - b;
  } else if (sign === '*') {
    return a * b;
  }
  return 0;
};

export { greet, generateNumber, operation };
