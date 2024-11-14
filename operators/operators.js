//ARITHMETIC OPERATORS

//Additon

let sum = 5 + 3;
console.log(sum);


//Substraction

let difference = 10 - 4;
console.log(difference);


//Multiplication

let product = 7 * 2;
console.log(product);


//Division

let quotient = 20 / 5;
console.log(quotient);


//Remainder

let remainder = 10 % 3;
console.log(remainder);


//Power

let power = 2**10;
console.log(power);



//ASSIGNMENT OPERATORS


//Assignment

let x = 5;
console.log(x);


//Addition Assignments

let y = 5;
y += 2;
console.log(y);


//Substraction Assignemnts

let z = 10;
z -= 2;
console.log(z);



//COMPARISON OPERATORS


//Equals

console.log(5 == 5);


//Equal (==) - Compares two values for equality after converting both values to a common type (type coercion)

x == y

5 == "5" //true, because 



//TERNARY OPERATOR (? :) - The ternary operator is a shorthand for an if-else condition. It returns one of the two values based on a condition


let age = 18;
let canVote = (age >= 18);
console.log(canVote);



//INSTANCE OF



//OBJECT INSTANCEOF CONSTRUCTOR

//let date = newDate();
//console.log(date instanceof Date); //true



//IN

//Checks whether a property exists in an object or an element exists in an array

let person = {name: "John", age: 30};
console.log("name" in person); //true
console.log("address" in person); //false




//LOGICAL OPERATORS: && ||

//AND (&&): Returns true if both operands are true
let isFalse = (5 > 3 && 3 > 5);
console.log(isFalse);


//OR (||): Returns true if at least one operand is true

let isTrue = (5 > 3 || 3 > 5);
let isMaybeTrue = (5 < 3 || 3 > 5);
console.log(isTrue);
console.log(isMaybeTrue);

//NOT (!): Returns true if the operand is false




//CONTROL STRUCTURES

//Conditional Statements

//If statement: Executes a block of code if a qualified condition is true

let c = 4;

if(c > 0) {
    console.log("c is positive");
}
//If... else statement : Executes a block of code if a specified condition is true, otherwise another block of code is executed

if(c > 0) {
    console.log("c is positive");
} else {
    console.log("c is not positive");
};

// Else if statement: Adds a new condition to test if the first condition is false

if(c > 0) {
    console.log("c is positive");
} else if (c === 0) {
    console.log("c is zero");
} else {
    console.log("c is negative");
}


let temperature = 15
if(temperature > 25) {
    console.log("it's a hot day");
} else if (temperature < 15) {
    console.log("it's a cold day");
} else {
    console.log("it's a warm day")
};


let fruit = "apple";

switch(fruit) {
    case "banana":
        console.log("It's a banana");
        break;
    case "apple":
        console.log("It's an apple");
        break;
    case "orange":
        console.log("It's an orange");
    default:
        console.log("unknown fruit")
};


let user = "Greatness"

switch(user) {
    case "Daniel":
        console.log("Who is Daniel?");
        break;
    case "Greatness":
        console.log("Greatness is new to JS");
        break;
    default:
        console.log("Who is this person");
};


const value = "apple";
const fruits = ["apple", "banana", "orange"];

switch(true) {
    case fruits.includes(value):
        console.log(`${value} is in the fruis array`);
        break;
    default:
        console.log(`${value} is not in the fruits array`);
}