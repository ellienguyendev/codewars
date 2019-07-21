// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is an isogram.
// Assume the empty string is an isogram. Ignore letter case

function isIsogram(str){
   let firstLetter;
   let nextLetter;
   str = str.toLowerCase();
   for(firstLetter = 0; firstLetter < str.length; ++firstLetter) {
     for(nextLetter = firstLetter + 1; nextLetter < str.length; ++nextLetter) {
       if(str[firstLetter] === str[nextLetter]) {
         return false;
       }
     }
   }
   return true;
}

isIsogram ("isogram")

// Given a set of numbers, return the additive inverse of each.
//Each positive becomes negatives, and the negatives become positives.

function invert(array) {
   return array.map((num) => num > 0 ? -num : Math.abs(num));
}

//Write function avg which calculates average of numbers in given list.

function find_average(array) {
  let average = 0
  let sum = 0

  for ( let i = 0; i < array.length; i++) {
    let arrayNum = array[i]
    sum += arrayNum
    average = sum / array.length
  }
    return parseFloat(average)
}

// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
// For example:
// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5

function litres(time) {
  let litres = time * 0.5;
  litres = litres - litres%1;
  return litres;
}

//Rock Paper Scissors
//Let's play! You have to return which player won! In case of a draw return Draw!.

const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  let rules = {rock: "scissors", paper: "rock", scissors: "paper"};
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  }
  else {
    return "Player 2 won!";
  }
};
