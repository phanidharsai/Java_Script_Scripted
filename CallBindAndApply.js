// CALL

var obj = { name: "phanidharsai" };
function sayHello(age) {
  return "hello " + this.name + " is " + age;
}

console.log(sayHello.call(obj, 24)); // can include multiple arguments with comma as separator

// APPLY

console.log(sayHello.apply(obj, [24])); // takes arguments in form of array

// BIND

const bindFunc = sayHello.bind(obj); // provides reusqable function

console.log(bindFunc(24));
