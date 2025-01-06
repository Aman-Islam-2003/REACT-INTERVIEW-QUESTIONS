// Q1 -> Hoisting

function abc() {
  console.log(a);
  var a = 10;
}

abc();

//reason is that var is hoisted to the top of the ftn in our execution context.

// function abc2() {
//   console.log(a, b, c);
//   var a = 10;
//   const b = 20;
//   let c = 30;
// }

// abc2();

// b and c are initialized in temporal dead zone, so they are in the scope but not yet declared

//Q2 -> Implicit and Explicit binding

var obj = {
    name:"aman",
    display: function(){
        console.log(this.name)
    }
};

var obj1 = {
    name: "abc"
}

obj.display.call(obj1);

// Calls a method of an object, substituting another object for the current object.

// param thisArg — The object to be used as the current object.

// param argArray — A list of arguments to be passed to the method.

// if we use arrow function instead, it will return nothing as they point to the window object or global object and inside of that we have no variable knows as name.
  

//Q3 Infinite currying  

function add(a){
    return function(b){
        if (b){
            return add(a+b);
        }
        return a;
    }
}
 console.log(add(6)(4)(2)())

 //Q4 -> Implementing the logic

 const calc = {
    result: 0,
    add: function(a){
        this.result += a;
        return this;
    },
    subtract: function(a){
        this.result -= a;
        return this;
    },
    multiply: function(a){
        this.result *= a;
        return this;
    }
 }

 const result = calc.add(5).multiply(5).add(10).subtract(2);
 console.log(result.result)

 //HOC // HIGHER ORDER FUNCTION
 // A function that returns a ftn and take other ftns as arguments
 setTimeout(()=>{

 },1000)
//  similarly Array.filter takes a function
const mySalaries = [50,40,100,600];
mySalaries.filter(salary).filter().map()