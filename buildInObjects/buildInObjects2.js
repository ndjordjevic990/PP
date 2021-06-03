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

/***************************************************************************************​
TASK 6. Write a function that adds string to the left or right of string, by replacing it’s characters.
"0000", "123", "l", -> 0123
"00000000", "123", "r", -> 12300000
/***************************************************************************************/
function addString (a, b, c) {
    if (c === "l") {
        return (a + b).slice(-a.length)
    } else {
        return (b + a).substring(0, a.length);
    }
}

console.log(addString("0000", "123", "l"))
console.log(addString("00000000", "123", "r"))

/***************************************************************************************​
TASK 7. Write a function to capitalize the first letter of a string and returns modified string.
"js string exercises" -> "Js string exercises"
/***************************************************************************************/
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
console.log(capitalizeFirstLetter('js string exercises'));

/***************************************************************************************​
TASK 8. Write a function to hide email addresses to protect them from unauthorized users.
"somerandomaddress@example.com" -> "somerand...@example.com"
/***************************************************************************************/
protect_email = function (user_email) {
    var avg, splitted, part1, part2;
    splitted = user_email.split("@");
    part1 = splitted[0];
    avg = part1.length / 2;
    part1 = part1.substring(0, (part1.length - avg));
    part2 = splitted[1];
    return part1 + "...@" + part2;
};
console.log(protect_email("somerandomaddress@example.com"));

/***************************************************************************************​
TASK 8. Write a program that accepts a string as input and swaps the case of each character. For
example, if you input &#39;The Quick Brown Fox&#39;, the output should be "tHE qUICK bROWN fOX".
"somerandomaddress@example.com" -> "somerand...@example.com"
/***************************************************************************************/