// 1. Make a loop that counts from 0 to 10.  It should print out "The number is" and each integer, from 0 to 10, in the console.
for (let i = 0; i <= 10; i++) {
    console.log(`The number is ${i}`);
}

// 2. Make a loop that counts from 5 to 15 in the console, in multiples of 3. It should print out the number "is a multiple of 3."
for (let i = 5; i <= 15; i++) {
    if (i % 3 == 0) {
        console.log(`${i} is a multiple of 3`);
    }
}

// 3. Make a loop that counts backwards from 100 to 0, and prints out in the console.
console.log('Count down from 100:')
for (let i = 100; i >= 0; i--) {
        console.log(`${i}`);
}

// 4. Make a loop that counts backwards from 100 to 0 in increments of 5, and prints out in the console.
console.log('Count down from 100:')
for (let i = 100; i >= 0; i-=5) {
        console.log(`${i}`);
}

// 5. Write a function that takes in two integers parameters and returns the multiplication of those two values. Print the value to the console.
const getProduct = (num1, num2) => {
    let product = num1 * num2;
    console.log(`The product of ${num1} and ${num2} is ${product}`);
}

getProduct(7, 9);

// 6. Write a function that takes in a string parameter and returns true if the string contains 'a', otherwise the function returns false.
const containsLetterA = (myString) => {
    for (let i = 0; i < myString.length; i++) {
        if (myString[i] === 'a') {
            return true;
        }
    }
}

console.log('sonia contains the letter a: ' + containsLetterA('sonia'));


// 7. Write a function that takes in a number and prints the multiplication table of that number(multiply the number by 0 - 10).
const getMultiplicationTable = (myNum) => {
    console.log(`Multiplication table for ${myNum}`);
    for (let i = 0; i <= 10; i++) {
        let product = myNum * i;
        console.log(`${myNum} * ${i} = ${product}`);
    }
}

getMultiplicationTable(5);