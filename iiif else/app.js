
//? IF ELSE EXCERCISE:

//! Q1:

var number = +prompt(' number plis ');

if(number % 3 === 0 ){
console.log('The number you given is divisible by 3 ' );
}else{
console.log('The number is not divisible by 3');
}

//! Q2:

var num = +prompt(' number plis');

if( num % 2 === 0){
console.log('The number you give is even');
} else[
    console.log('The number you give is odd')
]

// ! Q3:

var age = +prompt('age plis');

if(age>18 ){
console.log('Old enough');
} else{
    console.log('Too young');
}

//! Q4:

var userName = prompt('Enter the name');
var namaiwa = 'bro'
if(userName == namaiwa){
console.log(' same name bruv');
} else{
}

//! Q5:

var num = +prompt("Enter the number");
if (num % 3 !== 0) {
  console.log("number is not divisible by 3");
} else {
  num % 3 === 0;
  console.log("Number is divisible by 3");
}

//! Q6:

function CharacterType(character) {
  var charCode = character.charCodeAt(0);
  if (charCode >= 48 && charCode <= 57) {
    console.log("Number");
  } else if (charCode >= 65 && charCode <= 90) {
    console.log("uppercase");
  } else if (charCode >= 97 && charCode <= 122) {
    console.log("lowercase");
  } else {
    console.log("other characters");
  }
}
var input = prompt("enter the character");
var result = CharacterType(input);

// Q7:

// Q8:

// Q9:

var year = +prompt('Enter the year');
if(year % 4 === 0 || year % 100 === 0 || year % 400 === 0 ){
console.log('This year ' + year + ' is a leap year');
} else{
    console.log('This year is not a leap year');
}

//! Q 10:

var password1 = prompt('password');
var password2 = prompt('confirm password');

if (password1 === password2){
console.log('Correct!');
} else {
console.log('Incorrect!');
}

//! Q11:

var userName = prompt('Enter username');
var firstName = 'somthingsomthing';

if(userName === firstName){
console.log('Hello somthingsomthing');
} else {
    console.log('You are not some some');
}

//! Q12:

var hour = +prompt("Enter on the 24hr clock")

if (hour < 18){
console.log('Good day!');
} else if ( hour <= 24){
console.log('Good evening!');
} else {
    console.log('cant use global time ??');
}

//! Q13:

var integer1 = +prompt('Enter the first integer!')
var integer2 = +prompt('Enter the second integer!')

if (integer1 === integer2) {
    console.log(integer1 + ' & ' + integer2 +' both integer are equal ')
} else if (integer1 > integer2 ){
console.log(integer1 + ' & ' + integer2 + ' integer1 is greater than integer 2');
} else if (integer1 < integer2){
console.log(integer1 + ' & ' + integer2 + ' integer1 is less than integer2');
} else{
    console.log('please put the corect integer');
}

//! Q14:

var num = +prompt('Enter the number');

if(num > 0 ) {
console.log('The number you enter is positive')
} else if (num < 0 ) {
console.log('The number you enter is negative');
} else if (num === 0){
console.log('The number you enter is zero');
} else{
    console.log('Please provide the number rather than other symbols');
}

//! Q15:

var hour = +prompt("Enter the current hour");

if (hour >= 6 && hour < 9) {
  console.log("Breakfast served");
} else if (hour >= 9 && hour < 11) {
  console.log("Breakfast time is over");
} else if (hour >= 11 && hour < 15) {
  console.log("Time for lunch");
} else if (hour >= 15 && hour < 18) {
  console.log("It's dinner time");
} else if (hour >= 18 && hour < 19) {
  console.log("Dinner time is over");
} else if (hour >= 19 && hour <= 24) {
  console.log("Sorry, you will have to wait or go get a snack");
} else {
  console.log("Enter correct time!");
}

//! Q16:

//! Q17:

var character = prompt("Ente the character");

//! Q19:

let month = prompt('Enter the month number(1--10)');
switch (month){
    case '1':
        console.log('January');
        break;
    case '2':
        console.log('February');
        break;
    case '3':
        console.log('March');
        break;
    case '4':
        console.log('April');
        break;
    case '5':
        console.log('May');
        break;
    case '6':
        console.log('June');
        break;
    case '7':
        console.log('July');
        break;
    case '8':
        console.log('August');
        break;
    case '9':
        console.log('September');
        break;
    case '10':
        console.log('October');
        break;
    case '11':
        console.log('November');
        break;
    case '12':
        console.log('December');
        break;

    default:
        console.log('Enter the valid month number');
}

//! Q20:

let age = prompt('Enter you age');
console.log(age >= 18 ? "You can vote" : "You shall not vote");
