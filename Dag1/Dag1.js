import { readFileSync } from 'fs';

var data = readFileSync('Dag1.txt', 'utf8').split('\n');
var ansPart1 = 0;

console.log(CalcAll(data, ansPart1));

// Functie om nodige benzine voor één onderdeel te berekenen
function Calc(getal) {
  getal = Math.floor(getal / 3) - 2;
  return getal;
}

// Functie om nodige benzine voor alle onderdelen in data te berekenen en het antwoord teruggeeft.
function CalcAll(data, ans) {
  data.forEach((getal) => {
    ans += Calc(getal);
  });
  return ans;
}
