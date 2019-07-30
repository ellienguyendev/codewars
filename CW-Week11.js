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
