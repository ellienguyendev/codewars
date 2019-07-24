// Given two integers, which can be positive and negative, find the sum of all the numbers between including them too and return it. If both numbers are equal return a or b.
//
// Note! a and b are not ordered!
//
// Example:
// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

function GetSum(a,b){
  let sum = 0;
  if(a === b){ //no numbers in between, just return number
    return a;
  }else if(a < b){// if a is greater than b, loop through all nums between and b and find sum
    for(a; a <= b; a++){
      sum += a;
    }
  }else if(b < a){// if b is greater than a, loop through all nums between and b and find sum
    for(b; b <= a; b++){
      sum += b;
    }
  }
  return sum;
}


// After a hard quarter in the office you decide to get some rest on a vacation.
// So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
// You will need a rental car in order for you to get around in your vacation.
// The manager of the car rental makes you some good offers.
// Every day you rent the car costs $40. If you rent the car for 7 or more days,
// you get $50 off your total. Alternatively, if you rent the car for 3 or more
// days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).


function rentalCarCost (days){
  let cost = days * 40;
  if (days >= 7) {
    return cost -= 50
  }else if (days >= 3) {
    return cost -= 20
  }
  return cost
}

/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
Examples input/output:
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

function XOCheck (str){
  str = str.toLowerCase();
  let countX = 0;
  let countO = 0;

  for(let i=0; i<str.length; i++){
    if(str[i] === 'x'){
      countX++;
    } else if(str[i] === 'o'){
      countO++;
    }
  }

  if(countX === countO){
    return true;
  } else {
    return false;
  }
}

// implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
//
// The binary number returned should be a string.

function addBinary(num1,num2 ){
  let sum = num1 + num2;
  let binary = '';
  while (sum > 0){
    binary = (sum % 2) + binary
    sum = Math.floor(sum / 2 )
  }
  return binary;
}

// Your task is to write function findSum.
// Upto and including n, this function will return the sum of all multiples of 3 and 5.
// For example:
// findSum(5) should return 8 (3 + 5)
// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

function findSum(n){
  let result = 0;
  for(let i = 3; i <= n; i++){
    if(i % 3 === 0 || i % 5 === 0){
      result += i;
    }
  }
  return result
}
