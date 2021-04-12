/*******************************************************************************************
TASK 1. Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input: e = 3, a = [5, -4.2, 18, 7]
Output: no
*******************************************************************************************/
var a = [5, -4.2, 3, 7];
var e = 3;
result = "";

function checkForElem() {
  for (var i = 0; i < a.length; i++) {
    if (a[i] === e) {
      result = "yes";
      break;
    } else {
      result = "no";
    }
  }
  return result;
}

console.log(checkForElem());

/*******************************************************************************************
TASK 2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]
*******************************************************************************************/
var a = [-3, 11, 5, 3.4, -8];
var result = [];

function multiplyPositive() {
  for (var i = 0; i < a.length; i++) {
    if (a[i] > 0) {
      result[i] = a[i] * 2;
    } else {
      result[i] = a[i];
    }
  }
  return result;
}

console.log(multiplyPositive());

/*******************************************************************************************
TASK 3. Write a program that finds the minimum of a given array and prints out its value and index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
/*******************************************************************************************/

var a = [4, 2, 2, -1, 6];
var minimum = a[0];

function findMin() {
  for (var i = 1; i < a.length; i++) {
    if (a[i] < minimum) {
      minimum = a[i];
      var index = i;
      var result = minimum + ", " + index;
    }
  }
  return result;
}
console.log(findMin());

/*******************************************************************************************
TASK 4. Write a program that finds the second smallest number and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2
/*******************************************************************************************/
var a = [4, 2, 2, -1, 6];

function nextToMin() {
  var min = a[0];
  var nextMin = Infinity;

  for (var i = 0; i < a.length; i++) {
    if (a[i] < min) {
      min = a[i];
    }
  }
  for (var i = 0; i < a.length; i++) {
    if (a[i] > min && a[i] < nextMin) {
      nextMin = a[i];
    }
  }
  return nextMin;
}

console.log(nextToMin());
