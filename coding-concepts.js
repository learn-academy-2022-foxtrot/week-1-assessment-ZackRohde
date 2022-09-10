// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
//const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:


// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer: It will log "9" because it's inside of a string it will individually count each character. 
// b) Verify and explain: The answer was 10, which means I believe it counted the space in between?


// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: It seems that it will the 4th index of the string "Hello World" which would be "o".
// b) Verify and explain: It was correct! 


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: Based on the zero based index the 1 index is Ruby.
// b) Verify and explain: It was correct! 


// --------------------4) What will this log?

//onst weekendDays = ["saturday", "sunday"]
    //console.log(weekendDays.toUpperCase())

// a) Your answer: I know .toUpperCase will capatialize what is being called upon and for this it is calling weekendDays which is saturday and sunday. Saturday and sunday will return the output of SATURDAY and SUNDAY. 
// b) Verify and explain: I received an error. I believe it's because we would be changing how it is inputted and with a const varaible you cannot change in this case the elements inside the array.


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
    console.log(typeof dataTypes.length)

// a) Your answer: 
// b) Verify and explain:
