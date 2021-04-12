/*******************************************************************************************
TASK 1. Find the min and max element in the following array and switch their places. Print out the modified array in the console.
Input: [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]
/*******************************************************************************************/
var a = [3, 500, 12, 149, 53, 414, 1, 19];
var min = a[0];
var max = a[0];
var minindex;
var maxindex;

function switchPlaces() {
  for (var i = 1; i < a.length; i++) {
    if (a[i] < min) {
      min = a[i];
      minindex = i;
    }
    if (a[i] > max) {
      max = a[i];
      maxindex = i;
    }
  }
  a[minindex] = max;
  a[maxindex] = min;
  return a;
}

console.log(switchPlaces());

/*******************************************************************************************
TASK 2. Use the following array to make a new one by dividing its values by two and adding 5. If a given elements value is 0, change it to 20.
Input: [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]
/*******************************************************************************************/
var a = [3, 500, -10, 149, 53, 414, 1, 19];

function divideAndAdd() {
  for (var i = 0; i < a.length; i++) {
    if (a[i] / 2 + 5 === 0) {
      a[i] = 20;
    } else {
      a[i] = a[i] / 2 + 5;
    }
  }
  return a;
}

console.log(divideAndAdd());

/*******************************************************************************************
TASK 3. Initialize two arrays. The first one should contain student names, the second one the
number of points for each student. Display students&#39; names with their corresponding
grade. Use the following ranges:
51-60 --> 6,
61-70 --> 7,
71-80 --> 8,
81-90 --> 9,
91-100 --> 10.
Input:
["Michael", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"], [50, 39, 63, 72, 99,
    51, 83, 59]
Output:
Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete
the exam.
/*******************************************************************************************/
var names = [
  "Michael",
  "Anne",
  "Frank",
  "Joe",
  "John",
  "David",
  "Mark",
  "Bill",
];
var points = [50, 39, 63, 72, 99, 51, 83, 59];
var result = "";

function showResults() {
  for (var i = 0; i < names.length; i++) {
    if (points[i] < 51) {
      result +=
        names[i] +
        " accuired " +
        points[i] +
        " points and failed to complete the exam.\n";
    } else if (points[i] > 50 && points[i] <= 60) {
      result += names[i] + " accuired " + points[i] + " and earned 6.\n";
    } else if (points[i] > 60 && points[i] <= 70) {
      result += names[i] + " accuired " + points[i] + " and earned 7.\n";
    } else if (points[i] > 70 && points[i] <= 80) {
      result += names[i] + " accuired " + points[i] + " and earned 8.\n";
    } else if (points[i] > 80 && points[i] <= 90) {
      result += names[i] + " accuired " + points[i] + " and earned 9.\n";
    } else if (points[i] > 90 && points[i] <= 100) {
      result += names[i] + " accuired " + points[i] + " and earned 10.\n";
    }
  }
  return result;
}

console.log(showResults());

/*****************************************************************************************
TASK 4. (skip :))Sort a previously defined array. Place its sorted values into a new array whose values are equivalent to the first arrays values multiplied by 2.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]
/*****************************************************************************************/
var a = [13, 11, 15, 5, 6, 1, 8, 12];
var newArray = [];
var position = 0;

function sortArray(a) {
  for (var i = 0; i < a.length - 1; i++) {
    position = i;
    for (var j = i + 1; j < a.length; j++) {
      if (a[position] > a[j]) {
        position = j;
      }
    }
    if (position != i) {
      var pomocna = a[i];
      a[i] = a[position];
      a[position] = pomocna;
    }
  }
  for (var i = 0; i < a.length; i++) {
    newArray[i] = a[i] * 2;
  }
  return newArray;
}

console.log(sortArray(a));

// DRUGI NAČIN

var a = [13, 11, 15, 5, 6, 1, 8, 12];
var newArray = [];

function sortArray() {
  var minElement = a[0];
  var position = 0;
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a.length; j++) {
      if (a[j] !== undefined) {
        if (a[j] < minElement) {
          minElement = a[j];
          position = j;
        }
      }
    }
    newArray[i] = minElement * 2;
    a[position] = undefined;
    minElement = Infinity;
  }
  return newArray;
}

console.log(sortArray());

/*****************************************************************************************
TASK 5. /*(skip :))Sort a previously defined array in a descending order and display it in the
console.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 15, 13, 12, 11, 8, 6, 5, 1 */
/*****************************************************************************************/
var a = [13, 11, 15, 5, 6, 1, 8, 12];
var newArray = [];
var position = 0;

function sortArray(a) {
  for (var i = 0; i < a.length - 1; i++) {
    position = i;
    for (var j = i + 1; j < a.length; j++) {
      if (a[position] < a[j]) {
        position = j;
      }
    }
    if (position != i) {
      var pomocna = a[i];
      a[i] = a[position];
      a[position] = pomocna;
    }
  }
  return a;
}

console.log(sortArray(a));
/*****************************************************************************************
TASK 6. Write a program that uses a loop to add all the even numbers from 1 to 1000 and
subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then
be multiplied by 12.5 and displayed in console.
Output: 2350000
/****************************************************************************************/

function showNumber() {
  var sum = 0;
  for (var i = 1; i <= 1000; i++) {
    if (i % 2 === 0) {
      sum += i;
    } else if (i % 2 !== 0 && i <= 500) sum -= i;
  }
  sum *= 12.5;
  return sum;
}

console.log(showNumber());

/*****************************************************************************************
TASK 7. Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
Input: ["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"]
Output: AnStJoJoDaMa
*****************************************************************************************/

var a = ["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"];
var result = "";

function takeTwoLetters() {
  for (var i = 0; i < a.length; i++) {
    if (typeof a[i] === "string" && a[i].length >= 2) {
      result += a[i][0] + a[i][1];
    }
  }
  return result;
}

console.log(takeTwoLetters());

/*****************************************************************************************
TASK 8. Write a program that takes a string and prints its characters out in reversed order in the console.
Input: Belgrade Institute of Technology
Output: ygolonhceT fo etutitsnI edargleB
/*****************************************************************************************/
var string = "Belgrade Institute of Technology";
var newString = "";

function reverseIt() {
  for (var i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}

console.log(reverseIt());

/*****************************************************************************************
TASK 9. Write a program that displays all the combinations of two numbers between 1 and 7.
Dont display two of the same numbers at the same time. Display the number of possible
combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).
/*****************************************************************************************/

function combination() {
  var array = [];
  var sum = 0;
  for (var i = 1; i <= 7; i++) {
    for (var j = 1; j <= 7; j++) {
      if (i !== j) {
        array[array.length] = [i, j];
        sum++;
      }
    }
  }
  array[array.length] = sum;
  return array;
}

console.log(combination());

/*****************************************************************************************
TASK 10. Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
Input: 17 | 15
Output: true | false
/*****************************************************************************************/
function primeNumber(number) {
  if (number <= 1) {
    return false;
  } else if (number > 1) {
    for (var i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
  }
  return true;
}

console.log(primeNumber(17));
/*****************************************************************************************
TASK 11. Check if a given string is a palindrome (spaces are ignored).
Input: eye | Geek | a nut for a jar of tuna
Output: true | false | true
/*****************************************************************************************/
function palindrome(string) {
  var reverse = "";
  var stringMod = "";
  for (var i = string.length - 1; i >= 0; i--) {
    if (string[i] !== " ") {
      reverse += string[i];
    }
  }
  for (var j = 0; j < string.length; j++) {
    if (string[j] !== " ") {
      stringMod += string[j];
    }
  }
  if (stringMod === reverse) {
    return true;
  }
  return false;
}

console.log(palindrome("eye"));
console.log(palindrome("Geek"));
console.log(palindrome("a nut for a jar of tuna"));

/*****************************************************************************************
TASK 12. Write a program that calculates the greatest common divisor of two integers. Note: The greatest common divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.
Input: 192 42 | 81 9
Output: 6 | 9
/*****************************************************************************************/
function greatestCommonDivisor(int1, int2) {
  var divisor = 0;
  var minNum = int1;
  if (int2 <= int1) {
    minNum = int2;
  }

  for (var i = 1; i <= minNum; i++) {
    if (int1 % i === 0 && int2 % i === 0) {
      divisor = i;
    }
  }
  return divisor;
}

console.log(greatestCommonDivisor(192, 42));
console.log(greatestCommonDivisor(81, 9));
