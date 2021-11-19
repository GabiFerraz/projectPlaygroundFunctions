// Desafio 1
function compareTrue(parameter1, parameter2) {
  if (parameter1 && parameter2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let triangleArea = 0;
  if ((triangleArea = (base * height) / 2)) {
    return triangleArea;
  }
}

// Desafio 3
function splitSentence(string) {
  return (string = string.split(' ')); // .split é um método que vai separar (dividir) a string transformando em array: https://blog.betrybe.com/javascript/javascript-split/
}

// Desafio 4
function concatName(arrayString) {
  let arrayFinal = [arrayString[arrayString.length - 1], arrayString[0]];
  return arrayFinal.join(', '); // .join é um método que transforma array em string: https://www.w3schools.com/jsref/jsref_join.asp
}

// Desafio 5
function footballPoints(wins, ties) {
  let victory = 3;
  let draw = 1;
  return wins * victory + ties * draw;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let higherNumber = arrayNumbers[0];
  let repeatedNumber = 0;

  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (higherNumber < arrayNumbers[i]) {
      higherNumber = arrayNumbers[i];
    }
  }
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] === higherNumber) {
      repeatedNumber += 1;
    }
  }
  return repeatedNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceMouseCat1 = Math.abs(mouse - cat1); // Math.abs inverte quando é negativo e mantêm o positivo. Então eu tenho que usar ele para garantir que o resultado seja positivo.
  let distanceMouseCat2 = Math.abs(mouse - cat2); // Li sobre o Math.abs no https://www.w3schools.com/java/ref_math_abs.asp
  if (distanceMouseCat1 > distanceMouseCat2) {
    return 'cat2';
  } else if (distanceMouseCat1 < distanceMouseCat2) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let array = [];
  for (let i of arrayNumbers) {
    if (i % 3 === 0 && i % 5 === 0) {
      array.push('fizzBuzz');
    } else if (i % 5 === 0) {
      array.push('buzz');
    } else if (i % 3 === 0) {
      array.push('fizz');
    } else {
      array.push('bug!');
    }
  }
  return array;
}

// Desafio 9
function encode(string) {
  let letter = string.split('');
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === 'a') {
      letter[i] = '1';
    } else if (string[i] === 'e') {
      letter[i] = '2';
    } else if (string[i] === 'i') {
      letter[i] = '3';
    } else if (string[i] === 'o') {
      letter[i] = '4';
    } else if (string[i] === 'u') {
      letter[i] = '5';
    }
  }
  return letter.join('');
}

function decode(stringNumbers) {
  let number = stringNumbers.split('');
  for (let i = 0; i < stringNumbers.length; i += 1) {
    if (stringNumbers[i] === '1') {
      number[i] = 'a';
    } else if (stringNumbers[i] === '2') {
      number[i] = 'e';
    } else if (stringNumbers[i] === '3') {
      number[i] = 'i';
    } else if (stringNumbers[i] === '4') {
      number[i] = 'o';
    } else if (stringNumbers[i] === '5') {
      number[i] = 'u';
    }
  }
  return number.join('');
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
