// Array Method

// push()
// Add one or more elements to the end  and modify the original array
// It returns the new length of the array

let fruits = ["Apple","Mango"];
let newFruits = fruits.push("Banana");

console.log(`new length = ${newFruits}`); // return the new length of array
console.log(fruits); 


// pop()
// Removes the last element from an array and modify the original array
// returns the removed element

let city = ["Pune", "Delhi", "Mumbai"];
let removedCity = city.pop();

console.log(`removed city =  ${removedCity}`); // returns removed element
console.log(city);

// unshift()
// Add one or more elements to the beginning of an array and modufy the original array
//returns the new length

let cars = ["Suzuki","BMW","Honda"];
let newCar = cars.unshift("Tata");

console.log(`new length =  ${newCar}`); // returns the new length
console.log(cars);

// shift()
// Removes the first element from an array and modify the original array
// returns the removed element

let color = ["Red","Blue","Black"];
let removedColor = color.shift();

console.log(`Removed color  = ${removedColor}`);
console.log(color);
