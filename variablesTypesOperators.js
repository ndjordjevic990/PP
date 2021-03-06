var boja = "plava"

var numberOfLikes = 23;

console.log(numberOfLikes);

var newNumberOfLikes = numberOfLikes + 12;


console.log(newNumberOfLikes);

if (numberOfLikes === 23) {
    console.log(numberOfLikes);
    console.log(numberOfLikes);
    console.log(numberOfLikes);
}

var a = true;
var b = true;

// c nije a
var c = !a;

// && - Operater i

var c = а && b;

// && - Operater i (sladoled - vanila i cokolada)
// true && true = true
// false && true = false
// true && false = false
// false && false = false

// || - Operater ili
// true || true = true
// false || true = true
// true || false = true
// false || false = false

// ! - Operater NOT (c nije a)
var c = !a;

console.log("!!")

var isLoggedIn = false;
------------------------------------------------------

var c = a && "ulogovan je"
var d = isLoggedIn || "neka vrednost"

//"neka vrednost" je String, a JS ga prevodi u boolean koji je true

--------------------------------------------------------
// rezultat je uvek boolean true ili false
var a = 3;
var c = 4;
var result = a > c;

console.log(result);
--------------------------------------------------------

// ==  provera

var a = 4;
var c = 4;
var result = a == c;
// rezultat TRUE proverava samo po vrednosti
console.log(result);

---------------------------------------------------

// === stroza provera
var a = 4;
var c = 4;
var result = a == c;
// rezultat FALSE proverava samo i vrednost i tipu
console.log(result);
-----------------------------------------------------
    // coercion - JS je dynamicly typing language. jedna varijabla jedan tip podataka, a kasnije da mu promenimo u toku koda
    -----------------------------------------------------
        // != - nije jednako po vrednosti
        // != - strogo nije jednako po vrednosti i tipu
        -----------------------------------------------------

var nekibroj = 34e+5; // rezultat 3400000
// decimalna tacka se pomera za 5 mesta u desno

var nekibroj = 34e-5; // rezultat 0,00034
// decimalna tacka se pomera za 5 mesta u levo

-----------------------------------------------------

var c;
var nekavrednost = c + "nesto"; // rezultat - undefinednesto

-----------------------------------------------------

    // komentar u jednoj liniji
    /* komentar u bloku
    var c= 10;
    */
    -----------------------------------------------------
var a = 7;

if (a % 2 === 0 || a > 10 *) {
    console.log * ("tacno")
} else {
    console.log("nije tacno")
}

-----------------------------------------------------
// zadatak 1. 

var a = 2

var b = 3

if (a > b) {
    console.log(addEventListener)
} else if (b > a) {
    console.log("equal")
} else if (b > a) {
    console.log("equal")