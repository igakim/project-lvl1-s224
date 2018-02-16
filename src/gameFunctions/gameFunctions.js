const isPrime = (n) => {
  const iter = (num, div) => {
    if (div === num) return true;
    if (num % div === 0) return false;
    return iter(num, div + 1);
  };
  return iter(n, 2);
};

const getProgression = (startNum, diff) => {
  const iter = (num, acc) => {
    if (acc.length >= 10) return acc;
    acc.push(num + diff);
    return iter(num + diff, acc);
  };
  return iter(startNum, [startNum]);
};

const balanceNumber = (num) => {
  const numsArray = String(num).split('').map(v => v * 1);
  const l = numsArray.length;
  const s = numsArray.reduce((a, b) => a + b);
  const iter = (acc, length, sum) => {
    if (length === 0) return acc.join('');
    const lower = sum % length > 0 ? parseInt(sum / length, 10) : sum / length;
    acc.push(lower);
    return iter(acc, length - 1, sum - lower);
  };
  return iter([], l, s);
};

const gcd = (a, b) => {
  const bigNum = a > b ? a : b;
  const smallNum = a > b ? b : a;
  if (bigNum % smallNum === 0) return smallNum;
  return gcd(bigNum % smallNum, smallNum);
};

const calc = (currentOperator, num1, num2) => {
  if (currentOperator === '+') {
    return num1 + num2;
  } else if (currentOperator === '-') {
    return num1 - num2;
  }
  return num1 * num2;
};

export { balanceNumber, gcd, calc, getProgression, isPrime };
