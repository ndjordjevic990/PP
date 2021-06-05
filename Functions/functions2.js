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
    for (var i = 0, j = 0; i < str.length; i++, j++) {
        result[j] = str[i];
        if (str[i] === " ") {
            result[j] = null;
        }
        }
        return result
    }
    

console.log(stringToArray("My random string"));

/*******************************************************************************************
TASK 8. Write a function that accepts a number as a parameter and checks if the number is prime or not.
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
divisors other than 1 and itself.
/*******************************************************************************************/
function test_prime(n)
{
    if (n===1){
    return false;
  }
    else if(n === 2){
    return true;
  }
    else{
        for(var x = 2; x < n; x++){
           if(n % x === 0){
        return false;
        }
    }
    return true;  
  }
}
console.log(test_prime(23));

/*******************************************************************************************
// TASK 9. Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.
"My random string", "_" --> "My_random_string"
"My random string", "+" --> "My+random+string"
"My random string"  --> "My-random-string"
/*******************************************************************************************/
var string = "My random string";
var separator = "";

function replaceString(string, separator) {
  var result = "";
  separator = separator || "-";
  for (i = 0; i < string.length; i++) {
    if(string[i] == " ") {
      result += separator;
    } else {
      result += string[i];
    }
  }
  return result;
}

console.log(replaceString(string, separator));

// drugi nacin - NOT WORKING
var result = "";

function replaceSpaces(str, char) {
  for (var i = 0, j = 0; i < str.length; i++, j++) {
    result[j] = str[i];
    if (char === "+") {
      result[j] = "+";
    }
  } return result
}

console.log(replaceSpaces("My random string"))
console.log(replaceSpaces("My random string", "+"))
console.log(replaceSpaces("My random string", "_"))

/*******************************************************************************************
TASK 10. Write a function to get the first n characters and add “...” at the end of newly created string.
/*******************************************************************************************/
var string = "My random string";
var number = 7;

function threeDotsString(string, number) {
  var result = "";
  for (var i = 0; i <= number; i++) {
    result+= string[i]
    if (i == number)
    result += "..."
    
  }
  return result
}

console.log(threeDotsString(string, number))

/*******************************************************************************************
TASK 11. Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] --> [1, 21, 42, 1000]
/*******************************************************************************************/
var a = ["1", "21", undefined, "42", "1e+3", Infinity];
var result = [];

function getArrayOfNumbers() {
  for (var i = 0, j = 0; i < a.length; i++) {
    if (isFinite(a[i]) === true) {
      result[j] = parseFloat(a[i]);
      j++;
    }
  }
  return result;
}

console.log(getArrayOfNumbers())

/*******************************************************************************************
TASK 12. Write a function to calculate how many years there are left until retirement based on the year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed.
/*******************************************************************************************/
var retirementAgeM = 65;
var retirementAgeW = 60;
var result;
var info;

function yearUntilRetirement (gender, years) {
  if (gender === "male" && years <= retirementAgeM ) {
    result = retirementAgeM - years;
    info = "You have " + result + " years left until retirement.";
  } else if (gender === "female" && years <= retirementAgeW) {
    result = retirementAgeW - years;
    info = "You have " + result + " years left until retirement.";
  } else if (gender === "male" && years > retirementAgeM) {
    info = "You are already retired. Enjoy!"
  } else if (gender === "female" && years > retirementAgeW) {
    info = "You are already retired. Enjoy!"
  }
  return info
}

console.log(yearUntilRetirement("male", 50));

/*******************************************************************************************
TASK 13. Write a function to humanize a number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
1 --> 1st
2 -- > 11th
/******************************************************************************************/
var result = "";

function humanizeNumber (number) {
  if (number === 1 || number % 10 === 1) {
    result = number + "st";
  } else if (number === 2 || number % 10 === 2) {
    result = number + "nd";
  } else if (number === 3 || number % 10 === 3) {
    result = number + "rd";
  } else if (number > 3) {
    result = number + "th"; 
  }
  return result;
 }


  console.log(humanizeNumber(965));
