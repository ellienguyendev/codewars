//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//The output should be two capital letters with a dot seperating them.
//It should look like this:
//Sam Harris => S.H
//Patrick Feeney => P.F

function convertName (name){
  let arr= name.split(' ') // splits name into array with first and last name
  let firstIn = arr[0][0] // first letter of first element
  let lastIn = arr[1][0] // first letter of second element
  return (firstIn+"."+lastIn).toUpperCase() // concatonate first letter . second letter and capitalize
}

// Consider an array of sheep where some sheep may be missing from their place.
// We need a function that counts the number of sheep present in the array (true means present).
// For example,
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

function countSheeps(arrayOfSheep) {
  let count =0
  for (let i=0; i<=arrayOfSheep.length; i++){
    if (arrayOfSheep[i]=== true){
    count++
    }
  }
  return count
}

// Simple, remove the spaces from the string, then return the resultant string.
function noSpace(x){
  let newString = x.split(' ').join('')
  return newString
}

// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.


function howMuchILoveYou(nbPetals) {
    let phrase = nbPetals % 6;
    switch(phrase) {
        case 1:
            return 'I love you';
        case 2:
            return 'a little';
        case 3:
            return 'a lot';
        case 4:
            return 'passionately';
        case 5:
            return 'madly';
        default:
            return 'not at all';
    }
}

// Write a method smash that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
//
// Example
// var words = ['hello', 'world', 'this', 'is', 'great'];
// smash(words); // returns "hello world this is great"
// Assumptions
// You can assume that you are only given words.
// You cannot assume the size of the array.
// You can assume that you will always get an array.

function smash (words) {
 return words.join(' ')
};
