// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Describing your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create the code that determines which of the two strings has more characters. Use the two sets of test variables provided.

// Describe your process:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
// const fruit1 = "cherry"
// const fruit2 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create the code that determines if a given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Describe your process: Based on their being 3 different tempatures we will use a conditional statemenet to check if the tempatures are below, at, or above the boiling points. We will also use relational operators to check if the tempature is greater than, less than, or equal too the different boiling points. I'll also use string interpolation to inject the variable into the console log. Lastly, we will console log each individual (3 different tempatures) to ensure when we run terminal it is the correct answer. 

const temp = 250

if(temp < 212) {
    console.log(`${temp} is below boiling point.`)
} else if (temp === 212) {
    console.log(`${temp} is at boiling point.`) 
} else if (temp > 212) {
    console.log(`${temp} is above boiling point.`)
} else {
    console.log("Invalid.")
}

// Expected output: "42 is below boiling point"

// const temp = 350
// Expected output: "350 is above boiling point"

// const temp = 212
// Expected output: "212 is at boiling point"

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Describe your process: I know to combine two arrays we will use the .concat getter. I know .length returns the number of how many elements are inside the array. I also know that the const varaible cannot be changed, so what I will do is create my own variable and combine the two arrays into one. Then I will console log the new variable twoWorldSeriesRuns with .length to return the number of 9 which is the amount of arrays combined between the two of them. 

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]

let padresTwoWorldSeriesRuns = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
console.log(padresTwoWorldSeriesRuns.length)

// Expected output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Describe your process: I know .reverse reverses the order of the string. However, you cannot reverse it while it is a string you must split it into an array which you can then reverse it and join it back together. 

const currentCohort = "Foxtrot 2022"
console.log(currentCohort.split("").reverse().join(""));

// Expected output: "2202 tortxoF"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Describe your process: I know by definition .theLastIndexOf will return the last index given. I need to console log everything together, so myNumbers .lastIndexOf will return the last index of the value and the value is the second const. 

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42

console.log(myNumbers.lastIndexOf(givenValue1));

// Expected output: 7

const givenValue2 = 10
// Expected output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Describe your process: I know sorting it via .sort will make it smallest to largest, and we were not taught largest to smallest so I knew I could reverse it. Expected out was correct! 

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

console.log(sanDiegoSummerTemperatures.sort().reverse());
console.log(sanDiegoWinterTemperatures.sort().reverse());
