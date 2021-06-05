// TASK 1. Write a program that checks if a given element e is in the array a.
// Input: e = 3, a = [5, -4.2, 3, 7]
// Output: yes
// Input: e = 3, a = [5, -4.2, 18, 7]
// Output: no

var e = 3;
var a = [5, -4.2, 3, 7];
var b = 0;
var x = "";

for (var i = 0; i < a.length; i++) {
  b = a[i];
  if (e === b) {
    x = "yes";
    break;
  } else {
    x = "no";
  }
}
console.log(x);

// Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

var a = [-3, 11, 5, 3.4, -8];
var b = [];

var i = 0;

while (i < a.length) {
  if (a[i] > 0) {
    b[i] = 2 * a[i];
  } else {
    b[i] = a[i];
  }
  i++;
}
console.log(a);

// TASK 3. Write a program that finds the minimum of a given array and prints out its value and
// index.
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

var a = [4, 2, 2, -1, 6];
var minimum;
minimum = a[0];

for (var i = 1; i < a.length; i++) {
  if (a[i] < minimum) {
    minimum = a[i];
    var index = i;
  }
}

console.log(minimum + ", " + index);

// TASK 4. Write a program that finds the first element larger than minimum and prints out its value.
// Input array: [4, 2, 2, -1, 6]
// Output: 2

var a = [4, 2, 2, -1, 6];
var minimum = a[0];
var minimum2 = a[1];
var pom;

for (var i = 1; i < a.length; i++) {
  if (a[i] < minimum) {
    minimum = a[i];
    pom = a[0];
    a[0] = a[i];
    a[i] = pom;
  }
}
console.log(a);

for (var j = 1; j < a.length; j++) {
  if (a[j] < minimum2) {
    minimum2 = a[j];
  }
}
console.log(minimum2);

// Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16

var a = [3, 11, -5, -3, 2];
var sum = 0;

for (var i = 0; i < a.length; i++) {
  if (a[i] > 0) {
    sum += a[i];
  }
}
console.log(sum);

// Write a program that checks if a given array is symmetric. An array is symmetric if it can
// be read the same way both from the left and the right hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.
// Input array: [3, 4, 12, 8]
// Output: The array isn’t symmetric.

var arr = [2, 3, -2, 7, -2, 4, 2];

var result = true;
for (var start = 0, end = arr.length - 1; start < end; start++, end--) {
  if (arr[start] !== arr[end]) {
    result = false;
  }
}
result
  ? console.log("array is symetric")
  : console.log("array is not symetric");
// TASK 7. Write a program that intertwines two arrays. You can assume the arrays are of the same
// length.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]

var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];
var c = [];
var j;

for (var i = 0; i < a.length; i++) {
  j = 2 * i;
  c[j] = a[i];
  c[j + 1] = b[i];
}

console.log(c);

// TASK 9. Write a program that deletes a given element e from the array a.
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]
// Output array: [4, 6, 8]

var a = [4, 6, 2, 8, 2, 2];
var e = 2;
var result = [];
var j = 0;

for (var i = 0; i < a.length; i++) {
  if (a[i] !== e) {
    result[j] = a[i];
    j++;
  }
}
console.log(result);

// TASK 10. Write a program that inserts a given element e on the given position p in the array a. If
// the value of the position is greater than the array length, print the error message.
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]

var e = 78;
var p = 3;
var a = [2, -2, 33, 12, 5, 8];
var n = [];
var j;

for (var i = 0; i < a.length; i++) {
  while (i !== p) {
    n[j] = a[i];
  }
}
console.log(n);
