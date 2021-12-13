// 5.1 Checking If an Object Is an Array
// Problem - Before you perform an array operation, you want to verify that your object truly is an array.

const browserNames = ["Firefox", "Edge", "Chrome", "IE", "Safari"];

//1.    Array.isArray(browserNames)
if (Array.isArray(browserNames)) {
  //end up here
}
//2.    browserNames instanceof Array
console.log(browserNames instanceof Array);

// FALSE typeof browserNames --> object

//************************************************************************ */
// 5.2 Iterating Over All the Elements in an Array
//Problem - You want to use the best approach for looping over every element in an array, in order.

const animals = ["elephant", "tiger", "lion", "zebra", "cat", "dog", "rabbit"];

//1.    for…of loop
for (const animal of animals) {
  console.log(animal);
}

//2.    Array.forEach(function)
animals.forEach((animal) => console.log(animal));

//3. for loop
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

//************************************************************************ */
//5.3 Checking If Two Arrays Are Equal
//Problem - You want a simple way to test if two arrays are equivalent (have exactly the same contents).

const fruitNamesA = ["apple", "kumquat", "grapefruit", "kiwi"];
const fruitNamesB = ["apple", "kumquat", "grapefruit", "kiwi"];
const fruitNamesC = ["avocado", "squash", "red pepper", "cucumber"];

function areArraysEqual(arrayA, arrayB) {
  if (!Array.isArray(arrayA) || !Array.isArray(arrayB)) {
    // These objects are null, undeclared, or non-array objects
    return false;
  } else if (arrayA === arrayB) {
    // Shortcut: they're two references pointing to the same array
    return true;
  } else if (arrayA.length !== arrayB.length) {
    // They can't match if they have a different item count
    return false;
  } else {
    // Time to look closer at each item
    for (let i = 0; i < arrayA.length; ++i) {
      // We require items to have the same content and be the same type,
      // but you could use loosely typed equality depending on your task
      if (arrayA[i] !== arrayB[i]) return false;
    }
    return true;
  }
}

//2.    new function - strictly equal to the corresponding value of b. This works well if all the elements of the arrays are primitives as opposed to objects.
function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((elem, index) => elem === b[index])
  );
}

console.log(areArraysEqual(fruitNamesA, fruitNamesB)); // true
console.log(areArraysEqual(fruitNamesA, fruitNamesC)); // false
console.log(arrayEquals(fruitNamesA, fruitNamesB)); // true

//3.    One neat way to take into account object values is comparing arrays by their JSON.stringify() output.

const a = [{ answer: 42 }, { powerLevel: 9001 }];
const b = [{ answer: 42 }, { powerLevel: 9001 }];
const c = [{ answer: 42 }, { password: "taco" }];

const datesA = [new Date(2021, 1, 1)];
const datesB = [new Date(2021, 1, 1)];

console.log(JSON.stringify(a) === JSON.stringify(b)); // true
console.log(JSON.stringify(a) === JSON.stringify(c)); // false
console.log(JSON.stringify(datesA) === JSON.stringify(datesB)); // true

//Arrays are objects in JavaScript, so the triple equals operator === only returns true if the arrays are the same reference.
// const a = [1, 2, 3];
// const b = [1, 2, 3];
// a === a; // true
// a === b; // false

//************************************************************************ */
//5.4 Breaking Down an Array into Separate Variables
//Problem - You need to assign array element values to several variables, but you want a convenient approach that doesn’t force you to assign each variable separately

//1.    destructuring syntax
const stateValues = [459, 144, 96, 34, 0, 14];
const [arizona, missouri, idaho, nebraska, texas, minessota] = stateValues;
const [arizona, missouri, idaho, ...rest] = stateValues;

console.log(rest);

//************************************************************************ */
// 5.5 Passing an Array to a Function That Expects a List of Values
// Problem - Your array has a list of values that you want to pass to a function. But the function expects a list of argument values, not an array object.

//1.    spread operator - unfolds an array into a list of elements
const numbers = [2, 42, 5, 304, 1, 13];
const maximumFail = Math.max(...numbers);

//************************************************************************ */
// 5.6 Cloning an Array
// Problem - You want to make a copy of an existing array.

//1.    shallow copy: spread operator
const numbers = [2, 42, 5, 304, 1, 13];
const numbersCopy = [...numbers];

//2.    shallow copy: Array.slice() with no arguments
const numbersCopy2 = numbers.slice();

//3.    deep copy: Array.map()
const objectsOriginal = [
  { name: "Sadie", age: 12 },
  { name: "Patrick", age: 18 },
];
const objectsCopy = objectsOriginal.map((element) => ({ ...element }));

//FALSE - ends with two variables pointing to the same in-memory Array object
const numbersCopy = numbers;

//************************************************************************
// 5.7 Merging Two Arrays
// Problem - You want to join two entire arrays together into a new array.
const evens = [2, 4, 6, 8];
const odds = [1, 3, 5, 7, 9];

//1.    shallow merge: spread operator
const evensAndOdds = [...evens, ...odds];

//2.    shallow merge: Array.concat() - slightly faster
const evensAndOdds = evens.concat(odds);

//3.    MUTABLE shallow merge: Array.push()
const evens = [2, 4, 6, 8];
const odds = [1, 3, 5, 7, 9];
evens.push(...odds);
console.log(evens);

//4.    deep merge
const dates2020 = [new Date(2020, 1, 10), new Date(2020, 2, 10)];
const dates2021 = [new Date(2021, 1, 10), new Date(2021, 2, 10)];

console.log(dates2020);
const datesCombined = [...dates2020, ...dates2021];

const datesCombinedAndParsed = JSON.parse(
  JSON.stringify([...dates2020, ...dates2021])
);

console.log(datesCombined);
console.log(datesCombinedAndParsed);

//************************************************************************
// 5.8 Copying a Portion of an Array by Position
// Problem - You want to copy a portion of an array, and keep the original array intact
const animals = [
  "elephant",
  "tiger",
  "lion",
  "zebra",
  "cat",
  "dog",
  "rabbit",
  "goose",
];

const domesticAnimals = animals.slice(4, 7);
//************************************************************************
// 5.9 Extracting Array Items That Meet Specific Criteria
// Problem - You want to find all the items in an array that match a certain condition (starts with "e" f.e.), and copy them to a new array.
const animals = [
  "elephant",
  "tiger",
  "emu",
  "zebra",
  "cat",
  "dog",
  "eel",
  "rabbit",
  "goose",
  "earwig",
];

//2.    Array.filter()
const animalsE = animals.filter((animal) => animal[0].toLowerCase() === "e");
console.log(animalsE);

//2.    For loop with Array.push()
let animalsWithE = [];
for (let i = 0; i < animals.length; i++) {
  if (animals[i][0].toLowerCase() === "e") {
    animalsWithE.push(animals[i]);
  }
}

//2.    For...of loop with Array.push()
let animalsWithE = [];
for (const animal of animals) {
  if (animal[0].toLowerCase() === "e") {
    animalsWithE.push(animal);
  }
}

//************************************************************************
// 5.10 Emptying an Array
// Problem - You need to remove all the elements from an array, either to reclaim memory or so that your array can be reused.

//1.    Array.lenght
const numbers = [2, 42, 5, 304, 1, 13];
numbers.length = 0;

//2*.    If defined with var or let
numbers = [];

//3.    Array.pop
while (numbers.length > 0) {
  numbers.pop();
}

//4.    Array.splice()
const numbers = [2, 42, 5, 304, 1, 13];
numbers.splice(0, numbers.length);
