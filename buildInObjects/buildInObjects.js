/************************************************************************* 
// TASK 1. Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]
**************************************************************************/
a = [2, 4, 7, 11, -2, 1];
b = [];

var c = function () {
  for (var i = 0; i < a.length; ++i) {
    b.push(a[i]);
    b.push(a[i]);
  }
  return b;
};

console.log(c(a));

// other way with forEach - pure function , samo uzima elemente niza
var sample = [2, 4, 7, 11, -2, 1];

var duplicateAllElements = function (arr) {
  var duplicated = [];
  arr.forEach(function (elem) {
    duplicated.push(elem, elem);
  });
  return duplicated;
};

var result = duplicateAllElements(sample);
console.log(result);

/************************************************************************* 
TASK 2. Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13]
**************************************************************************/
var a = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];

function removeDuplicates(data) {
  var unique = [];
  data.forEach((element) => {
    if (!unique.includes(element)) {
      unique.push(element);
    }
  });
  return unique;
}

console.log(removeDuplicates(a));

// drugi način

var a = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];

function removeDuplicatess(data) {
  return data.filter((value, index) => data.indexOf(value) === index);
}

console.log(removeDuplicatess(a));

//
var a = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];

function removeDuplicatesSafe(arr) {
  var seen = {};
  var unique = [];
  for (var i = 0; i < arr.length; i++) {
    if (!(arr[i] in seen)) {
      unique.push(arr[i]);
      seen[arr[i]] = true;
    }
  }
  return unique;
}

console.log(removeDuplicatesSafe(a));

//
var arr = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
var unique = function (array) {
  var filtered = array.filter(function (el, pos) {
    return array.indexOf(el) == pos;
  });
  return filtered;
};
console.log(unique(arr));

//
var arr = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];

function ukloniDuplikate(arr) {
  var temp = []; //Privremeni array
  for (var i = 0; i < arr.length; i++) {
    temp[arr[i]] = true;
  }
  //Provera da li postoji u privremenom objektu:
  var r = [];
  for (var x in temp) {
    r.push(x);
  }
  return r;
}
console.log(ukloniDuplikate(arr));

// Ivanov način sa IndexOf gde izlazi -1 ako nije prisutan

function removeDuplicates(arr) {
  var newArray = [];
  arr.forEach(function (elem) {
    var indexOfCurrent = newArray.indexOf(elem);
    if (indexOfCurrent === -1) {
      newArray.push(elem);
    }
  });
  newArray.sort(function (a, b) {
    return a - b;
  });

  return newArray;
}

var sample = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];

var result = removeDuplicates(sample);
console.log(result);

/************************************************************************* 
TASK 3. 
  a. Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true

  b. Write a function that counts the number of elements less than the middle
element. If the given array has an even number of elements, print out an error
message.
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4
/*************************************************************************/
//a//
var a = [1, 2, 9, 2, 1];

var oddNumberOfElements = function (arr) {
  return arr.length % 2 !== 0;
};

console.log(oddNumberOfElements(a));

//b//

var arr = [-1, 8.1, 3, 6, 2.3, 44, 2.11];
var count = 0;

function checkcheck(a) {
  var middle = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    return "Error message";
  } else {
    for (var i = 0; i < a.length; i++) {
      if (arr[i] < arr[middle]) {
        count++;
      }
    }
    return count;
  }
}

console.log(checkcheck(arr));

/**************************************************************************************
TASK 4. Write a function that finds the smallest element of a given array. The function should
return an object that contains the smallest value and its last position in the array.
Input: [1, 4, -2, 11, 8, 1, -2, 3]
Output: { minValue: -2, minLastIndex: 6 }
/**************************************************************************************/
var arr = [1, 4, -2, 11, 8, 1, -2, 3];

function getMin(a) {
  var smallest = a[0];
  var lastindex = 0;

  // find the smallest value in the array
  for (var i = 1; i < a.length; i++) {
    if (a[i] < smallest) {
      smallest = a[i];
    }
  }

  // find the last index of the smallest value
  for (var i = 0; i < a.length; i++) {
    if (a[i] === smallest) {
      lastindex = i;
    }
  }
  // create the object from these values
  return { minValue: smallest, minLastIndex: lastindex };
}

console.log(getMin(arr));

/**************************************************************************************
TASK 5. 
a. Write a function that finds all the elements in a given array less than a given
element.
Input: [2, 3, 8, -2, 11, 4], 6
Output: [2, 3, -2, 4]

b. Write a function that finds all the elements in a given array that start with the “pro”
substring. The function should be case insensitive.
Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
Output: [’Programming’, ‘product’]

c. Write a function that expects an array and a callback function that filters out
some of the elements. Use functions defined in a) or b) to test it.
/**************************************************************************************/

var a = [2, 3, 8, -2, 11, 4];
var newArray = [];

function findElem(array, number) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] < number) {
      newArray.push(a[i]);
    }
  }
  return newArray;
}

console.log(findElem(a, 6));

// b. //

var b = ["JavaScript", "Programming", "fun", "product"];
var newArray = [];

function findString(array, someString) {
  for (var i = 0; i < array.length; i++) {
    var tempString = array[i];
    var tempStringLower = tempString.toLowerCase();
    if (tempStringLower.substring(0, 3) === someString) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

console.log(findString(b, "pro"));

// c. //

/**************************************************************************************
TASK 6. 
a. Write a list (array) of products you usually buy in the supermarket. Write a price
and name for each product. For example,
      [
      {name: ‘apples’, price: 100},
      {name: ‘milk’, price: 80},
      {name:’bananas’, price: 150}
      ]

b. Write a function that calculates the total price of your shopping list.
c. Write a function that calculates the average product price of your shopping list.
Print this value with the precision of three decimals.
d. Write a function that prints out the name of the most expensive product on your
shopping list. Write the name in uppercase.
/**************************************************************************************/
// a //
var namirnice = [
  { name: "mleko", price: 120 },
  { name: "hleb", price: 50 },
  { name: "jaja", price: 140 },
];

// b //
function getPrice(x) {
  return x.price;
}

function sum(prev, next) {
  return prev + next;
}

console.log(namirnice.map(getPrice).reduce(sum));

// c //

var total = namirnice.map(getPrice).reduce(sum);
var average = total / namirnice.length;

console.log(average.toFixed(3));

// d //
// sort by price
var sortirano = namirnice.sort(function (a, b) {
  return b.price - a.price;
});
var mostExp = namirnice[0].name;
var mostExpUpper = mostExp.toUpperCase();
console.log(mostExpUpper);
/**************************************************************************************
TASK 7. 
a. Write a function that checks if a given string is written in all capitals.
b. Write a function that checks if a given string contains any digits.
c. Write a function that checks if a given string is a valid hexadecimal color.
d. Write a function that checks if a given number belongs to the interval from 1900
to 2018.
e. Write a function named validator that returns an object with properties
stringValidator, passwordValidator, colorValidator, and yearValidator referencing
the functions from a) to d).
/**************************************************************************************/

// a //

function checkUpperCase(string) {
  if (string === string.toUpperCase()) {
    var result = true;
  } else {
    result = false;
  }
  return result;
}

console.log(checkUpperCase("neki string"));
console.log(checkUpperCase("NEKI STRING"));

// b //

var b = /\d/.test("HelloW123orld!");
console.log(b);

// c //

function isHexColor(hex) {
  return (
    typeof hex === "string" && hex.length === 6 && !isNaN(Number("0x" + hex))
  );
}

console.log(isHexColor("AABBCC")); // true
console.log(isHexColor("AABBCC11")); // false
console.log(isHexColor("XXBBCC")); // false
console.log(isHexColor("AAXXCC")); // false

// d //

function checkInteval(num) {
  if (num > 1900 && num < 2018) {
    var result = true;
  } else {
    var result = false;
  }
  return result;
}

console.log(checkInteval(2019));

// e //

/**************************************************************************************
TASK 8. Write a function that calculates a number of days to your birthday.
Input: 25 February
Output: 5 days
/**************************************************************************************/
var myBirthday, today, bday, diff, days;
myBirthday = [9, 12]; // 9th of December
today = new Date();
bday = new Date(today.getFullYear(), myBirthday[1] - 1, myBirthday[0]);
if (today.getTime() > bday.getTime()) {
  bday.setFullYear(bday.getFullYear() + 1);
}
diff = bday.getTime() - today.getTime();
days = Math.floor(diff / (1000 * 60 * 60 * 24));
console.log(days + " days until Nikola's birthday!");

/**************************************************************************************
TASK 9. Write a function that for a given departure and arrival time calculates the time the trip
takes.
Input: 8:22:13 11:43:22
Output: 3 hours 21 minutes 9 seconds
/**************************************************************************************/
