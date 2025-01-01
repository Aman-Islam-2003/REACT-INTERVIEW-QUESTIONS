const nums = [1, 2, 3, 4, 5];
const result = nums.map((num) => num * 5);
console.log(result);

//filter
//return the elements that fulfills the condition
const greaterThanTwo = nums.filter((num) => num > 2);
console.log(greaterThanTwo);

//reduce -> reduce an array to a single value
const sumArray = nums.reduce((acc, cv) => acc + cv, 0);
console.log(sumArray);

//pollyfills for them
//polyfill is creating them from scratch

//for map
Array.prototype.myMap = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }

  return result;
};
console.log([2, 3, 4, 5].myMap((num) => num * 2));
//for filter
Array.prototype.myFilter = function (callback) {
  let result = [];

  for (i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};
console.log([2, 3, 4, 5].myFilter((num) => num > 2));
//for reduce
Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;

  for(i=0;i<this.length;i++){
    accumulator = accumulator? callback(accumulator, this[i], i, this): this[i];
  }
  return accumulator;

};
console.log(nums.myReduce((acc, cv) => acc + cv, 0));

//question 1
const students = [
  { name: "Ali", rollnum: 11, marks: 66 },
  { name: "Sara", rollnum: 12, marks: 92 },
  { name: "Ahmed", rollnum: 103, marks: 45 },
  { name: "Fatima", rollnum: 104, marks: 88 }
];
//returning only the name in capital letters

console.log(students.map((student)=> student.name.toUpperCase()));

//marks > 85 and rollnum > 103
console.log(students.filter((std)=> std.rollnum>102 && std.marks>70));


//only the names of stds who scored more than
console.log(students.filter((std)=> std.rollnum>102).map((std)=>std.name));
 
console.log(students.map((std)=>std.marks<70? std.marks+=10:std.marks).filter((marks)=>marks>70).reduce((acc,cv)=>acc+cv,0))