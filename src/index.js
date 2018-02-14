import readlineSync from 'readline-sync';

const greet = () => {
  const userName = readlineSync.question('May I have your name? \n');
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

const gcd = (a, b) => {
  const bigNum = a > b ? a : b;
  const smallNum = a > b ? b : a;
  if (bigNum % smallNum === 0) return smallNum;
  return gcd(bigNum % smallNum, smallNum);
};

export { greet, generateNumber, operation, gcd };
