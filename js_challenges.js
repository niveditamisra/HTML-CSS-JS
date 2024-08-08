//let itext = prompt('Enter text :')

/*
nishi
01234
*/

//inish

//h+inis

/*
for (i=1; i<=itext.length ; i++)
{
	
itext = itext[itext.length - 1] + itext.substring(0, itext.length - 1)

alert (itext);

}


let itext = prompt("Enter text :");

let nishi = 1;

for (var i = 0; i <= itext.length; i++) {
  if (itext[i] != itext[itext.length - 1 - i]) {
    alert("input string is not a palindrome..");
    break;
  }
}

alert("input string is palindrome..");

/*
//alert (itext[i] + ' and '+ itext[(itext.length-1)-i])

//if (nishi === 0)
	if (itext[i] === itext[(itext.length-1)-i])
{
alert('input string is palindrome..')
break;
}

}
*/

// take input
/*
const string = prompt("Enter a string: ");

function checkPalindrome(string) {
  // find the length of a string
  const len = string.length;

  // loop through half of the string
  for (let i = 0; i <= len; i++) {
    // check if first and last string are same
    if (string[i] !== string[len - 1 - i]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
}

// call the function
const value = checkPalindrome(string);

console.log(value);
*/
/*
let validEmail = prompt("Enter a valid email-id");

function validateEmailId(validEmail) {
  if (
    validEmail.length - validEmail.replace(/@/g, "").length === 1 &&
    validEmail.substring(0, 1) !== "@" &&
    validEmail.substring(0, 1) !== " " &&
    validEmail.substring(validEmail.lastIndexOf(".") + 1).length > 1 &&
    validEmail.substring(validEmail.indexOf("@") + 1).length -
      validEmail.substring(validEmail.lastIndexOf("@") + 1).replace(/\./g, "")
        .length ===
      1
  ) {
    return "Valid EmailId";
  } else {
    return "Invalid EmailId";
  }
}

console.log(validateEmailId(validEmail));
*/

/*
function front_back(text) {
  let str = text.substring(0, 1);
  return str + text + str;
}
console.log(front_back("Nishi"));

function test37(x) {
  if (x % 3 === 0 || x % 7 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(test37(15));
console.log(test37(17));

function front_back(text) {
  let back = text.substring(text.length - 3);
  return back + text + back;
}
console.log(front_back("nishi"));

function check(str) {
  if (str.length < 4) {
    return false;
  }
  front = str.substring(0, 4);
  if (front === "Java") {
    return true;
  } else {
    return false;
  }
}
console.log(check("Javascript"));
console.log(check("Script"));

function checkNumbers(x, y) {
  if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99)) {
    return true;
  } else {
    return false;
  }
}
console.log(checkNumbers(52, 90));
console.log(checkNumbers(45, 100));

function checkThreeNumbers(x, y, z) {
  if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (z >= 50 && z <= 99)) {
    return true;
  } else {
    return false;
  }
}
console.log(checkThreeNumbers(20, 10, 100));
console.log(checkThreeNumbers(50, 55, 87));
*/
/*
function largestInteger(x, y, z) {
  let maxValue = 0;
  if (x > y) {
    maxValue = x;
  } else {
    maxValue = y;
  }
  if (z > maxValue) {
    maxValue = z;
  }
  return maxValue;
}

console.log(largestInteger(10, 5, 8));

function reverseNumber(n) {
  n = n + "";
  return n.split("").reverse().join("");
}
console.log(Number(reverseNumber(32243)));

let sortAlphabets = function (str) {
  return str.split("").sort().join("");
};
console.log(sortAlphabets("webmaster"));
*/
/*
// Define a function named substrings that generates all combinations of a string
function substrings(str) {
  // Initialize an array to store the result (combinations)
  const result = [];
  //alert(result);

  // Define a recursive helper function named search_combination
  function search_combination(start, curr) {
    // If the current combination is not empty, add it to the result array
    if (curr.length > 0) {
      result.push(curr);
    }

    // Iterate through the characters of the input string starting from the specified index
    for (let i = start; i < str.length; i++) {
      // Recursively call the search_combination function with updated parameters
      search_combination(i + 1, curr + str[i]);
    }
  }

  // Start the recursive search_combination function with initial parameters
  search_combination(0, "");

  // Return the array containing all combinations
  return result;
}

// Declare a constant variable str with the value 'dog'
const str = "nishi";

// Call the substrings function with the input string 'dog' and store the result in the variable result
const result = substrings(str);

// Log the result (combinations) to the console
console.log(result);
*/

/*
function upperCase(string) {
  let word = string.split(" ");
  for (let i = 0; i < word.length; i++) {
    word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
  }
  return word.join(" ");
}
console.log(upperCase("i am nivedita misra")); //first letter of each word will be Captal letter
*/
/*
function test3_7(x) {
  if (x % 3 == 0 || x % 7 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(test3_7(15));
console.log(test3_7(20));
*/

/*
function closer_100(x, y) {
  if (x != y) {
    x1 = Math.abs(100 - x);
    y1 = Math.abs(100 - y);
    if (x1 < y1) {
      return x;
    }
    if (y1 < x1) {
      return y;
    }
    return 0;
  } else {
    return false;
  }
}

console.log(closer_100(50, 90));
console.log(closer_100(20, 99));
*/

/*
function number_ranges(x, y) {
  if (
    (x >= 40 && x <= 60) ||
    (y >= 40 && y <= 60) ||
    (x >= 70 && x <= 100) ||
    y >= 70 ||
    y <= 100
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(number_ranges(30, 80));
console.log(number_ranges(50, 60));
*/
/*
function threeIntegers(x, y, z) {
  if (x > 0 && y > 0 && z > 0) {
    return x % 10 === y % 10 && y % 10 === z % 10 && x % 10 === z % 10;
  } else {
    return false;
  }
}

console.log(threeIntegers(10, 10, 30));
console.log(threeIntegers(22, 30, 45));
*/
/*
function check_char(str1, char) {
  let ctr = 0;

  //use a for loop to iterate through each character in the string
  for (let i = 0; i < str1.length; i++) {
    if (str1.charAt(i) == char && i >= 1 && i <= 3) {
      // Set the counter to 1 and break out of the loop
      ctr = 1;
      break;
    }
  }

  // Check if the counter is 1 and return true, otherwise return false
  if (ctr == 1) return true;
  return false;
}

// Log the result of calling check_char with the arguments "Python" and "y" to the console
console.log(check_char("Python", "y"));

// Log the result of calling check_char with the arguments "JavaScript" and "a" to the console
console.log(check_char("JavaScript", "a"));

// Log the result of calling check_char with the arguments "Console" and "o" to the console
console.log(check_char("Console", "o"));

// Log the result of calling check_char with the arguments "Console" and "C" to the console
console.log(check_char("Console", "C"));

// Log the result of calling check_char with the arguments "Console" and "e" to the console
console.log(check_char("Console", "e"));

// Log the result of calling check_char with the arguments "JavaScript" and "S" to the console
console.log(check_char("JavaScript", "S"));
*/
/*
function upperCase(string) {
  if (string.length < 3) {
    return string.toUpperCase();
  }
  frontPart = string.substring(0, 3).toLowerCase();
  backPart = string.substring(3, string.length);
  return frontPart + backPart;
}
console.log(upperCase("PYTHON"));
console.log(upperCase("NISHI"));
console.log(upperCase("SIDDHARTH"));
*/

/*
function totalMarks(totMark, finalExam) {
  if (finalExam) {
    return totMark >= 90;
  }
  return totMark >= 89 && totMark <= 100;
}
console.log(totalMarks(90, ""));
console.log(totalMarks(50, ""));

function sumInteger(x, y) {
  let sum = x + y;
  if (sum >= 50 && sum <= 80) {
    return 65;
  }
  return 80;
}

console.log(sumInteger(50, 10));
console.log(sumInteger(10, 10));
*/
/*
function threeNumbers(x, y, z) {
  if (x == y && y == z) {
    return 30;
  }
  if (x == y || y == z || z == x) {
    return 40;
  }
  return 20;
}
console.log(threeNumbers(8, 18, 10));
console.log(threeNumbers(10, 20, 10));
console.log(threeNumbers(2, 2, 2));
*/

/*
function numberMode(x, y, z) {
  if (y > x && z > y) {
    return "strict mode";
  }
  if (z > y) {
    return "soft mode";
  }
  return "undefined";
}
console.log(numberMode(10, 15, 20));
console.log(numberMode(10, 9, 20));
*/

/*
function rightMostDigit(x, y, z) {
  return x % 10 === y % 10 || y % 10 === z % 10 || z % 10 === x % 10;
}
console.log(rightMostDigit(12, 22, 32));
console.log(rightMostDigit(25, 20, 42));

function lessThan20(x, y, z) {
  return (
    (x > 20 && (x < y || x < z)) ||
    (y > 20 && (y < z || y < x)) ||
    (z > 20 && (z < x || z < y))
  );
}
console.log(lessThan20(30, 45, 20));
console.log(lessThan20());

function twoInt(x, y) {
  return x === 15 || y === 15 || x + y === 15 || Math.abs(x - y) === 15;
}

console.log(twoInt(15, 10));
console.log(twoInt(10, 12));
console.log(twoInt(5, 9));

function checkDivisible(x, y) {
  if (!((x % 7 == 0 || x % 11 == 0) && (y % 7 == 0 || y % 11 == 0)));
  {
    return x % 7 == 0 || x % 11 == 0 || y % 7 == 0 || y % 11 == 0;
  }
}
console.log(checkDivisible(7, 11));
console.log(checkDivisible(16, 20));
console.log(checkDivisible(14, 21));

function testDigit(n) {
  if (n < 40 || n > 10000) return false;
  else if (n >= 40 || n <= 10000) return true;
}
console.log(testDigit(30, 4000));
console.log(testDigit(40, 4000));

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("nishi"));
console.log(reverseString("malyalam"));
*/

/*
function capitalizeFirstWord(string) {
  string = string.split(" ");
  for (let i = 0; i < string.length; i++) {
    string[i] = string[i][0].toUpperCase() + string[i].substr(1);
  }
  return string.join(" ");
}
console.log(capitalizeFirstWord("my name is nivedita misra"));
console.log(capitalizeFirstWord("javascript is fun to do"));
*/

/*
function time_convert(number) {
  let hours = Math.floor(number / 60);
  let minutes = number % 60;
  return hours + ":" + minutes;
}
console.log(time_convert(71));
console.log(time_convert(240));
*/

/*
let today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();
if (month < 10) {
  month = "0" + month;
}
if (day < 10) {
  day = "0" + day;
}
let finalResult = day + "-" + month + "-" + year;
console.log(finalResult);
*/
/*
function leapYear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
console.log(leapYear(2024));
console.log(leapYear(2025));
*/

/*
for (year = 2024; year <= 2050; year++) {
  let day = new Date(year, 0, 1);
  if (day.getDay() === 0) {
    console.log(`Jan 1st is Sunday on ${year}`);
  }
}
*/
/*
let num = Math.ceil(Math.random() * 10);
let gnum = prompt("Enter a number");
if (num == gnum) {
  console.log(`Number matches`);
} else {
  console.log(`Not matchted number was ${gnum}`);
}
*/
/*
//get the current date
let today = new Date();
let cmas = new Date(today.getFullYear(), 11, 25);
if (today.getMonth() === 11 && today.getDate() > 25) {
  cmas.setFullYear(cmas.getFullYear() + 1);
}
let one_day = 1000 * 60 * 60 * 24;
console.log(
  Math.ceil(cmas.getTime() - today.getTime()) / one_day +
    "days left until christmas"
);
*/
/*
function checkPalindrome(string) {
  for (i = 0; i <= string.length; i++) {
    if (string[i] == string[string.length - 1 - i]) {
      return "Its a palindrome";
    } else {
      return "Not a palindrome";
    }
  }
}
console.log(checkPalindrome("nissin"));
console.log(checkPalindrome("mnishi"));
*/
/*
function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
}

// Test the function
console.log(validateEmail("nishi.joshi1@gmail.com")); // true
console.log(validateEmail("sid@hbg+.se")); // false
*/

function multiplyBy() {
  num1 = document.getElementById("firstnumber").value;
  num2 = document.getElementById("secondnumber").value;
  document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() {
  num1 = document.getElementById("firstnumber").value;
  num2 = document.getElementById("secondnumber").value;
  document.getElementById("result").innerHTML = num1 / num2;
}

let Person = function (name, birthYear) {
  this.name = name;
  this.birthYear = birthYear;
};
//let nishi = new Person("Nishi", 1985);
console.log(new Person("Nishi", 1985));
