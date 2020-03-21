// Problem #1
// Write a loop that will stop when i is 5.

console.log(`Problem #1`);
let i = 0;
while (i <= 5) {
    console.log(i);
    i++;
}

// Problem #2
// Write some code that console.log's the message "Do I have to repeat myself?" 1000 times. Use a loop but make sure not to get stuck in an infinite loop!

console.log(`Problem #2`);
for (let i = 0; i < 1000; i++) {
    console.log(`Do I have to repeat myself?`);
}

// Problem #3
// Write a function called numOfChar that takes a string and returns the number of characters of the string.

console.log(`Problem #3`);
numOfChar();

function numOfChar() {
const string = prompt(`Please enter a string and I will tell you how many characters it contains`);
    let message = `Your string "${string}" contains ${string.length} characters.`;
    alert(message);
    console.log(message);
}

// Problem #4
// Write a function called count that takes a parameter n which is a whole number greater than or equal to 1.  When executed, count should console.log the whole numbers from 1 to n.

console.log(`Problem #4`);
let n = prompt(`Please enter a whole number`);
count(n);

function count(n) {
    alert(`You entered ${n}, so I will now count to ${n}....`);
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

// Problem #5
// Write a function called countEven that takes a parameter n which is an even whole number greater than or equal to 2.  When executed, countEven should console.log the even numbers from 2 to n.

console.log(`Problem #5`);
n = prompt(`Please enter a whole number`);
countEven(n);

function countEven(n) {
 while ((n >= 2) && (n % 2 == 0)) {
    console.log(i);
    i=i+2;
    } alert(`${n} is not an even number greater than or equal to 2. Please try again!`);
}

// Problem #6
// Write a function called toCase that takes a string and returns that string to both lowercase and uppercase.

console.log(`Problem #6`);
let string = prompt(`Please enter a string and I will show it to you in both lowercase and uppercase`);
toCase(string);

function toCase(string) {
    console.log(string.toLowerCase());
    alert(`lowercase: ${string.toLowerCase()}`);
    console.log(string.toUpperCase());
    alert(`UPPERCASE: ${string.toUpperCase()}`);
}

// Problem #7
// Write a function called countOdd that takes a parameter n which is an odd whole number greater than or equal to 1.  When executed, countOdd should console.log the odd numbers from 1 to n.

console.log(`Problem #7`);
countOdd(n);

function countOdd(n) {

}

// Problem #8
// Write a function called sum which takes a whole number n as a parameter which will add up all the whole numbers between 1 and the value of n.  The sum should be returned by the function.

console.log(`Problem #8`);
sum(n);

function sum(n) {

}

// Problem #9
// Create a function that returns the number of syllables in a simple string. The string is made up of short repeated words like "Lalalalalalala" (which would have 7 syllables).

console.log(`Problem #9`);
countSyllables(string);

function countSyllables() {

}

// Problem #10
// Write a function called addTo that accepts a number as a parameter and adds all whole numbers smaller or equal than the parameter. The result is to be returned.

console.log(`Problem #10`);
addTo(n);

function addTo(n) {

}

// Problem #11
// Create a function which returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.

console.log(`Problem #11`);
upperLowerMixed(word);

function upperLowerMixed(word) {

}

// Problem #12
// Write a guessing game where the user has to guess a secret number. After every guess the program tells the user whether their number was too large or too small. At the end the number of tries needed should be printed. It counts only as one try if they input the same number multiple times consecutively.

console.log(`Problem #12`);
