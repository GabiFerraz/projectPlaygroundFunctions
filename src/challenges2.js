// Desafio 10
function techList(arrayNamesTech, name) {
  arrayNamesTech = arrayNamesTech.sort();
  let array = [];
  if (arrayNamesTech.length === 0) {
    return 'Vazio!';
  }
  for (let i = 0; i < arrayNamesTech.length; i += 1) {
    if (arrayNamesTech.length !== 0) {
      array.push({ tech: arrayNamesTech[i], name: name });
    }
  }
  return array;
}

// Desafio 11
function generatePhoneNumber(arrayNumbers) {
  let repeatedNumber = 0;
  let stringNumbers = '';

  if (arrayNumbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] < 0 || arrayNumbers[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let i2 = 0; i2 < arrayNumbers.length; i2 += 1) {
      if (arrayNumbers[i2] === arrayNumbers[i]) {
        repeatedNumber += 1;
      }
      if (repeatedNumber >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    repeatedNumber = 0;
  }
  stringNumbers =
    '(' +
    arrayNumbers[0] +
    arrayNumbers[1] +
    ') ' +
    arrayNumbers[2] +
    arrayNumbers[3] +
    arrayNumbers[4] +
    arrayNumbers[5] +
    arrayNumbers[6] +
    '-' +
    arrayNumbers[7] +
    arrayNumbers[8] +
    arrayNumbers[9] +
    arrayNumbers[10];
  return stringNumbers;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let test =
    lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB;

  return test;
}

// Desafio 13
function hydrate(stringDrink) {
  let drink = 0;

  for (let i = 0; i < 9; i += 1) {
    for (let character of stringDrink) {
      if (Number(character) === i) {
        // Number é uma função do JS que transforma uma string em um número, li sobre no https://www.w3schools.com/jsref/jsref_number.asp
        drink += Number(character);
      }
    }
  }
  if (drink === 1) {
    return drink + ' copo de água';
  } else {
    return drink + ' copos de água';
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
