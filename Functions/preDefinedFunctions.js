/************************************************************************************* */
// TASK 1. Write a function that converts an array of strings into an array of numbers. Filter
// out all non-numeric values.
// Input: ["1", "21", undefined, "42", "1e+3", Infinity]
// Output: [1, 21, 42, 1000]
//************************************************************************************* */

var a = ["1", "21", undefined, "42", "1e+3", Infinity];
var result = [];
var j = 0;

function convert() {
  for (var i = 0; i < a.length; i++) {
    if (isFinite(a[i]) === true) {
      result[j] = parseFloat(a[i]);
      j++;
    }
  }
  return result;
}

console.log(convert());

/************************************************************************************* */
// TASK 2. Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.
// Input: [NaN, 0, 15, false, -22, "", undefined, 47, null]
// Output: "015false-2247"

/************************************************************************************* */
var a = [NaN, 0, 15, false, -22, "", undefined, 47, null];
var result = "";

function join() {
  for (var i = 0; i < a.length; i++) {
    if (isFinite(a[i]) === true && a[i] !== null) {
      result += a[i];
    }
  }
  return result;
}

console.log(join());

// console.log(isFinite(false));
// console.log(parseFloat(null));

// var a = [NaN, 0, 15, false, -22, "", undefined, 47, null];
// console.log(parseFloat(a[3]));
// console.log(parseFloat(a[3]) !== NaN);

/************************************************************************************* */
/* TASK 3. Write a program to filter out falsy values from the array.
/* Input: [NaN, 0, 15, false, -22, "", undefined, 47, null]
/* Output: [15, -22, 47]
/*
/************************************************************************************* */
var a = [NaN, 0, 15, false, -22, "", undefined, 47, null];
var result = [];
var j = 0;

function filter() {
  for (var i = 0; i < a.length; i++) {
    if (isFinite(a[i]) === true && parseInt(a[i]) === a[i] && a[i] !== 0) {
      result[j] = a[i];
      j++;
    }
  }
  return result;
}

console.log(filter());

// console.log(isNaN(null));
// console.log(parseInt(-22));

/************************************************************************************* */
// TASK 4. Write a program that calculates a number of integer values in the array.
// Input: [NaN, 23.1, 15, false, -22.5, "", 4, 7, null]
// Output: 3
/************************************************************************************* */
var a = [NaN, 23.1, 15, false, -22.5, "", 4, 7, null];
var j = 0;

function integers() {
  for (var i = 0; i < a.length; i++) {
    if (parseInt(a[i]) === a[i]) {
      j++;
    }
  }
  return j;
}
console.log(integers());

/************************************************************************************* */
// TASK 5. Write a program that calculates a number of float values in the array.
// Input: [NaN, 23.1, 15, false, -22.5, "", 4, 7, null]
// Output: 2
/************************************************************************************* */
var a = [NaN, 23.1, 15, false, -22.5, "", 4, 7, null];
var j = 0;

function integers() {
  for (var i = 0; i < a.length; i++) {
    var converted = parseFloat(a[i]);
    if (isFinite(converted)) {
      if (converted !== parseInt(a[i])) {
        j++;
      }
    }
  }
  return j;
}

console.log(integers());
// console.log(parseFloat(a[i]), parseInt(a[i]));
