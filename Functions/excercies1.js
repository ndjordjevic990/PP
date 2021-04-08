// **************************************************************************
// TASK 1. Write a program that calculates the maximum of two given numbers.
// **************************************************************************

function maxNum(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(maxNum(9, 8));

// **************************************************************************
// // TASK 2. Write a program that checks if a given number is odd.
// **************************************************************************

function isOdd(a) {
  if (a % 2 == 1) {
    return "The number is odd";
  } else {
    return "The number is even";
  }
}
console.log(isOdd(6));

// **************************************************************************
// // TASK 3. Write a program that checks if a given number is a three digit long number.
// **************************************************************************

function isThreeDigit(num) {
  if ((num >= 100 && num <= 999) || (num <= -100 && num >= -999)) {
    return "three digit number";
  } else {
    return "not three digit number";
  }
}

console.log(isThreeDigit(-100));

// drugi način

function isThreeDigit(num) {
  if (
    (num / 10 >= 10 && num / 10 < 100) ||
    (num / 10 <= -10 && num / 10 > -100)
  ) {
    return "three digit number";
  } else {
    return "not three digit number";
  }
}

console.log(isThreeDigit(-52));

// **************************************************************************
// TASK 4. Write a program that calculates an arithmetic mean of four numbers.
// **************************************************************************

function aritMean() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum / 4;
}

console.log(aritMean(2, 4, 6, 8));

// **************************************************************************
// TASK 5. Write a program that draws a square of a given size. For example, if the size of square is 5 the program should draw:
// *****
// *   *
// *   *
// *   *
// *****
// **************************************************************************

function drawSquare(n) {
  var square = "";
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (i === 0 || i === n - 1) {
        square += "* ";
      } else if (j === 0 || j === n - 1) {
        square += "* ";
      } else {
        square += "  ";
      }
    }
    square += "\n";
  }
  return square;
}

var square1 = drawSquare(5);
console.log(square1);

// **************************************************************************
// TASK 6. Write a program that draws a horizontal chart representing three given values. For
// example, if values are 5, 3, and 7, the program should draw:
// * * * * *
// * * *
// * * * * * * *
// **************************************************************************

function print(x, y, z) {
  var prviRed = "";
  var drugiRed = "";
  var treciRed = "";
  for (var i = 0; i < x; i++) {
    prviRed += "* ";
  }
  for (var i = 0; i < y; i++) {
    drugiRed += "* ";
  }
  for (var i = 0; i < z; i++) {
    treciRed += "* ";
  }
  var result = prviRed + "\n" + drugiRed + "\n" + treciRed;
  return result;
}

console.log(print(5, 3, 7));

// drugi optimalniji način

function print() {
  var result = "";
  var numOfArgs = arguments.length;

  for (var i = 0; i < numOfArgs; i++) {
    for (var j = 0; j < arguments[i]; j++) {
      result += "* ";
    }
    result += "\n";
  }

  return result;
}

console.log(print(5, 3, 7, 8, 5, 10));

// **************************************************************************
// TASK 7. Write a program that calculates a number of digits of a given number.
// **************************************************************************

function numDig(a) {
  var brojcifara = 0;
  if (a >= 0) {
    brojcifara++;
  }
  while (a / 10 >= 1) {
    a /= 10;
    brojcifara++;
  }
  return brojcifara;
}
console.log(numDig(55555));

// **************************************************************************
// TASK 8. Write a program that calculates a number of appearances of a given number in a given array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7.
// Result: 3
// **************************************************************************

var a = [2, 4, 7, 8, 7, 7, 1];

function numApp(e) {
  var c = 0;
  for (var i = 0; i < a.length; i++) {
    if (a[i] === e) {
      c++;
    }
  }
  return c;
}

console.log(numApp(5));

// **************************************************************************
// TASK 9. Write a program that calculates the sum of odd elements of a given array.
// **************************************************************************

function sumOfOdd(a) {
  var sum = 0;
  for (var i = 0; i < a.length; i++) {
    if (a[i] % 2 === 1) {
      sum += a[i];
    }
  }
  return sum;
}
console.log(sumOfOdd([2, 4, 6, 7, 8, 9, 1, 2]));

// drugi način

function sumOfOdd() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i] % 2 === 1) {
      sum += arguments[i];
    }
  }
  return sum;
}
console.log(sumOfOdd(2, 4, 6, 7, 8, 9, 1, 2));

// **************************************************************************
// TASK 10. Write a program that calculates the number of appearances of a letter a in a given string.
// Modify the program so it calculates the number of both letters a and A.
// **************************************************************************

function numOfApp(string) {
  var total = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === "a") {
      total++;
    }
  }
  return total;
}

console.log(numOfApp("ananas"));

// Part 2.

function numOfApp(string) {
  var total = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === "a" || string[i] === "A") {
      total++;
    }
  }
  return total;
}

console.log(numOfApp("anAnas"));

// odvojeno

function numOfApp(string) {
  var totalSmall = 0;
  var totalBig = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === "a") {
      totalSmall++;
      var x = "The total number of lower As is " + totalSmall;
    } else if (string[i] === "A") {
      totalBig++;
      var y = "The total number of capital As is " + totalBig;
    }
  }
  return [x, y];
}

console.log(numOfApp("anAnas"));

// **************************************************************************
// TASK 11. Write a program that concatenates a given string given number of times. For example, if “abc” and 4 are given values, the program prints out abcabcabcabc.
// **************************************************************************

function concat(a, b) {
  var final = "";
  for (var i = 1; i <= b; i++) {
    final += a;
  }
  return final;
}
console.log(concat("dabc", 3));
