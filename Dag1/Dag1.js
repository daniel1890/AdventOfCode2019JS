import { readFileSync } from 'fs';

var data = readFileSync('Dag1.txt', 'utf8').split('\n');

console.log(data);

function Calc(getal) {
  getal = Math.floor(getal / 3) - 2;
  return getal;
}

console.log(
  data.forEach((getal) => {
    Calc(getal);
  })
);
