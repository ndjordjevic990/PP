// Task 4. Write a program to check if the variable is a number and if it’s a number, check if it is divisible by 2. If it is, print the result, if not, show “X”.

var a = "safsfa";

if (typeof a == "number") {
    if (a % 2 === 0) {
        console.log("10 / 2 = 5")
    }
    else {
        console.log("X")
    }
} else {
    console.log("This is not number")
}

// Task 6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]

var c = 20;
var cToF = (9 * c / 5) + 32;
console.log(c + " C is " + cToF + " F")

// drugi način
var C = 60;
var F;

if (typeof F === "undefined") {
    F = (9 * C / 5) + 32;
} else {
    C = (F - 32) / 1.8
}

// trći način

var C = 60;
var F = 140;

var direction = "F to C"

if (direction !== "F to C") {
    console.log((9 * C / 5) + 32);
} else {
    console.log((F - 32) / 1.8);
}

// Task 7. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double difference between that number and 13.

var d = 32;
var e = d - 13;

if (d > 13) {
    console.log(e * 2)
} else if (d < 13) {
    console.log(13 - d)
}

// drugi način
var num = 11;

if (num <= 13) {
    console.log(13 - num);
} else {
    console.log((num - 13) * 2)
}



// Task 8. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.

var f = 5;
var g = 5;

if (f !== g) {
    console.log(f + g)
} else {
    console.log((f + g) * 3)
}

// Task 9. Write a JavaScript program to check two given numbers and print “true” if one of the number is 50 or if their sum is 50.

var h = 6;
var i = 50;

if (h === 50 || i === 50 || h + i === 50) {
    console.log("TRUE")
} else {
    console.log("Not true")
}

// Task 10. Write a JavaScript program to check a given integer is within 20 of 100 or 400, and print range in which number belongs.

var j = 256;

if (j < 20) {
    console.log("-")
} else if (j >= 20 && j <= 100) {
    console.log("20-100")
} else if (j > 100 && j <= 400) {
    console.log("100-400")
}