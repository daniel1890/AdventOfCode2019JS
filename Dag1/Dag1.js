import { readFileSync } from 'fs';

var data = readFileSync('Dag1.txt', 'utf8').split('\n');
var ansPart1 = 0;
var ansPart2 = 0;

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

// Functie om nodige benzine te berekenen per onderdeel en daarna benzine te berekenen per benzine capsule zolang de benzine die nodig is groter dan 0 is
function CalcModule(getal, ans) {
  while (Calc(getal) > 0) {
    getal = Calc(getal);
    ans += getal;
  }

  return ans;
}

// Functie om nodige benzine en benzine voor de benzine te berekenen voor alle onderdelen
function CalcModules(data, ans) {
  data.forEach((getal) => {
    ans += CalcModule(getal, 0);
  });
  return ans;
}

console.log('Antwoord deel 1:', CalcAll(data, ansPart1));
console.log('Antwoord deel 2', CalcModules(data, ansPart2));
