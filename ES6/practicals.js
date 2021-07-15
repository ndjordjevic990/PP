// TASK 1. Write a function that capitalizes the first letter of each string argument it receives.
// Function arguments: ["hello", "there", "ES", 6]
// Output: ["Hello", "There", "ES"] */

// let a = ["hello", "there", "ES", 6];

const capitalizeLetter = (...args) => {
  let newArray = [];
  args.forEach((element) => {
    if (typeof element === "string") {
      newArray.push(`${element.charAt(0).toUpperCase()}${element.slice(1)}`);
    }
  });
  return newArray;
};

console.log(capitalizeLetter("hello", "there", "ES", 6));

// TASK 3. Write a function that increases each element of the given array by the given value. If the value is omitted, increase each element of the array by 1.
// Input: [4, 6, 11, -9, 2.1], 2
// Output: [6, 8, 13, -7, 4.1]

const arr = [4, 6, 11, -9, 2.1];

const increase = (arr, inc = 1) => arr.map((e) => e + inc);
console.log(increase(arr, 2));

// TASK 4. Write a function that filters all even elements of the array.
// Input: [6, 11, 9, 0, 3]
// Output: [6, 0]

//ES5
const a = [6, 11, 9, 0, 3];

var filterArrayES5 = a.filter(function (element) {
  return element % 2 === 0;
});
console.log(filterArrayES5);

//ES6
const a = [6, 11, 9, 0, 3];
let filterArray = a.filter((element) => {
  return element % 2 === 0;
});
console.log(filterArray);

//ES6 -short
const keepEvenNumbers = (a) => a.filter((e) => !(e % 2));
console.log(keepEvenNumbers([6, 11, 9, 0, 3]));

// TASK 5. Write a function that filters all the strings from the given array that contain substring JS or js.
// Input: ["compiler", "transpiler", "babel.js", "JS standard", "linter"]
// Output: ["babel.js", "JS standard"]

//ES5
const a = ["compiler", "transpiler", "babel.js", "JS standard", "linter"];

var filteredArray = a.filter(function (element) {
  return element.indexOf("js") != -1 || element.indexOf("JS") != -1;
});
console.log(filteredArray);

//ES6
const includesJS = (arr) =>
  arr.filter((e) => e.indexOf("js") != -1 || e.indexOf("JS") != -1);
console.log(
  includesJS(["compiler", "transpiler", "babel.js", "JS standard", "linter"])
);

// TASK 6. Write a function that filters all integer numbers from the given array.
// Input: [1.6, 11.34, 9.23, 7, 3.11, 8];
// Output: [7, 8];

let array = [1.6, 11.34, 9.23, 7, 3.11, 8];

//ES6
const getInteger = (arr) => {
  return arr.filter((e) => Number.isInteger(e));
};
console.log(getInteger(array));

//ES6 short
const getInteger = (arr) => arr.filter((e) => Number.isInteger(e));
console.log(getInteger([1.6, 11.34, 9.23, 7, 3.11, 8]));

// TASK 7. Write a function that filters all integer arguments that contain digit 5.
// Function arguments: [23, 11.5, 9, "abc", 45, 28, 553]
// Output: [45, 553]
let array = [23, 11.5, 9, "abc", 45, 28, 553];

const getInteger = (arr) =>
  arr.filter((e) => Number.isInteger(e) && e.toString().indexOf("5") != -1);
console.log(getInteger([23, 11.5, 9, "abc", 45, 28, 553]));

// TASK 8. Write a function that returns indexes of the elements greater than 10.
// Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
// Output: 1, 2, 5

const greaterThan10 = (arr) => {
  let newArray = [];
  arr.forEach((e, i) => {
    if (e > 10) {
      newArray.push(i);
    }
  });
  return newArray;
};

console.log(greaterThan10([1.6, 11.34, 29.23, 7, 3.11, 18]));

// TASK 9. a. Create an array of persons. A person should be an object with name and age properties.
// Experiment with enhanced object literals.
// b. Write a function that prints out the names of persons older than 25.
// c. Write a function that check if there is a person older than 40.
// d. Write a function that checks if all persons are older than 20.

const arrayOfObjects = [
  { name: "Nikola", age: 30 },
  { name: "Miona", age: 15 },
  { name: "Marko", age: 24 },
  { name: "Milos", age: 45 },
];

const getPeopleOver25 = (arr) => {
  let personOver25 = [];
  arrayOfObjects.forEach((element) => {
    if (element.age > 25) {
      personOver25.push(element.name);
    }
  });
  return personOver25;
};

const getPeopleOver40 = (arr) => {
  let personOver40 = [];
  arrayOfObjects.forEach((element) => {
    if (element.age > 40) {
      personOver40.push(element.name);
    }
  });
  return personOver40;
};

const getPeopleUnder20 = (arr) => {
  let personUnder20 = [];
  arrayOfObjects.forEach((element) => {
    if (element.age < 20) {
      personUnder20.push(element.name);
    }
  });
  return personUnder20;
};

console.log(getPeopleOver25(arrayOfObjects));
console.log(getPeopleOver40(arrayOfObjects));
console.log(getPeopleUnder20(arrayOfObjects));
