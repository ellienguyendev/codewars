// Create a function that returns the sum of the two lowest positive numbers given an array
// of minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {
 let sortedArray = numbers.slice().sort((a, b) => a - b).slice(0, 2) // slices array, sorts it by ascending numbers, slices the first 2 values into an array
 let sum= sortedArray[0] + sortedArray[1] // adds the two numbers in the array by their index
 return(sum)
}

sumTwoSmallestNumbers([19, 5, 42, 2, 77])


// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.
function findShort(s){
  let array= s.split(' ') // splits string into array of words, looking for spaces ' ' between words
  let min = 0
  let wordLengths=[] // for new array of numbers
  for (let i=0;i<array.length;i++){
  let length = array[i].length //gets length of each individual word
  wordLengths.push(length) // pushes length to array
  }
  min= Math.min(...wordLengths) // gets minimum number in array. use spread ... to expand array
  return(min)
}

findShort("bitcoin take over the world maybe who knows perhaps")

// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains more than 3 numbers.
// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
 return arr.filter(function(elem){
  return arr.indexOf(elem)===arr.lastIndexOf(elem)
 })[0]

}

//This code should store "codewa.rs" as a variable called "name" but it's not working. Can you figure out why?
// var a == "code";
// var b == "wa.rs";
// var name == a + b;

var a = "code";
var b = "wa.rs";
var name = a + b;


// Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.
// Task
// Given an array of positive integers (the weights of the people),
// return a new array/tuple of two integers, where the first one is the total weight of team 1,
// and the second one is the total weight of team 2.
// Input >> Output Examples
// rowWeights([13, 27, 49])  ==>  return (62, 27)


function rowWeights(array){
  let team1 = []
  let team2 = []
  let team1Weight=0
  let team2Weight=0
  const reducer = (accumulator, currentValue) => accumulator + currentValue
  for(let i=0;i<array.length;i++){
    if (i%2===0){
      team1.push(array[i])
    }else{
      team2.push(array[i])
    }
  }
  if (array.length===1){
    let val=array[0]
    return ([val,0])
  }else {
    team1Weight= team1.reduce(reducer)
    team2Weight= team2.reduce(reducer)
    return ([team1Weight,team2Weight])
  }
}
