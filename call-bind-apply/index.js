const obj = { name: "aman" };

function sayHello(age) {
  return "Hello" + " " + this.name + " " + age;
}

console.log(sayHello.bind(obj)(24));
 
//apply takes array of arguments, call takes comma separator arguments and bind return a function

//output based

//pure component -> unless the props or state passed to the component changes, the component will not re-render