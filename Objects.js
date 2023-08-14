// OBJECTS

// Object destructuring
const person1 = {
  name1: "phanidharsai",
  age1: 24,
  isMarried1: false,
};

const { name1, age1, isMarried1 } = person1;

const name2 = "phanidharsai";
const age2 = 20;
const person2 = {
  name2,
  age2,
  isMarried2: false,
};

const person3 = {
  name3: "phanidharsai",
  age3: 24,
  isMarried3: false,
};
const person4 = { ...person3, name: "Jack" };
// Using above syntax we can change name to jack
//     d)value interpretation

const person5 = {
  name5: "phanidharsai",
  age5: 24,
  isMarried5: false,
};

Console.log(`${person5.name5} ${person5.age5}`);

const cars = {
  first: "mercedes",
  second: "volvo",
  third: "ferrari",
  "to be fourth": "lamborghini", // use double quotes for key with spaces
  first: "jaguar", // firrst gets replaced by jaguar
};

delete cars.first;
console.log(cars);
cars.first = "bmw";
console.log(cars.first);
console.log(cars);
console.log(cars["to be fourth"]);
cars.fifth = "bugatti"; // dynamically adding key and value
console.log(cars);

// looping through objects keys and values
for (key in cars) {
  console.log(key + ":" + cars[key]);
}

/** ******* tricky quest******** */

const a = {};
// const b={key:"b"}
// const c={key:"c"}
// a[b]=123;
// a[c]=456;
// console.log(a);  // op: {[object object]: 456}
// console.log(a[b]); // op: 456
// output of above code is because in a[b] and a[c] b,c are considered as "[object object]" when tried to convert
// to string

/** JSON.stringify and JSON.parse */
const rider = {
  name: "phanidharsai",
  age: 24,
  bike: "rr310",
};
console.log(rider); // prints as object
const strObj = JSON.stringify(rider); // converts object to string
console.log(strObj); // prints object as string
console.log(JSON.parse(strObj)); // converts back to object
// the use case for above scenario is storing in our local storage in browser because we cannot store objects directly
// localStorage.setItem("riderDetails",strObj) // stores in local storage with riderdetails as key and strObj as value
// localStorage.getItem("riderDetails")
console.log(JSON.stringify(rider, ["name", "bike"])); // converts only name and bike properties to string

/**SPREAD OPERATOR */
console.log([..."Phani"]); // op: ['p','h','a','n','i']

const Rider = { name: "Phani, age:24" };
const bike = { sports: "rr310", ...Rider };
console.log(bike); // prints including Rider object properties

/** ***********DESTRUCTURING******** */

const name = "tom cruise";
// const {name} =Rider; // here since variable name is already declared we have to use name: anyname
const { name: myName } = Rider;
console.log(myName);

// NESTED DESRTRUCTURING

let newRider = {
  name: "phani",
  age: 24,
  fullName: {
    first: "phanidharsai",
    second: "Marripudi",
  },
};
const {
  fullName: { first },
} = newRider;
console.log(first);

/** assigning to null */
let person = { Name: "emma" };
const members = [person];
// person=null    // no change in out put of members prints {name: "emma"} for console.log(members)
console.log(members);
person.Name = null; // here name value is changed to null
console.log(members);

/** tricky int quest */
const value = { number: 10 };
const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};
multiply(); // op: 20
multiply(); // op: 20
multiply(value); // op:20
multiply(value); // op: 40

/** DEEP COPY */

let user = {
  name: "Phanidharsai",
  age: 24,
};
const objClone = Object.assign({}, user);
const objClone2 = JSON.parse(JSON.stringify(user));
const objClone3 = { ...user };
console.log(user, objClone, objClone2);
