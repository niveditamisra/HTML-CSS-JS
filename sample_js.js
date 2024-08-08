/*
let a = "10.5";
let b = "1.2";

alert(Number(a) + Number(b));

OR;

let a = "10.5";
let b = "1.2";
let c = Number(a) + Number(b);
alert(c);


let str = 'Welcome to "Javascript" course';
alert(str);


let string = 'Welcome to Javascript course';
let result = string.replace('Javascript','World');
alert(string);
alert(result);


let str = 'MynameisNishiMynameisNishiMynameisNishinishi';
alert (str.length); // Length of original full string
alert (str.replace(/Nishi/gi,'').length); // Length of string after removing 'Nishi'
// Length of original string - Length of string without Nishi / 5 (beacuse Nishi has 5 characters)
let result = ((str.length) - (str.replace(/Nishi/gi,'').length))/5; 
alert (result); 

let string1='Hello';
let string2='Javascript';
let result1=string1+" "+string2;
alert(result1);


/*
let str = "This is a nice world where we are learning javascript. This string is just an example of how we modify the strings in javascript. We will replace strings with the string text. This is a nice world where we are learning javascript. This string is just an example of how we modify the strings in javascript. We will replace strings with the string text. This is a nice world where we are learning javascript. This string is just an example of how we modify the strings in javascript. We will replace strings with the string text"
let result = ((str.length) - (str.replace(/string/g,'').length))/6;
alert (result);
*/

// nishi.joshi@gmail.com
//we want this output:
//Email id: nishi.joshi
//Mail: gmail
//Domain: Com

/*
																						
	n	i	s	h	i	.	j	o	s	h	i	 @	g	 m	a	 i	l	 .	c	 o	m	
	0	1	2	3	4	5	6	7	8	9	10 11 12 13 14 15 16 17 18 19 20	
																						


let emailId = 'nishi.joshi.misra@yahoogmail.com'

//emailId.indexOf('@')
//let result= emailId.substr(11);


alert(emailId.substring(0,emailId.indexOf('@')));

alert(emailId.substring(emailId.indexOf('@')+1,emailId.lastIndexOf('.')));

alert(emailId.substr(emailId.lastIndexOf('.')+1));

//alert();

*/

//  Break URLs

// https://www.google.com

// https://www.ndtv.com

// https://www.svt.se

// https://www.apotea.se

/*
let url = 'https://www.apotea.se'

alert(url.substring(0,url.indexOf('.')));


alert(url.substring(url.indexOf('.')+1,url.lastIndexOf('.')));
*/
/*
let string5='SHIKHINMISRA';
alert(string5.substring(NaN,7));
*/

//Difference between substring and substr:
/*
let string6='Helloo';
alert(string6.substring(1,5));//[ello]

alert(string6.substr(1,5));//[elloo]
alert(string6.slice(1,5));//[ello]
*/
/*
let string7='Geeksforgeeks';
//alert(string7.substr(3,7));
alert(string7.substring(3,7));

let string8='Javascript tutorial';
//alert(string8.slice(4,10)); //script
alert(string8.slice(0,4));
*/

//https//www.ndtv.com:

let url1 = "https://www.ndtv.com";

//let result=url1.substring(0,url1.indexOf('.'));
//alert(url1.lastIndexOf('/')+1);
alert(url1.substring(url1.lastIndexOf("/") + 1, url1.indexOf(".")));

alert(url1.substring(url1.indexOf(".") + 1, url1.lastIndexOf(".")));
alert(url1.substring(url1.lastIndexOf(".") + 1));
