import { readFileSync } from 'fs';

var data = readFileSync('Dag2.txt', 'utf8').split(',');
const test_data = [1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50];

function IntCodeCompiler(data) {
  var stap = 4;
  var opcode = 0;

  while (data[opcode] != 99) {
    var input1 = data[opcode + 1];
    var input2 = data[opcode + 2];
    var output = data[opcode + 3];

    if (data[opcode] == 1) {
      data[output] = parseInt(data[input1]) + parseInt(data[input2]);
    } else if (data[opcode] == 2) {
      data[output] = parseInt(data[input1]) * parseInt(data[input2]);
    }

    opcode += stap;
  }

  console.log(data);
}

IntCodeCompiler(data);
