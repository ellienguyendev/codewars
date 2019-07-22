// Write a function named repeater() that takes two arguments (a string and a number),
//and returns a new string where the input string is repeated that many times.
// Example:
// Repeater.repeat("a", 5) --> "aaaaa"

function repeater(string, n){
  let newString
  let arr = []
  for (let i=1; i<=n; i++){
    arr.push(string)
  }
  newString = arr.join('')
  return newString
}

//OR

function repeater(string, n){
  return string.repeat(n)
}
