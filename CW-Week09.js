// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
// Examples:
// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [1, 1, 1, 1] ==> 15
// However, the arrays can have varying lengths, not just limited to 4.

const binaryArrayToNumber = array => {
  let value=0
  let sum=0
  let x=1
  //reverse array since binary starts from right to left
  let arr=array.reverse()
  for (let i=0;i<arr.length;i++){
  //index [0] value= 1, then 2,4,8... multiplies next index by (2 x previous value)
    value = arr[i]*x
    x*=2
    sum += value
  }
  return(sum)
};

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, and u as vowels for this Kata.
// The input string will only consist of lower case letters and/or spaces.

//for every vowel in the string passed, increase vowelsCount
function getCount(str) {
  var vowelsCount = 0;
  let array=str.split('')
  for (let i=0; i<array.length;i++){
    if(array[i]==="a"){
      vowelsCount++
    }else if(array[i]==="e"){
      vowelsCount++
    }else if(array[i]==="i"){
      vowelsCount++
    }else if(array[i]==="o"){
      vowelsCount++
    }else if(array[i]==="u"){
      vowelsCount++
    }
  }
  return vowelsCount
}

// Given an array of numbers (a list in groovy), determine whether the sum of all of the numbers is odd or even.
// Give your answer in string format as 'odd' or 'even'.
// If the input array is empty consider it as: [0] (array with a zero).
// Example:
// oddOrEven([0]) returns "even"
// oddOrEven([2, 5, 34, 6]) returns "odd"
// oddOrEven([0, -1, -5]) returns "even"

function oddOrEven(array) {
   let sum=0
   for (let i=0;i<array.length;i++){
     sum+=array[i]
   }
  if (sum % 2 === 0){
    return "even"
  }else{
    return "odd"
  }
}

// As a part of this Kata, you need to create a function that when provided with a triplet,
// returns the index of the numerical element that lies between the other two elements.
// The input to the function will be an array of three distinct numbers (Haskell: a tuple).
// For example:
// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

var gimme = function (arr) {
  //use spread ... to sort to not change state of original array, sorts in ascending order
 let array = [...arr].sort((a, b) => a - b)
 //array[1] will be middle number, compare with index 0,1,2 of original array to return its index value
 for(let i=0; i<arr.length;i++){
    if (arr[i]===array[1])
      return i
  }
};

//ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.
// eg:
// validatePIN("1234") === true
// validatePIN("12345") === false
// validatePIN("a234") === false

function validatePIN (pin) {
  let length = pin.split('').length
  let pinLength = length ===4 || length===6
  let numbers
  //to test if string contains only numbers, no letters or special characters
  if (/^\d+$/.test(pin)){
    numbers= true
  }else{
    numbers= false
  }//if pinLength = 4 or 6 and only contains numbers, return true. else, false
  if (pinLength && numbers=== true){
    return true
  }else {
    return false
  }}
