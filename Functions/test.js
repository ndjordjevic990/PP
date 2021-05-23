var isBlue = true;
var isSolid = false;
console.log(isBlue || isSolid);

function sum() {
  return arguments[0] + arguments[2];
}
var result;
result = sum(2, 5, 11, "abc");
console.log(result);
//
var s = "ab34abc";
console.log(parseInt(s));

//
var message = "JaVaScRIPT progrAMMing";
var counter = 0;
for (var i = 0; i < message.length; i++) {
  if (message[i] == "a" || message[i] == "A") {
    counter++;
  }
}
console.log(counter);

// ( funkcija cim dodje do return vraca to tj. ovde undefined)

function mul(a, b) {
  var result;
  return result;
  result = a * b;
}
var product;
product = mul(4, 5);
console.log(product);

//
for (var i = 0; i < 5; ) {
  console.log("*");
}
//(true pretvara u 1, false u 0)
console.log(2 + true);
// (funkcija koja nema return vraca undefined)
function f() {}
var result;
result = f();
console.log(result);
//
var message = "";
var n = 4;
while (n >= 0) {
  message + "*";
  n--;
}
console.log(message);

//

var result;
var n;
n = 14;
switch (n) {
  case 2:
    result = 1;
    break;
  case 4:
    result = 2;
  case 6:
    result = 3;
    break;
  default:
    result = 100;
}
console.log(result);

//

var result;
var n = 34;
if (n % 2 == 0) {
  result = n / 2;
} else {
  result = n * 2;
}
console.log(result);

//
for (var i = 3; i >= 0; i--) {
  console.log(i);
}
//
var sum = 0;
for (var i = 0; i < 10; i++) {
  if (i == 6) {
    continue;
  }
  if (i % 3 == 0) {
    sum++;
  }
}
console.log(sum);
//
var s = "34abc";
console.log(parseInt(s));

//
var isWriter = true;
console.log(!isWriter);
//??
var result;
var n;
n = 4;
switch (n) {
  case 2:
    result = 1;
    break;
  case 4:
    result = 2;
  case 6:
    result = 3;
    break;
  default:
    result = 100;
}
console.log(result);
//
var n = 5;
var numberOfodds = 0;
var i = 0;
while (i <= n) {
  if (i % 2 == 0) {
    numberOfodds++;
  }
  i++;
}
console.log(numberOfodds);
//
var a = [2, 3, 11, 5, 23, 24];
a.length = 2;
console.log(a);

//
function f(a, b) {
  return a + b;
}
var result;
result = f(4, 5);
console.log(result);

//
function mul(a, b) {
  var result;
  result = a * b;
  return result;
}
var product;
product = mul(4, 5);
console.log(product);

//

var numbers = [4, 5, 12, 9];
console.log(numbers.length);

//

var sum = 0;
for (var i = 0; i < 5; i++) {
  sum += i;
  console.log(sum);
}

//

var n = 10;
console.log(++n);
//

var array = [2, 15, 18, -4, 2];
var result = array[0];
for (var i = 1; i < array.length; i++) {
  if (array[i] > result) {
    result = array[i];
  }
}
console.log(result);
//
for (var i = 1; i < 6; i++) {
  if (i == 3 || i == 4) {
    break;
  }
  console.log(i);
}
//
var array = [];
for (var i = 0; i < 4; i++) {
  array[i] = 2 * i;
}
console.log(array);

//

var a = [2, 3, 11];
a.length = 5;
console.log(a);

//

var s = "JavaScript Programming";
var result = s[3];
console.log(result);
//

function selection(a, b, c) {
  if (a > b && a > c) {
    return a;
  }
  if (b > a && b > c) {
    return b;
  }
  if (c > a && c > b) {
    return c;
  }
}
var result;
result = selection(4, 5, 2);
console.log(result);
//
var n = 23;
n -= 2;
console.log(n);
//

var array = [];
for (var i = 0; i < 4; i++) {
  array[2 * i] = i;
  array[2 * i + 1] = i;
}
console.log(array);

function f(a, b) {
  return a + b;
}

console.log(f(12));

//

var s = "abc";
console.log(s + s);

//
for (var i = 0; i < 10; i += 2) {
  console.log(i);
}

//
function f(a, b) {
  return 1 + a + b;
}
var result;
result = f(4, 5, 32, 11);
console.log(result);
//
var a = 10;
var b = 12;
var tmp;
tmp = a;
a = b;
b = tmp;
console.log(a, b);
//

var sum = 0;
for (var i = 4; i < 8; i = i + 1) {
  sum += i;
  console.log(sum);
}

//

var description = "Do the magic";
var s = "";
for (var i = description.length - 1; i >= 0; i--) {
  s = s + description[i];
}
console.log(s);

//
var sum = 0;
for (var i = 0; i < 10; i++) {
  if (i % 3 == 0) sum++;
  if (i == 8) break;
}
console.log(sum);
