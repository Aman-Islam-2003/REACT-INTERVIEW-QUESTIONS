// Program 1 ->> separating the mixed Array

const mixArray = [1, "A", "G", 6, 3, "P"];
const numbers = [];
const characters = [];

mixArray.forEach((item) => {
  if (typeof item === "string") {
    characters.push(item);
  } else {
    numbers.push(item);
  }
});

console.log(numbers);
console.log(characters);

// console.log(mixArray.map(item=>typeof(item)))

// Program 2 ->> Function currying

function currying(a) {
  return function (b) {
    return function (c) {
      return( a + b + c);
    };
  };
}

const add = currying(10)(2)(3);
console.log(add)

//Question 3 ->> Debouncing

//Question 4 ->> Scope in Js

// var -> function scope
// let -> block scope
// const

//Question 5 ->> DOM Manipulation
//Question 6 ->> Controlled and uncontrolled components ->

//Map and reduce

console.log(mixArray.map((item) => item))

const reduceArray = mixArray.filter((item) => typeof(item)=='number')
console.log(reduceArray) // return an array

const sumResult = reduceArray.reduce((accumulator, currentValue) => { return accumulator + currentValue}, 0);
console.log(sumResult)


