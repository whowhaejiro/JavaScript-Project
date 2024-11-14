const fruits = ["Apple", "Banana", "Cherry"]

//Adding to the end
fruits.push("mango");
console.log(fruits);

//Adding to the beginning
fruits.unshift("Elderberry");
console.log(fruits);


//Removing Elements from an Array
//Explain methods like pop, shift, and splice for removing elements

//Removing from the end
//fruits.pop();
//console.log(fruits);

//Removing from the beginning 
//fruits.shift();
//console.log(fruits);

//Removing from a specific position
fruits.splice(1, 1);
console.log(fruits);

//Modifying Elements
//Show how to change elements in an array

fruits[1] = "Blueberry";
console.log(fruits);

fruits.splice(1, 0, "coconut"); //the first number indicates the index, the second number indicates that nothing should be removed in the array
console.log(fruits);

let array = [1, 2, 3, 4, 5, 6]
array.splice(2, 3); //Removes 3 elements from index of 2
console.log(array);

//Iterating over arrays
//Introduce different ways to loop through arrays.

//Using loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//Using foreach
fruits.forEach(function(fruit) {
    console.log(`This is ${fruit}`);
})

//Common Array Methods
//Explain more useful array mathods like map, filter, reduce, find

//map 
let uppercasedFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(uppercasedFruits);

const add = (a, b) => a + b;
add(2, 4);

//filter
let longFruits = fruits.filter(fruit => fruit.length > 5);
console.log(longFruits);

//find
let findFruits = fruits.find(fruit => fruit === "coconut");
console.log(findFruits);

//reduce
let concatenatedFruits = fruits.reduce((acc, fruit) => acc + ' ' + fruit);
console.log(concatenatedFruits);

//includes
let hasCherry = fruits.includes("Cherry");
console.log(hasCherry);

//Combining arrays
let moreFruits = ["Fig", "Grape"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits);

//Sorting Arrays
//Show how to reverse arrays with reverse
let sortedFruits = allFruits.sort();
console.log(sortedFruits);

//Reversing Arrays 
//Show how to reverse  arrays with reverse
let reversedFruits = allFruits.reverse();
console.log(reversedFruits);


//Original Array
const numbers2 = [1, 2, 3, 4, 5];


//Using map to create a new array with each element doubled
const doubledNumbers = numbers2.map(number => number * 2);
console.log(doubledNumbers);

numbers2.forEach(function(number) {
    console.log(number * 2);
});


const people = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 35}
];

//Using map to create a new array with just the names of the people
const names = people.map(person => person.name); 
console.log(names);

people.forEach(function(user) {
    console.log(`This is ${user.name}`)
})

const ages = people.map(person => person.age);
console.log(ages);