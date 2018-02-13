#!/usr/bin/env node

import { greet } from '..';
import game from '../games/brain-calc-game';

console.log('Welcome to the Brain Games!');
console.log('What is the result of the expression? \n');

game(0, greet());
