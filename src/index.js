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
  if (number < 20) {

    result = obj[number];

  } else if (number < 100) {

    if (number.toString().slice(1) === '0') {

      result = obj[number];

    } else {

      result = obj[(number.toString().split('')[0]) + 0] + ' ' + obj[number.toString().split('')[1]];

    }
  } else if (number < 1000) {

    const sliceNum = number.toString().slice(1);

    if (sliceNum.toString() === '00') {

      result = obj[(number.toString().split('')[0])] + ' ' + 'hundred';

    } else if (sliceNum.toString().split('')[0] === '0') {

      result = obj[(number.toString().split('')[0])] + ' ' + 'hundred' + ' ' + (obj[sliceNum.toString().slice(1)]);

    } else if (sliceNum.toString().split('')[1] === '0') {

      result = obj[(number.toString().split('')[0])] + ' ' + 'hundred' + ' ' + (obj[sliceNum.toString()]);

    } else {
      
      if (sliceNum < 20) {

        result = obj[(number.toString().split('')[0])] + ' ' + 'hundred' + ' ' + obj[sliceNum];

      } else {

        result = obj[(number.toString().split('')[0])] + ' ' + 'hundred' + ' ' + (obj[(sliceNum.toString().split('')[0]) + 0] + ' ' + obj[sliceNum.toString().split('')[1]]);

      }
    }
  }
  return result;
}
