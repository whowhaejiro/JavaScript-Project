//function
//declaration

//function functionName(parameters) {
    //code to be executed
//}

function greet(name) {
    console.log("Hello, " + name);
}

greet("Martins"); //Output: Hello, Martins


function greet(name, course) {
    console.log("Hello, " + name + " you are a " + course);
}

greet("Ejiro", "Full-Stack Developer");




function add(a, b) {
    return a + b;
}
const sum = add(4, 5);
console.log(sum);



function multiply(x, y) {
    return x * y;
}
const product = multiply(9, 9);
console.log(product);


function divide(x, y) {
    return x / y;
}
const quotient = divide(4, 2);
console.log(quotient);


function substract(x, y) {
    return x - y;
}
const difference = substract(10, 6);
console.log(difference);




//function expression

//const functionName = function(parameters) {
    //code to be executed
//}


const user = function(name) {
    console.log("Hello, " + name);
};
user("John");

const addition = function(a, b) {
    return a + b;
}
const addUp = add(4, 5);
console.log(addUp);



const multiplication = function(x, y) {
    return x * y;
};
const multiplyBoth = multiply(9, 9);
console.log(multiplyBoth);




const userProfile = function(name, course, school) {
    console.log("Hello, my name is " + name + " and I'm a " + course + " at " + school);
};
userProfile("Ejiro", "Frontend Developer", "New Horizons");