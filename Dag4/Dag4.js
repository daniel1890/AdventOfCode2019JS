let lo = 134564;
let hi = 585159;
let ans;

const verifyPass = (lo, hi) => {
  let counter = lo + 1;
  let correctPasswords = 0;

  while (counter < hi) {
    let stringNumber = '' + counter;
    let splitNumber = stringNumber.split('');
    let checkMatch = true;
    let checkIncrease = true;

    checkIncrease = digitsDontDecrease(splitNumber);

    if (checkIncrease == true) {
      checkMatch = adjDigitsMatch(splitNumber);
      // Is check nog steeds true? voeg 1 toe aan correctPasswords
      checkMatch && checkIncrease == true
        ? (correctPasswords += 1)
        : (correctPasswords = correctPasswords);
    }

    counter++;
  }

  return correctPasswords;
};

const adjDigitsMatch = (splitNumber) => {
  let check = false;

  for (let i = 0; i < splitNumber.length - 1; i++) {
    parseInt(splitNumber[i]) == parseInt(splitNumber[i + 1])
      ? (check = true)
      : (check = check);
  }

  return check;
};

const digitsDontDecrease = (splitNumber) => {
  let check = true;

  for (let i = 0; i < splitNumber.length - 1; i++) {
    parseInt(splitNumber[i]) <= parseInt(splitNumber[i + 1])
      ? (check = check)
      : (check = false);
  }

  return check;
};

ans = verifyPass(lo, hi);
console.log(ans);

// Antwoord is een zes digit getal
// Het antwoord ligt tussen de grensen van de puzzle input
// 2 NAASTLIGGENDE getallen moeten overeenkomen (22 in 122345)
// links naar rechts zullen de getallen nooit kleiner worden, ze zullen alleen
// groter worden (123356) (135778)
