/*
let validInput = prompt("Enter a valid email Id");

if (
  validInput.length - validInput.replace(/@/g, "").length === 1 &&
  validInput.substring(0, 1) !== "@" &&
  validInput.substring(0, 1) !== " " &&
  validInput.substring(validInput.lastIndexOf(".") + 1).length > 1 &&
  validInput.substring(validInput.lastIndexOf("@") + 1).length -
    validInput.substring(validInput.lastIndexOf("@") + 1).replace(/\./g, "")
      .length ===
    1
) {
  alert("Valid email id");
} else {
  alert("Invalid email id");
}
*/

/*
let string='His dominant run extended through to the 2016 French Open, where he completed his first Career Grand Slam and a non-calendar year Grand Slam,'
//let result= string.replace(/Grand/g,'French');
//alert(result);

let result=((string.length)-(string.replace(/Grand/gi,'').length))/5;
alert(result);
*/

//siddharth.misra@helsingborg.se
//output:siddhart,misra,helsingborg,se
/*
let emailId = "siddharth.misra@helsingborg.se";
alert(emailId.substring(0, emailId.indexOf(".")));
alert(emailId.substring(emailId.indexOf(".") + 1, emailId.indexOf("@")));
alert(emailId.substring(emailId.indexOf("@") + 1, emailId.lastIndexOf(".")));
alert(emailId.substring(emailId.lastIndexOf(".") + 1));
*/
/*
let emailId = "nishi.joshi1@gmail.com";
while (emailId == "") {
  alert(true);
}

{
  alert(false);
}
*/

//enter a valid email id(nishi.joshi1@gmail.com)

/*
let emailId = prompt('Enter a valid email-id');



//alert (validateEmailId(emailId));

function validateEmail(emailId) 
{

if((((emailId.length)-(emailId.replace(/@/g,'').length))===1)
&& emailId.substring(0,1)!=='@'
&& emailId.substring(0,1)!==' ' 
&&((emailId.substring(emailId.lastIndexOf('.')+1).length)>1)
&&((emailId.substring(emailId.lastIndexOf('@')+1).length)-(emailId.substring(emailId.lastIndexOf('@')+1).replace(/\./g,'').length)===1))
	{
		return 'Valid emailId';
	} 
	else 
	{
		return  'Invalid emailid';
	}

	
	emailId=prompt('Enter a valid email-id')

}

alert (validateEmail(emailId));
*/

// Break url's
//https://www.facebook.com
//Output:www,facebook,com
/*
let url= prompt('Enter a valid url');
alert(url.substring(url.lastIndexOf('/')+1,url.indexOf('.')));
alert(url.substring(url.indexOf('.')+1,url.lastIndexOf('.')));
alert(url.substring(url.lastIndexOf('.')+1));
*/

/*
let rep=1;
while(rep<=10){
	alert(`Exercise ${rep}`);
	rep++ ;
}
*/

/*
let dice = Math.trunc(Math.random()*6)+1;

while(dice!==6){
	//alert(`You rolled a ${dice}`);
	console.log(`You rolled a ${dice}`);
	 dice = Math.trunc(Math.random()*6)+1;
if(dice===6)	console.log('Game stop!')
	 
}
*/

/*
let years=[1985,1982,2012];
let ages=[];

for(let i=0;i<years.length;i++){
	ages.push(2024-years[i]);
}
console.log(ages);

*/

/*
let today=new Date();
let date=today.getDate();
let month = today.getMonth()+1;
let year=today.getFullYear();

	

if(date<10){
	date='0'+ date;
}

if(month<10){
	month='0'+ month;
}

today= month + '-'+ date + '-' + year;

console.log(today);
*/

/*
let emailId=prompt('Enter a valid emailid');

 function validateEmail(emailId){
if((((emailId.length)-(emailId.replace(/@/g,'').length))===1)
&& emailId.substring(0,1)!=='@'
&& emailId.substring(0,1)!==' '
&& (emailId.substring(emailId.lastIndexOf('.')+1)>1) 
&& ((emailId.substring(emailId.indexOf('@')+1).length)-((emailId.substring(emailId.indexOf('@')+1).replace(/\./g,'').length)===1))
{
 alert('Valid email-id');
} 
 else 
{
alert('Invalid email-id');
}

	
	emailId=prompt('Enter a valid emailid');
	
	*/

/*
let text1= prompt('Enter a text:');
for(i=1;i<text1.length;i++){
	text1=text1[text1.length-1]+text1.substring(0,text1.length-1);
	alert(text1);
}



	
	
let text = prompt('Enter a text: ');
for(i=1;i<=text.length;i++){
	text=text[text.length-2]+text.substring(0,text.length-2);
	alert(text);
}
*/

/*
let string = prompt("Enter text:");
for (i = 0; i <= string.length; i++) {
  if (string[i] == string[string.length - 1 - i]) {
    alert("Its a palindrome");
    break;
  } else {
    alert("Not a palindrome");
    break;
  }
}
*/
/*
let side1=10;
let side2=11;
let side3= 5;
let s=(10+11+5)/2;//semi-perimeter
alert(s);

let a = Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));//area of a triangle
alert(a);
*/

/*
let today= new Date();
let date= today.getDate();
let month= today.getMonth()+1;
let year=today.getFullYear();

if(date<10){
	date=0+date;
}

if(month<10){
	month=0+month;
}

today=month+'-'+ date +'-'+year;
console.log(today);
*/

/*
let leapYear=year=>new Date(year,1,29).getMonth()===1;

console.log(leapYear(2024));
console.log(leapYear(2012));
console.log(leapYear(2015));
*/
/*
function leapYear(year){
	return (year % 100===0)?(year % 400===0):(year % 4===0);
}
console.log(leapYear(2024));
console.log(leapYear(2005));
console.log(leapYear(2009));
*/

/*
let string=prompt('Enter a text : ');
function checkPalindrome(string){
	for(let i=0;i<=string.length;i++){
		if (string[i]!==string[string.length-1-i]){
			return 'It is not a Palindrome';
		}
		
}
return 'It's a Palindrome';
 }

let value=checkPalindrome(string);
console.log(value);
*/
/*
for (let year = 2009; year <= 2024; year++) {
  let d = new Date(year, 0, 1);

  if (d.getDay() === 0) {
    console.log(`In ${year} 1st January is Sunday`);
  }
}
*/
/*
let today = new Date();
alert(today);

let day = today.getDay();
alert(day);

let dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

console.log(`Today is : ${dayList[day]}`);

let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();

let meridiem = hour >= 12 ? "PM" : "AM";

hour = hour >= 12 ? hour - 12 : hour;

if (hour === 0 && meridiem === "PM") {
  if (minute === 0 && second === 0) {
    hour = 12;
    meridiem = "Noon";
  } else {
    hour = 12;
    meridiem = "PM";
  }
}

if (hour === 0 && meridiem === "AM") {
  if (minute === 0 && second === 0) {
    hour = 12;
    meridiem = "Midnight";
  } else {
    hour = 12;
    meridiem = "AM";
  }
}

console.log(`Current time : ${hour}${meridiem}:${minute}:${second}`);
*/
/*
let today = new Date();
let date = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();
alert(month);
alert(year);
alert(date);

if (date < 10) {
  date = "0" + date;
}

if (month < 10) {
  month = "0" + month;
}

today = date + "/" + month + "/" + year;
console.log(today);
*/
/*
function print_current_page() {
  window.print();
}
*/

/*
let side1 = 10;
let side2 = 10;
let side3 = 12;

let semiPerimeter = (10 + 10 + 12) / 2;
alert(semiPerimeter);

let area = Math.sqrt(
  semiPerimeter *
    (semiPerimeter - side1) *
    (semiPerimeter - side2) *
    (semiPerimeter - side3)
);
console.log(area);
*/
/*
let text = prompt("Enter a atring");
for (i = 0; i <= text.length; i++) {
  text = text[text.length - 1] + text.substring(0, text.length - 1);
  console.log(text);
}
*/

/*
let string = "Javascript";
let result = string.substring(4, 12);
console.log(result);
*/
/*
let leapYear = (year) => new Date(year, 1, 29).getMonth() === 1;
console.log(leapYear(2024));
*/
/*
function leapYear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
console.log(leapYear(2012));

for (let year = 2012; year <= 2025; year++) {
  let dateObject = new Date(year, 0, 1);
  if (dateObject.getDay() === 0) {
    console.log(`In ${year} 1st January is Sunday!`);
  }
}
*/

/*
let num = Math.ceil(Math.random() * 10);
console.log(num);
let gnum = prompt("Enter a new number");
while (gnum !== "No") {
  if (gnum == num) {
    console.log("Correct number");
  } else {
    console.log("Incorrect number");
  }
  gnum = prompt("Enter a new number");
}
*/
/*
let string = prompt("Enter a string");
function checkPalindrome(string) {
  for (let i = 0; i <= string.length; i++) {
    if (string[i] !== string[(string.length - 1) - i]);
    return "Its not a Palindrome";
  }
  return "Its a Palindrome";
}
let value = checkPalindrome(string);
console.log(value);
*/

/*
function cToF(celcius) {
  let cel = celcius;
  let celToFah = (cel * 9) / 5 + 32;
  let message = cel + "\xB0C is" + celToFah + "\xB0F";
  console.log(message);
}

function fToC(fahrenheit) {
  let feh = fahrenheit;
  let fahToCel = feh - (32 * 5) / 9;
  let message = feh + "\xB0F is" + fahToCel + "\xB0C";
  console.log(message);
}

cToF(100);
fToC(100);
*/

/*
function sumTriple(x, y) {
  if (x == y) {
    return 3 * (x + y);
  } else {
    return x + y;
  }
}
console.log(sumTriple(10, 20));
console.log(sumTriple(10, 10));
*/
/*
function numDifference(n) {
  if (n <= 19) {
    return 19 - n;
  } else {
    return (19 - n) * 3;
  }
}
console.log(numDifference(15));
console.log(numDifference(20));
^*/

/*
function numDifference(n) {
  if (n > 13) {
    return (n - 13) * 2;
  } else {
    return 13 - n;
  }
}

console.log(numDifference(15));
console.log(numDifference(10));
*/
/*
fileName = "system.php";
console.log(fileName.split(".").pop());

fileName = "nishi.html";
console.log(fileName.split(".").pop());

/////
function test50(x, y) {
  return x == 50 || y == 50 || x + y == 50;
}
console.log(test50(50, 30));
console.log(test50(20, 20));

////

function testHundred(x) {
  return Math.abs(100 - x) <= 20 || Math.abs(400 - x) <= 20;
}

console.log(testHundred(15));
console.log(testHundred(30));
console.log(testHundred(90));

////

function positive_negative(x, y) {
  if ((x > 0 && y < 0) || (x < 0 && y > 0)) {
    return true;
  } else {
    return false;
  }
}
console.log(positive_negative(2, 2));
console.log(positive_negative(-5, 2));
console.log(positive_negative(-2, -2));

/////(How many Misra in the sentence)
let stringName =
  "My name is Nivedita Misra ,Nishi Misra and I stay in Helsingborg";
console.log(stringName.split(" ").length); //
let result = (stringName.length - stringName.replace(/Misra/g, "").length) / 5;

console.log(result);

///
function strCheck(str1) {
  if (str1 == null || str1 == undefined || str1.substring(0, 2) == "py") {
    return str1;
  } else {
    return "py" + str1;
  }
}
console.log(strCheck("python"));
console.log(strCheck("thon"));
console.log(strCheck("ramid"));

///removing a character
function removeCharacter(str1, char_pos) {
  part1 = str1.substring(0, char_pos);
  part2 = str1.substring(char_pos + 1, str1.length);
  return part1 + part2;
}

console.log(removeCharacter("shikkhin", 3));
console.log(removeCharacter("Niishi", 1));

function first_lastChar(text) {
  part1 = text.substring(1, text.length - 1);
  alert(part1);

  part2 = text.charAt(text.length - 1) + part1 + text.charAt(0);
  return part2;
}
console.log(first_lastChar("nishi"));
console.log(first_lastChar("shikhin"));
*/

/*
let emailId = prompt("Enter a valid email-id");

function validateEmail(emailId) {
  if (
    emailId.length - emailId.replace(/@/g, "").length === 1 &&
    emailId.substring(0, 1) !== "@" &&
    emailId.substring(0, 1) !== " " &&
    emailId.substring(emailId.lastIndexOf(".") + 1).length > 1 &&
    emailId.substring(emailId.lastIndexOf("@") + 1).length -
      emailId.substring(emailId.lastIndexOf("@") + 1).replace(/\./g, "")
        .length ===
      1
  ) {
    return "Valid email-id";
  } else {
    return "Invalid email-id";
  }
}
console.log(validateEmail(emailId));
*/

/*
function ab_check(string) {
  return /a...b/.test(string) || /b...a/.test(string);
}
console.log(ab_check("chaincbdf"));
console.log(ab_check("pandamichbytr"));

function equalCharacters(string) {
  let p = string.replace(/[^p]/g, "");
  let s = string.replace(/[^s]/g, "");
  let p_len = p.length;
  let s_len = s.length;
  if (p_len === s_len) {
    return true;
  }
  return false;
}
console.log(equalCharacters("sunprotection"));
console.log(equalCharacters("sunsprotection"));
*/

/*
function divisionStringFormat(x, y) {
  if (y === 0) {
    return "Not divisible";
  }
  let result = x / y;
  let formattedResult = result.toLocaleString(undefined, {
    maximumFractionDigits: 2,
  });
  return "Result: " + formattedResult;
}

console.log(divisionStringFormat(1000000, 701));
*/

/*
function multipleCopies(string, n) {
  if (n < 0) {
    return false;
  } else {
    return string.repeat(n);
  }
}
console.log(multipleCopies("nishi", 5));
console.log(multipleCopies("abc", 10));

function newString(string) {
  if (string.length >= 3) {
    result = string.substring(string.length - 3);
    return result + result + result;
  }
}
console.log(newString("javascript"));
console.log(newString("python 2.0"));
*/

/*
function firstHalf(string) {
  if (string.length % 2 === 0);
  result = string.slice(0, string.length / 2);
  return result;
}
console.log(firstHalf("JavaScript"));
console.log(firstHalf("Siddharth"));

function withoutCharacters(string) {
  return string.substring(1, string.length - 1);
}
console.log(withoutCharacters("Nishi"));
*/

/*
function concatenate(str1, str2) {
  str1 = str1.substring(1, str1.length);
  str2 = str2.substring(1, str2.length);
  return str1 + str2;
}
console.log(concatenate("Nishi", "Siddharth"));

function reverse(string) {
  if (string.length >= 3);
  return string.slice(-3) + string.slice(0, -3);
}
console.log(reverse("Nishi"));
*/
/*
function oddLength(string) {
  if (string.length % 2 !== 0);
  {
    midIndex = (string.length + 1) / 2;
    return string.slice(midIndex - 2, midIndex + 1);
  }
  return string;
}
console.log(oddLength("Nishi"));
console.log(oddLength("siddharth"));
*/

function concatenation(str1, str2) {
  let m = Math.min(str1.length, str2.length);
  //alert(m)//minimun length
  return str1.substring(str1.length - m) + str2.substring(str2.length - m);
}
console.log(concatenation("Python", "JS"));
