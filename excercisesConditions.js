/* TASK 1. Write a program that compares two numbers and display the larger. Result should be displayed in the console. */

var a = 2;
var b = 3;

if (a > b) {
    console.log(a)
} else if (b > a) {
    console.log(b)
} else {
    console.log("equal")
}

// drugi način

var x = 21;
var y = 7;
var message;

if (x > y) {
    message = "Number " + x + " is larger then " + y;
} else if (y > x) {
    message = "Number " + y + " is larger then " + x
} else {
    message = "Numbers are equal"
}
console.log(message)

// // TASK 2. Write a program to check if the number is divisible by 2. If it is, print even, if not, print odd. Sample numbers: 3, 4, 9 (check one at the time) Output: odd, even, odd

var c = 9;
if (c % 2 === 0) {
    console.log("even")
} else {
    console.log("odd")
}

// drugi način
var num1 = 9;
var num2 = 4;
var num3 = 3;
var message = "";

if (num1 % 2 === 0) {
    message = "Number " + num1 + " is even\n";
} else {
    message = "Number " + num1 + " is odd\n";
}

if (num2 % 2 === 0) {
    message = "Number " + num2 + " is even\n";
} else {
    message = "Number " + num2 + " is odd\n";
}

if (num3 % 2 === 0) {
    message = "Number " + num3 + " is even\n";
} else {
    message = "Number " + num3 + " is odd\n";
}

console.log(message);


// // TASK 3. Write a program to check if the number is divisible by 3 and 5. If it is, print that number.

var d = 15;
if (d % 3 === 0 && d % 5 === 0) {
    console.log(d)
} else {
    console.log("NOT")
};

// drugi način

var num = 4;
var result = "";

if (num % 3 === 0) {
    if (num % 5 === 0) {
        result = num + " is divisible by 3 and 5";
    } else {
        result = num + " is divisible by 3 but not by 5";
    }
} else if (num % 5 === 0) {
    if (num % 3 === 0) {
        result = num + " is divisible by 3 and 5";
    } else {
        result = num + " is divisible by 5 but not by 3";
    }
} else {
    result = num + " is not divisible by 3 and 5";
}

console.log(result)

// treci način

var num2 = 25;
var result = "";

if (num2 % 3 === 0 && num2 % 5 === 0) {
    result = num2 + " is divisible by 3 and 5"
} else if (num2 % 3 == 0) {
    result = num2 + " is dibisible by 3 but not by 5"
} else if (num2 % 5 === 0) {
    result = num2 + " is not divisible by 3 but is divisible by 5"
} else {
    result = num2 + " is not divisible by 3 or 5"
}
console.log(result)

// TASK 4. Write a conditional statement to find the sign of product of three numbers. Display the result in the console with the specified sign.

var e = 3;
var f = -7;
var g = 2;

if (e > 0 && f > 0 && g > 0) {
    console.log("The sign is +")
} else if (e < 0 && f < 0 && g > 0) {
    console.log("The sign is +")
} else if (e < 0 && f > 0 && g < 0) {
    console.log("The sign is +")
} else if (e > 0 && f < 0 && g < 0) {
    console.log("The sign is +")
} else console.log("The sign is -")

// drugi način

if (a * b * c > 0) {
    console.log("+")
} else {
    console.log("-")
}



// TASK 5. Write a program to check if the variable is a number. If it’s a number, check if it is divisible by 2. If it is, print the result, if not, show “X” ; Sample numbers: 10 | 7 (check one at the time) Output: 10 / 2 = 5 | X

var h = 7
if (typeof h === "number" && h % 2 === 0) {
    console.log(h / 2)
} else {
    console.log("X")
}

// TASK 6. Write a conditional statement to find the largest of five numbers. Display the result in console. Sample numbers: -5, -2, -6, 0, -1 Output: 0

var i = -5;
var j = -2;
var k = -6;
var l = 0;
var m = -1;

if (i > j && i > k && i > l && i > m) {
    console.log(i)
} else if (j > i && j > l && j > k && j > m) {
    console.log(j)
} else if (k > i && k > j && k > l && k > m) {
    conosle.log(k)
} else if (l > i && l > j && l > k && l > m) {
    console.log(l)
} else if (m > i && m > j && m > k && m > l) {
    console.log(m)
}

//drugi način

if (i > j && i > k && i > l && i > m) {
    console.log(i)
} else if (j > l && j > k && j > m) {
    console.log(j)
} else if (k > l && k > m) {
    conosle.log(k)
} else if (l > m) {
    console.log(l)
} else {
    console.log(m)
}

// treci način

var max = i;

if (j > max) {
    max = j;
}

if (k > max) {
    max = k;
}
if (l > max) {
    max = l;
}
if (m > max) {
    max = m;
}

console.log(max)

// TASK 7. Write a conditional statement to sort three numbers. Sample numbers : 0, -1, 4 Output : 4, 0, -1

var n = 0;
var p = 4;
var r = -1;

if (n > p && n > r) {
    if (p > r) {
        console.log(n + ", " + p + ", " + r)
    }
    else if (r > p) {
        console.log(n + ", " + r + ", " + p)
    }
}

else if (p > n && p > r) {
    if (n > r) {
        console.log(p + ", " + n + ", " + r)
    } else if (r > n) {
        console.log(p + ", " + r + ", " + n)
    }
}
else if (r > n && r > p) {
    if (n > p) {
        console.log(r + ", " + n + ", " + p)
    } else if (p > n) {
        console.log(r + ", " + p + ", " + n)
    }
}


// drugi način

if (n > p && p > r) {
    if (p > r) {
        console.log(n, p, r);
        else {
            console.log(n, r, p)
        }
    }
} else if (p > n && p > r) {
    if (n > r) {
        console.log(p, n r);
        else {
            console.log(p, r, n)
        }
    } else if (n > p) {
        console.log(r, p, n)
    } else {
        console.log(r, p, n)
    }
}
