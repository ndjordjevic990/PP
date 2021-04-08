/*******************************************************************************************
/*  TASK 1. Write a function to check whether the `input` is a string or not.
/*          "My random string" --> true
/*          12 --> false
/******************************************************************************************/

function checkString(a) {
  if (typeof a === "string") {
    result = true;
  } else {
    result = false;
  }
  return result;
}

console.log(checkString("My random string"));
console.log(checkString(12));

/*******************************************************************************************
//   TASK 2. Write a function to check whether a string is blank or not.
//  "My random string" --> false
//   "" --> true
//   12 --> false
//    false --> false
/*******************************************************************************************/

function stringBlank(a) {
  if (typeof a === "string" && a === "") {
    result = true;
  } else {
    result = false;
  }
  return result;
}

console.log(stringBlank("My random string"));
console.log(stringBlank(""));
console.log(stringBlank(12));
console.log(stringBlank(false));

/*******************************************************************************************
//   TASK 3. Write a function that concatenates a given string n times (default is 1).
//   "Ha" --> "Ha"
//   "Ha", 3 --> "HaHaHa"
/*******************************************************************************************/

function concatString(string, times) {
  var result = "";
  if (typeof times !== "number") {
    times = 1;
    result = string;
  } else {
    for (var i = 1; i <= times; i++) {
      result += string;
    }
  }
  return result;
}

console.log(concatString("Ha"));
console.log(concatString("Ha", 3));

/*******************************************************************************************
//   TASK 4. Write a function to count the number of letter occurrences in a string.
//   "My random string" --> "n" = 2
/*******************************************************************************************/
var result = 0;

function countChar(str, letter) {
  for (var i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      result++;
    }
  }
  return result;
}

console.log(countChar("My random string", "n"));

// drugi način

function charCount(str, letter) {
  var result = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) == letter) {
      result += 1;
    }
  }
  return result;
}

console.log(charCount("My random string", "n"));

/*******************************************************************************************
// TASK 5. Write a function to find the position of the >>first<< occurrence of a character in a string. The result should be the position of character. If there are no occurrences of the character, the function should return -1.
/*******************************************************************************************/

var result = 0;

function findFirstPos(str, letter) {
  for (var i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      result = i;
      break;
    }
  }
  return result;
}

console.log(findFirstPos("My random string", "n"));

/*******************************************************************************************
// TASK 6. Write a function to find the position of the >>last<< occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1.
/*******************************************************************************************/
var result = 0;

function findLasttPos(str, letter) {
  for (var i = str.length; i <= str.length; i--) {
    if (str[i] === letter) {
      result = i;
      break;
    } 
  }
  return result;
}

console.log(findLasttPos("My random string", "n"));
//////////
var result = 0;

function findLasttPos(str, letter) {
  for (var i = str.length; i <= str.length; i--) {
    if (str[i] === letter) {
      result = i;
      break;
    }
  }else return -1;
  return result;
}

console.log(findLasttPos("My", "m"));

/*******************************************************************************************
// TASK 7. Write a function to convert string into an array. Space in a string should be represented as “null” in new array.
"My random string" --> ["M", "y", null, "r", "a"]
"Random" --> ["R", "a", "n", "d", "o", "m"]
/*******************************************************************************************/

var result = [];

function stringToArray (str) {
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < str.length; j++) {
            str[i] = result[j];
        }
    }
    return result
}

console.log(stringToArray("Random"));
