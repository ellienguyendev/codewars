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

// Given an integer as input, can you round it to the next (meaning, "higher") 5?
// Examples:
// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.

function roundToNext5(n){
  return Math.ceil(n/5) * 5;
}

// Each exclamation mark weight is 2; Each question mark weight is 3.
// Put two string left and right to the balance, Are they balanced?
// If the left side is more heavy, return "Left"; If the right side is more heavy, return "Right";
// If they are balanced, return "Balance".
//
// Examples
// balance("!!","??") === "Right"
// balance("!??","?!!") === "Left"
// balance("!?!!","?!?") === "Left"
// balance("!!???!????","??!!?!!!!!!!") === "Balance"

function balance(left,right){
  let excount =0
  let quescount=0
  let valLeft
  let valRight
  let arrLeft = left.split('')
  let arrRight= right.split('')

  //loop through left and right arrays to find number of ! and ?
  for(let x=0;x<arrLeft.length;x++){
    if (arrLeft[x]==="!"){
      excount++
    }else if (arrLeft[x]==="?"){
      quescount++
    }
  }

  valLeft = (excount *2)+(quescount *3)

  for(let y=0;y<arrRight.length;y++){
    if (arrRight[y]==="!"){
      excount++
    }else if (arrRight[y]==="?"){
      quescount++
    }
  }

  //valRight continued to add to excount + quescount so subtract valLeft to get only right value
  valRight = (excount *2)+(quescount *3)-valLeft

  if (valLeft > valRight){
    return "Left"
  } else if (valLeft < valRight){
    return "Right"
  } else {
    return "Balance"
  }
}

// Peter can see a clock in the mirror from the place he sits in the office.
// When he saw the clock shows 12:22. He knows that the time is 11:38.
// Please complete the function WhatIsTheTime(timeInMirror), where timeInMirror
// is the mirrored time (what Peter sees) as string.
// Return the real time as a string.
// Consider hours to be between 1 <= hour < 13.
// So there is no 00:20, instead it is 12:20.
// There is no 13:20, instead it is 01:20.

function WhatIsTheTime(timeInMirror){

  let mir = timeInMirror.split(':')
  let hour = parseFloat(mir[0])
  let min = parseFloat(mir[1])
  let realHour = 11 - hour
  let realMin = 60 - min
  let realTime

  //conditionals if mirrored time hour is 11 or 12 because formula doesn't apply
  if (hour ===12){
    realHour = 11
  }
  else if (hour ===11){
    realHour = 12
  }

  //for x:00 times, display mirrored hour rather than i.e 7:60
  if(realMin === 60){
    realHour += 1
    realMin = 0
  }

  //single digit times need to concatonate 0 when converted back to string
  if(realHour.toString().length===1){
    realHour = '0'+realHour
  }
  if(realMin.toString().length===1){
    realMin = '0'+realMin
  }

  //if 6PM, or 12PM -> realTime is the same, else realTime = realHour + realMin based on calculations
  if (timeInMirror==="06:00" || timeInMirror==="12:00"){
    realTime = timeInMirror
  } else {
    realTime = realHour + ':' + realMin
  }

  return realTime
}
