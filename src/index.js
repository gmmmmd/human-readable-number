module.exports = function toReadable (number) {
  const obj = {
    0: 'zero',
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety"
  };
  let result;
  const numTeen = obj[(number.toString().split('')[0]) + 0] + ' ' + obj[number.toString().split('')[1]];

  if (number.toString().length === 2) {
    if (number > 20 && number < 30 || number > 30 && number < 40 || number > 40 && number < 50 || number > 50 && number < 60 || number > 60 && number < 70 || number > 70 && number < 80 || number > 80 && number < 90 || number > 90 && number <= 99) {
      return numTeen;
    } else {
      return obj[number];
    }
  } else if (number.toString().length === 3) {
    let a;
    const x = number.toString().slice(1);

    if (x === '00') {
      a = '';
    } else if (x.toString().split('')[0] === '0') {
      a = obj[x.toString().slice(1)];
    } else if (x.toString().split('')[0] === '0' && x.toString().split('')[1] === '0') {
      a = ' ';
    } else if (x > 20 && x < 30 || x > 30 && x < 40 || x > 40 && x < 50 || x > 50 && x < 60 || x > 60 && x < 70 || x > 70 && x < 80 || x > 80 && x < 90 || x > 90 && x <= 99) {
      a = obj[(x.toString().split('')[0]) + 0] + ' ' + obj[x.toString().split('')[1]];
    } else {
      a = obj[x];
    }
    return (obj[(number.toString().split('')[0])] + ' ' + 'hundred' + ' ' + a).trim();
  }
  result = obj[number];
  return result;
}
