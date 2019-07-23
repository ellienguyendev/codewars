// Write a function named repeater() that takes two arguments (a string and a number),
//and returns a new string where the input string is repeated that many times.
// Example:
// Repeater.repeat("a", 5) --> "aaaaa"

function repeater(string, n){
  let newString
  let arr = []
  //loop to push string to arr (n) times
  for (let i=1; i<=n; i++){
    arr.push(string)
  }
  //join array to get new string
  newString = arr.join('')
  return newString
}

//OR

function repeater(string, n){
  return string.repeat(n)
}

// Your task is to make a function that can take any non-negative integer
// as a argument and return it with its digits in descending order.
// Essentially, rearrange the digits to create the highest possible number.
// Examples:
// Input: 21445 Output: 54421
// Input: 145263 Output: 654321
// Input: 1254859723 Output: 9875543221

function descendingOrder(n){
  //n to string to split individual numbers to an array
  let arr = n.toString().split('')
  //sort array, reverse to get descending then join
  let descending = arr.sort().reverse().join('')
  //parseInt string to number
  return parseInt(descending)
}
