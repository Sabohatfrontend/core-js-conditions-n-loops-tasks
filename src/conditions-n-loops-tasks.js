/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b && a > c) {
    return a;
  }
  if (b > a && b > c) {
    return b;
  }
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  const modX = (queen.x - king.x) ** 2;
  const modY = (queen.y - king.y) ** 2;
  return queen.x === king.x || queen.y === king.y || modX === modY;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    return a === b || a === c || b === c;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const intNum = Math.floor(num / 10);
  const reNum = num % 10;
  let romanNum = '';
  switch (intNum) {
    case 0:
      break;
    case 1:
      romanNum += 'X';
      break;
    case 2:
      romanNum += 'XX';
      break;
    case 3:
      romanNum += 'XXX';
      break;
    default:
      break;
  }
  switch (reNum) {
    case 0:
      romanNum += '';
      break;
    case 1:
      romanNum += 'I';
      break;
    case 2:
      romanNum += 'II';
      break;
    case 3:
      romanNum += 'III';
      break;
    case 4:
      romanNum += 'IV';
      break;
    case 5:
      romanNum += 'V';
      break;
    case 6:
      romanNum += 'VI';
      break;
    case 7:
      romanNum += 'VII';
      break;
    case 8:
      romanNum += 'VIII';
      break;
    case 9:
      romanNum += 'IX';
      break;
    default:
      break;
  }
  return romanNum;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let summary = '';
  let i = 0;
  while (i < numberStr.length) {
    switch (numberStr[i]) {
      case '-':
        summary += 'minus';
        break;
      case '0':
        summary += 'zero';
        break;
      case '1':
        summary += 'one';
        break;
      case '2':
        summary += 'two';
        break;
      case '3':
        summary += 'three';
        break;
      case '4':
        summary += 'four';
        break;
      case '5':
        summary += 'five';
        break;
      case '6':
        summary += 'six';
        break;
      case '7':
        summary += 'seven';
        break;
      case '8':
        summary += 'eight';
        break;
      case '9':
        summary += 'nine';
        break;
      case '.':
        summary += 'point';
        break;
      case ',':
        summary += 'point';
        break;
      default:
        break;
    }
    i += 1;
    if (i < numberStr.length) summary += ' ';
  }

  return summary;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 2
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let i = 0;
  while (i < str.length) {
    if (str[i] === letter) return i;
    i += 1;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let numFloor = num;
  while (numFloor) {
    if (numFloor % 10 === digit) return true;
    numFloor = Math.floor(numFloor / 10);
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let sumLeft = arr[0];
  let sumRight = 0;
  for (let j = 1; j < arr.length; j += 1) sumRight += arr[j];
  for (let i = 1; i < arr.length; i += 1) {
    sumRight -= arr[i];
    if (sumLeft === sumRight) return i;
    sumLeft += arr[i];
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(/* size */) {
  throw new Error('Not implemented');
  // let upper = 0;
  // let lower = size - 1;
  // let left = 0;
  // let right = size - 1;
  // let i = 0;
  // let j = 0;
  // const result = Array.from({ size }, () => []);
  // let value = 1;

  // while (true) {
  //   upper += 1;
  //   if (upper > lower) break;

  //   for (; j < right; j += 1) {
  //     result[i][j] = value;
  //     value += 1;
  //   }
  //   right -= 1;
  //   if (right < left) break;

  //   for (; i < lower; i += 1) {
  //     result[i][j] = value;
  //     value += 1;
  //   }
  //   lower -= 1;
  //   if (lower < upper) break;

  //   for (; j > left; j -= 1) {
  //     result[i][j] = value;
  //     value += 1;
  //   }
  //   left += 1;
  //   if (left > right) break;

  //   for (; i > upper; i -= 1) {
  //     result[i][j] = value;
  //     value += 1;
  //   }
  // }

  // result[i][j] = value;
  // return result;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(/* matrix */) {
  throw new Error('Not implemented');
  // const leni = matrix.length;
  // const lenj = matrix[0].length;
  // const newMatrix = [];
  // for (let i = 0; i < lenj; i += 1) {
  //   newMatrix.push([]);
  // }
  // for (let i = 0; i < leni; i += 1) {
  //   for (let j = 0; j < lenj; j += 1) {
  //     newMatrix[j][leni - 1 - i] = matrix[i][j];
  //   }
  // }
  // return [
  //   [7, 8, 9],
  //   [4, 5, 6],
  //   [1, 2, 3],
  // ];
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  let min;
  const newArr = arr;
  for (let i = 0; i < newArr.length; i += 1) {
    for (let j = i + 1; j < newArr.length; j += 1) {
      if (newArr[i] > newArr[j]) {
        min = newArr[i];
        newArr[i] = newArr[j];
        newArr[j] = min;
      }
    }
  }
  return newArr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(/* str, iterations */) {
  // const len = str.length;
  // let str1 = str.slice(1, len - 1);
  // let j = iterations;
  // let newStr;
  // let newStr1;

  // while (j) {
  //   newStr = '';
  //   newStr1 = '';
  //   let i = 0;
  //   while (i < len - 2) {
  //     newStr += str1[i];
  //     if (str1[i + 1]) newStr1 += str1[i + 1];
  //     i += 2;
  //   }
  //   str1 = newStr1 + newStr;
  //   j -= 1;
  // }
  // return str[0] + str1 + str[len - 1];
  throw new Error('Not implemented');
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(num) {
  let n1 = num;
  let number = [];
  let i;
  while (n1) {
    number.unshift(n1 % 10);
    n1 = Math.floor(n1 / 10);
  }
  const n = number.length;
  for (i = n - 1; i >= 0; i -= 1) {
    if (number[i] > number[i - 1]) break;
  }
  if (i === 1 && number[i] <= number[i - 1]) {
    return num;
  }
  let x = number[i - 1];
  let smallest = i;

  for (let j = i + 1; j < n; j += 1) {
    if (number[j] > x && number[j] < number[smallest]) smallest = j;
  }
  const temp = number[smallest];
  number[smallest] = number[i - 1];
  number[i - 1] = temp;
  x = 0;
  for (let j = 0; j < i; j += 1) x = x * 10 + number[j];
  number = number.splice(i, number.length + 1);
  number.sort();
  for (let j = 0; j < n - i; j += 1) x = x * 10 + number[j];
  return x;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
