/***********************************************************************************
TASK 1: Write a JavaScript function that reverses a number. typeof result of the function should be “number”.
12345 -> 54321
​/*************************************************************************************** */

function reverse_a_number(n) {
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(reverse_a_number(12345));
​
​/***************************************************************************************
/* TASK 2: Write a JavaScript function that returns a passed string with letters in alphabetical order. 
Note: Assume punctuation, numbers and symbols are not included in the passed string.
“Webmaster” -> “abeemrstw”
/***************************************************************************************/
​
function alphabet_order(str) {
    return str.split('').sort().join('');
  }
console.log(alphabet_order("webmaster"));
​
​
/***************************************************************************************
TASK 3: Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.
"Republic Of Serbia" -> "Rbceilpu Of Sabeir"         
/***************************************************************************************/
​
function alphabetize_string(stringInput){
    return stringInput.split('').sort().trim();
}
​
console.log(alphabetize_string('Republic of Serbia'));
​
​
​
​/***************************************************************************************
TASK 4: Write a function to split a string and convert it into an array of words.
​"John Snow" -> [ 'John', 'Snow' ]  
/***************************************************************************************/
​
string_to_array = function (str) {
    return str.trim().split(" ");
};
console.log(string_to_array("John Snow"));
​​
​/***************************************************************************************​
TASK 5: Write a function to convert a string to its abbreviated form. 
"John Snow" -> 	"John S."  
/***************************************************************************************/
​
abbrev_name = function (str1) {
    var split_names = str1.trim().split(" ");
    if (split_names.length > 1) {
        return (split_names[0] + " " + split_names[1].charAt(0) + ".");
    }
    return split_names[0];
};
console.log(abbrev_name("John Snow"));