// TASK 0. Write a program that will iterate from 0 to 10 and display squares of numbers.

for (var x = 0; x < 10; x++) {
  console.log(x * x);
}

// TASK 1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

for (var i = 0; i <= 15; i++) {
  if (i === 0) {
    console.log(i + " is even number");
  } else if (i % 2 === 0) {
    console.log(i + " is even number");
  } else {
    console.log(i + " is odd number");
  }
}

// TASK 2: Write a program to sum the multiples of 3 and 5 under 1000.
var sum = 0;
for (var x = 0; x < 1000; x++) {
  if (x % 3 === 0 || x % 5 === 0) {
    sum += x;
  }
}
console.log(sum);

// TASK 3. Write a program to compute the sum and product of an array of integers.

var a = [1, 2, 3, 4, 5, 6];
var sum = 0;
var mult = 1;

for (var i = 0; i < a.length; i++) {
  sum += a[i];
  mult *= a[i];
}
console.log(sum);
console.log(mult);

// TASK 4. Write a program which prints the elements of the following array as a single string. var x = ["1", "A", "B", "c", "r", true, NaN, undefined];

var x = ["1", "A", "B", "c", "r", true, NaN, undefined];

for (var i = 0; i < x.length; i++) {
  console.log(x[i]);
}

// TASK 5. Write a program that prints the elements of the following array.
// var a = [
//   [1, 2, 1, 24],
//   [8, 11, 9, 4],
//   [7, 0, 7, 27],
// ];

var a = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
];

// for (var i = 0; i < a.length; i++) {
//   console.log(a[i]);
// }

for (var i = 0; i < a.length; i++) {
  for (var j = 0; j < a[i].length; j++) {
    console.log(a[i][j]);
  }
}

// drugi način
var a = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
];
var result = "";

for (var i = 0; i < a.length; i++) {
  for (var j = 0; j < a[i].length; j++) {
    result += a[i][j] + "\t";
  }
  result += "\n";
}

console.log(result);

// TASK 6. Write a program that outputs the sum of squares of the first 20 numbers.

var sum = 0;

for (var i = 1; i <= 20; i++) {
  sum += i * i;
}
console.log(sum);

// TASK 7: Write a program that computes average marks of the following students. Then use this average to determine the corresponding grade.

var y = [80, 77, 88, 95, 68];
var sum = 0;

for (var i = 0; i < y.length; i++) {
  sum += y[i];
}
// console.log(sum)

var average = sum / i;
console.log(average);

if (average < 60) {
  console.log("F");
} else if (average >= 60 && average < 70) {
  console.log("D");
} else if (average >= 70 && average < 80) {
  console.log("C");
} else if (average >= 80 && average < 90) {
  console.log("B");
} else if (average >= 90 && average < 100) {
  console.log("A");
}

// TASK 8. Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print &quot;Fizz&quot; instead of the number, and for numbers divisible by 5 (and not 3), print &quot;Buzz&quot; instead. When you have that working, modify your program to print &quot;FizzBuzz&quot;, for numbers that are divisible by both 3 and 5 (and still print &quot;Fizz&quot; or &quot;Buzz&quot; for numbers divisible by only one of those).
// Note: This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you’ve solved it, you’re now allowed to feel good about yourself.

for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
