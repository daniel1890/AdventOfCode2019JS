import { readFileSync } from 'fs';

let data;
let intCodeLog = {};
let ansPart2 = {};
const test_data = [1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50];

const resetData = (data, location) => {
  data = [];
  data = readFileSync(location, 'utf8').split(',');
  return data;
};

const IntCodeCompiler = (data, noun, verb) => {
  let stap = 4;
  let opcode = 0;
  let output = data[0];
  data[1] = noun;
  data[2] = verb;

  while (data[opcode] != 99) {
    let input1 = data[opcode + 1];
    let input2 = data[opcode + 2];
    let output = data[opcode + 3];

    if (parseInt(data[0]) == 19690720) {
      intCodeLog = 100 * parseInt(data[1]) + parseInt(data[0]);
      break;
    }
    if (data[opcode] == 1) {
      data[output] = parseInt(data[input1]) + parseInt(data[input2]);
    } else if (data[opcode] == 2) {
      data[output] = parseInt(data[input1]) * parseInt(data[input2]);
    }

    opcode += stap;
  }

  return {
    output: data[0],
    noun: noun,
    verb: verb,
  };
};

data = resetData(data, 'Dag2.txt');

const searchOutput = (outputToSearch, data) => {
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      intCodeLog = IntCodeCompiler(data, i, j);

      if (intCodeLog.output == outputToSearch) {
        console.log('FOUND!');
        return {
          noun: intCodeLog.noun,
          verb: intCodeLog.verb,
        };
      }
      data = resetData(data, 'Dag2.txt');
    }
  }
};

ansPart2 = searchOutput(19690720, data);
console.log(100 * parseInt(ansPart2.noun) + parseInt(ansPart2.verb));
