#!/usr/bin/env node

import { game, greet } from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".\n');

game(0, greet());
