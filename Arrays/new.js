console.log(10 * "Abc");

var array = ["abcd", "ef", "ghi", "jkl"];
console.log(array[2]);

console.log(2 < 3 + 5);

var x;
console.log(x);

var a = [2, 3, "abc", 11, -7];
console.log(a[a.lenght - 1]);

var x = [1, 8, 9, 9, 2];
console.log(x[13]);

var a = 10,
  b = 5;
var result = a || b++;
console.log(a, b);
// lazy evaluation : prvo proveri a = 10 i njegova boolean vrednost je True tako da ce result ici do a tj. true i nece se uopste izvrsavati drugi deo iza ||

var n = 10;
n *= 4;
console.log(n);

var x = 1,
  y = 3,
  z = 8;
x = y = z = 8;
console.log(x, y, z);

var x = 10;
var y = 5;
console.log(x + "y = " + x + y);

var x = 10;
var y = 5;
console.log(x + "y = " + (x + y));

console.log("312" === 312);

console.log([2, 3, 4] == [2, 3, 4]);

// 2 niza proveravamo po referenci i nisu sacuvani na istom mestu

console.log(typeof 2 + 3);

console.log(2 > 10 ? "two" : 5 > 3 ? "five" : "three");
// ternarni operator

var array = ["s", "c", "r", "i", "p", "t"];
array.length = 0;
console.log(array);

var input = 0xa41;
console.log(typeof input);

console.log("312" == 312);

var a = 4,
  b = 3;
if ((a = b)) {
  console.log("The numbers are equal!");
} else {
  console.log("Nope, they arent");
}

console.log(typeof typeof 1);
// ovde nije poredjenje vec mu dajemo vrednost a = b tj. izjednacavamo ih.

var a = 12;
var result = 2;

if (a > 10) {
  result = result + 2;
} else {
  result = result - 2;
}
console.log(result);

console.log("Good morning!");

console.log(2e2 + 1);

var a = [[1, 2, 3], [4, 5, 6], 8, [9, 10]];
console.log(a[3][0]);

var value = 2;
switch (value) {
  case 2:
    console.log("2");
  case 3:
    console.log("3");
  case "2":
    console.log("Hmm");
    break;

  default:
    console.log("~*~");
    break;
}
//kada jedan case postane true sve ce ispisivati sve do breaka bez dalje provere

console.log(2 < 3 < 1);
