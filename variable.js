var name = "Martins";
console.log(name);

let number = 12;
let int = 59;
let float = 2.3;
var isMan = Boolean;
let isMarried = false;
let isSingle = true;
var age;
var isTall = null;
isTall = true;

console.log(number, int, float);
console.log(`this is ${name} and this is ${int}`);
console.log(`this is ${name} Is he married? ${isMarried}`);
console.log(age);
console.log(isTall);


//Rulea for Naming Variables:

//Must start with a letter, underscore (_), or dollar sign ($)

//Valid: firstName, _counter, $element
//Invalid: 1stValue (cannot start with a number)
//Can contain letters;


//Common Naming Convention:

//camelCase (commonly used for variables and functions);
//Fist word is lowercase and subsequent words start with a capital letter
//Example: userName, getData

//pascalCase (commonly used for class names and constructors);


//Array

var info = ["Martins", "24", true, null, undefined];
console.log(info);
console.log(info[0]);
console.log(info[1]);
console.log(info[2]);
console.log(info[3]);
console.log(info[4]);

//Object

var userInfo = {
    name: "Martins",
    age: 24,
    isMarried: false,
    email: "m@gmail.com",
    password: "m1234",
}

const user = {
    id: 1,
    firstName: "John",
    lastName: "John",
    userName: "John",
    email: "m@gmail.com",
    password: "m1234",
    phone: "+130975637",
    address: {
        street: "123 Main St",
        city: "Lagos",
        state: "Lagos",
        postalCode: "100001",
        country: "Nigeria"
    },
    dateOfBirth: "1990-01-01",
    isActive: true,
    roles: ["user", "admin"],
    lastLogin: "2024-10-14T10:30:002"
};

console.log(user);


//Write all the dataypes with examples