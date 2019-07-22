// Given two numbers and an arithmetic operator (the name of it, as a string),
// return the result of the two numbers having that operator used on them.
// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.
// The four operators are "add", "subtract", "divide", "multiply".
// A few examples:
// arithmetic(5, 2, "add")      => returns 7
// arithmetic(5, 2, "subtract") => returns 3
// arithmetic(5, 2, "multiply") => returns 10
// arithmetic(5, 2, "divide")   => returns 2.5
// Try to do it without using if statements!

function arithmetic(a, b, operator){
  switch(operator) {   // The switch statement is used to perform different actions based on different conditions.
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
  }
}

// call function
arithmetic (5,2,'add')

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and
// carries the "instructions" for the development and functioning of living organisms.
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
// You have function with one side of the DNA (string, except for Haskell); you need to
// get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
// DNAStrand ("ATTGC") // return "TAACG"
// DNAStrand ("GTAT") // return "CATA"



function DNAStrand(dna){
  let result =[]
  for (let i=0; i<dna.length;i++){   // extract individual characters from string and loop until reached length of argument
    let str =dna.charAt(i)
    if (str==='A'){
     str= 'T'
     result.push(str) // push paired letter into array, repeat for all four letters
    } else if (str==='T'){
     str= 'A'
     result.push(str)
    } else if (str==='C'){
     str= 'G'
     result.push(str)
    } else if (str==='G'){
     str= 'C'
     result.push(str)
    }
  }
  let finalString = result.join('')  //takes character strings in our array and creates one string with join('') --default without '' is commas
  return (finalString)
}

//call function
DNAStrand ('ATTGC')

// Take 2 strings s1 and s2 including only letters from ato z.
// Return a new sorted string, the longest possible, containing distinct letters,
// each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

function longest(s1, s2) {
  let str= [s1,s2]
  let array =[]
  let stringsTied=str.join('')   // creates one string out of arguments
  for (let i=0; i<stringsTied.length;i++){   // extracts individual characters from stringsTied until .length reached
    let letters =stringsTied.charAt(i)
    array.push(letters) // pushes them into array
  }
  let uniqueSet = new Set(array) // creates a new Set (object) of unique values from our array. no repeated values built into Set
  let backToArray = [...uniqueSet]  // ... = spread syntax which expands what comes after into the array we declared
  let sorted = backToArray.sort() // sorts strings in backToArray alphabetically
  let finalString=sorted.join('') // use join('') to connect all of our letters together without spaces or commas
  return (finalString)
}

//call function
longest ("xyaabbbccccdefww","xxxxyyyyabklmopq")

// Complete the method which accepts an array of integers, and returns one of the following:
// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array){
	var state;
	if (array[1] > array[0]){
		state = "yes, ascending";
	}

	if (state==="yes, ascending"){
			for (var i = 1; i<array.length; i++){
			if(array[i]>= array[i-1]){
				state = "yes, ascending";
			} else return state = "no";
		}
	}
	if (state!=="yes, ascending"){
			for (var i = 1; i<array.length; i++){
			if(array[i]<= array[i-1]){
				state = "yes, descending";
			} else return state = "no";
		}
	}
	return state;
}

// isSortedAndHow([1, 2]) --> 'yes, ascending
//
// isSortedAndHow([15, 7, 3, -8]) --> 'yes, descending'
//
// isSortedAndHow([4, 2, 30]) --> 'no'


// You are going to be given a word. Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character.
// If the word's length is even, return the middle 2 characters.
// #Examples:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"

function getMiddle(s)
{
  let letters=s.split("")
  let length=letters.length - 1
  let middle=length/2
  if (length %2 ===0){
    return letters[middle]
  }else if (length %2 !==0) {
    let formula = Math.floor(middle)
    let firstChar = letters[formula]
    let secondChar = letters[formula+1]
    let joined= [firstChar, secondChar]
    return joined.join('')
  }
  else if (length===0){
    return s
  }
}
