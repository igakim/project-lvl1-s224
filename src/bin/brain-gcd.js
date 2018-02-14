#!/usr/bin/env node

import { greet } from '..';
import game from '../games/brain-gcd-game';

console.log('Welcome to the Brain Games!');
console.log('Find the greatest common divisor of given numbers. \n');

game(0, greet());
