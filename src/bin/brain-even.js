#!/usr/bin/env node

import { greet } from '..';
import game from '../games/brain-even-game';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".\n');

game(0, greet());
