console.clear();

import { Dog } from './js/Dog.js';
import { Cat } from './js/Cat.js';


const rexas = new Dog ('rexas');
const rainis = new Cat ('rainis');

console.log(rexas.intro());
console.log(rainis.intro());

console.log(rexas.triukas());
console.log(rainis.triukas());
