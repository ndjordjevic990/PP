/*******************************************************************************************
TASK 1. Write IIFE that replaces the first and the last element of the given array and prints out its elements.
Input array: [4, 5, 11, 9]
Output array: [ 9, 5, 11, 4]
/*******************************************************************************************/
var a = [4, 5, 11, 9];

(function () {
  var pomocna = a[0];
  a[0] = a[a.length - 1];
  a[a.length - 1] = pomocna;

  console.log(a);
})();
/*******************************************************************************************
TASK 2. Write IIFE that calculates the surface area of the given rectangle with sides a and b.
Input: 4 5
Output: 20
/*******************************************************************************************/
/*******************************************************************************************
TASK 3. Write IIFE that replaces all appearances of the letters m or M with * and returns the
number of replacements.
Input: prograMming
Output: progra**ing, 2
/*******************************************************************************************/
/*******************************************************************************************
TASK 4. Write a function with parameters name and surname that returns a function that
suggests an email in the form name.surname@gmail.com.
Input: pera peric
Output: pera.peric@gmail.com
/*******************************************************************************************/
/*******************************************************************************************
TASK 5. Write a function that returns a function that calculates a decimal value of the given octal number.
Input: 034
Output: 28
/*******************************************************************************************/
/*******************************************************************************************
TASK 6. Write a function that checks if a given string is valid password. The password is valid if it
is at least 6 characters long and contains at least one digit. The function should receive
two callbacks named successCallback and errorCallback that should be called in case
password is correct or invalid.
Input: JSGuru
Output: Your password is invalid!
Input: JSGuru123
Output: Your password is cool!
/*******************************************************************************************/
/*******************************************************************************************
TASK 7. Write a function that filters elements of the given array so that they satisfy a condition given by the callback function.
Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
Output: [11, 9, 3]
/*******************************************************************************************/
