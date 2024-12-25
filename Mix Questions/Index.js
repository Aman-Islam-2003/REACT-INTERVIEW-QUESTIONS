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

console.log(mixArray.map(item=>typeof(item)))

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

//Map vs forEach
//map wont change the original array but foreach will change the original array

const arr = [1,2,3,4,5,6];
const newArr =  arr.map((item)=>item+2)
console.log("map", newArr);
console.log("original", arr)

const forEachArray = arr.forEach((item)=>item+2);
console.log(forEachArray,"-------",arr)

const forEachArray2 = arr.forEach((item, index)=>arr[index]= item+2);
console.log(forEachArray2,"-------",arr)

//null vs undefined
// null is an actual value where as undefined is that variable is declared but not initialized
console.log(typeof(null), typeof(undefined))
let a;
console.log(a)
a=null;
console.log(a)

//event delegation --> adding event listener to parent element and then checking the target element

//flattening the array
let arrFlattening =[[1,2], [3,4], [5,6], [7, [8,9], 10]];
console.log(arrFlattening.flat(1))
console.log([].concat(...arrFlattening))

function customFlattening(arr, depth = 1) {
  let result = [];
  arr.forEach((item) => {
    if (Array.isArray(item) && depth > 0) {
      result.push(...customFlattening(item, depth - 1));
    } else {
      result.push(item);
    }
  });
  return result;
}

console.log(customFlattening([[1, 2], [3, 4], [5, 6], [7, [8, 9], 10]], 2));