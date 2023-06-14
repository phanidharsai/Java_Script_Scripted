const arr = ["Barcelona", "Norway", "Paris", "Rome", 16];

arr.push("brazil"); // adds brazil to end of array  *push and pop are more performant for large arrays*
arr.pop(); // removes last element from the array can only remove last element
arr.unshift("Los Angeles"); // moves element to first position in array
arr.shift(); // removes first element of array
console.log(arr);
const updatedArr1 = arr.map((item, index, arr) => {
  return item + " done";
});
console.log(updatedArr1);

// spread and rest operators
const cities = ["Rome", "Paris", "Germany"];
const countries = ["USA", "UK", "Australia"];
const cityAndCountry = [cities, countries]; // adds the two arrray as arrays in 2d format
const cityAndCountry2 = [...cities, ...countries]; // adds elements in both arrays in 1d format using spread opeartor
const mulArray = function (...elements) {
  // here it is using rest operator
  return elements;
};
console.log(mulArray(arr, cities, countries));

//  concat

const newArr = cities.concat(countries, arr); // can add multiple arraya as well
console.log(newArr);

// slice
// include elements from 0 index to 1, can also use negative number which slices from last index starting from -1
const sliceArr = arr.slice(0, 2);

// splice can slice certain elements and insert new element
arr.splice(1, 2, "sydney");
console.log(arr);

// fill takes a value and replaces with specified value
arr.fill(37, 3);
console.log(arr);

// flat converts 2d or any number of nested arrays into 1d array
const flatEx = [1, [1, 2, 3], [[4, 5], 6]];
const flattened = flatEx.flat(2); // here 2 indictaetes how many levels you need to flatten out
console.log(flattened);

// reverse
arr.reverse();

// const characters = [
//   {
//     name: "Luke Skywalker",
//     height: 172,
//     mass: 77,
//     eye_color: "blue",
//     gender: "male",
//   },
//   {
//     name: "Darth Vader",
//     height: 202,
//     mass: 136,
//     eye_color: "yellow",
//     gender: "male",
//   },
//   {
//     name: "Leia Organa",
//     height: 150,
//     mass: 49,
//     eye_color: "brown",
//     gender: "female",
//   },
//   {
//     name: "Anakin Skywalker",
//     height: 188,
//     mass: 84,
//     eye_color: "blue",
//     gender: "male",
//   },
// ];

// // accessing elements
// console.log(characters[0].name);

// /** CUSTOM MAP METHOD USING POLYFILL */

// Array.prototype.myMap = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     temp.push(cb(this[i], i, this));
//   }
//   return temp;
// };

// /*********************MAP***************************/
// //1. Get array of all names
// const names = characters.myMap((char) => char.name);
// console.log(names);
// //  get array of all objects
// const objs = characters.map((CurrentCharacter, IndexOfArray, characters) => {
//   return IndexOfArray;
// });
// console.log(objs);

// //2. Get array of all heights
// //3. Get array of objects with just name and height properties
// const reqRecords = characters.map((char) => ({
//   name: char.name,
//   height: char.height,
// }));
// console.log(reqRecords);
// //4. Get array of all first names
// const firstNames = characters.map((char) => char.name.split(" ")[0]);
// console.log(firstNames);

// /*   CUSTOM REDUCE USING POLY FILLS     */

// Array.prototype.myReduce = function (cb, initialValue) {
//   var accumulator = initialValue;
//   for (let i = 0; i < this.length; i++) {
//     accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
//   }
//   return accumulator;
// };

// /*********************REDUCE************************/
// //1. Get total mass of all characters
// const massOfAll = characters.reduce(
//   (accu, CurrentValue) => accu + CurrentValue.mass,
//   0
// );
// console.log("Mass of all");
// console.log(massOfAll);
// //2. Get total height of all characters
// //3. Get total characters with count of eye color
// const charWithEyes = characters.reduce((acc, cur) => {
//   const color = cur.eye_color;
//   if (acc[color]) {
//     acc[color]++;
//   } else {
//     acc[color] = 1;
//   }
//   return acc;
// }, {});
// console.log(charWithEyes);
// //4. Get total number of characters in all the character names
// const lenOfAllNames = characters.reduce((acc, cur) => acc + cur.name.length, 0);
// console.log(lenOfAllNames);

// /** CUSTOM FILTER USING POLY FILL */

// Array.prototype.myFilter = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) temp.push(this[i]);
//   }
//   return temp;
// };

// /**    ******************FILTER****************    */
// //1. Get characters with mass greater than 100

// const greaterThan100 = characters.myFilter((char) => char.mass > 100);
// console.log("Greater than 100");
// console.log(greaterThan100);
// //2. Get characters with height less than 200
// //3. Get all male characters
// //4. Get all female characters

// /**   **************SORT*****************     */
// //1. Sort by mass
// const sortByMass = characters.sort((a, b) => a.mass - b.mass); // sorts in ascending,  for desc use b.mass-a.mass
// console.log("Sorted by mass");
// console.log(sortByMass);
// //2. Sort by height
// //3. Sort by name
// const byName = characters.sort((a, b) => {
//   if (a.name < b.name) return -1;
//   return 1;
// });
// console.log(byName);
// //4. Sort by gender
// const byGender = characters.sort((a, b) => {
//   if (a.gender < b.gender) return -1; // sorts with female first
//   return 1;
// });
// console.log(byName);

// /******************EVERY*******************/
// //1. Does every character have blue eyes?
// const isEveryEyeBlue = characters.every((char) => char.eye_color === "blue");
// console.log(isEveryEyeBlue);
// //2. Does every character have mass more than 40?
// //3. Is every character shorter than 200?
// //4. Is every character male?

// /*******************SOME******************/
// //1. Is there at least one male character?
// const isThereOneMale = characters.some((char) => char.gender === "male");
// console.log(isThereOneMale);
// //2. Is there at least one character with blue eyes?
// //3. Is there at least one character taller than 210?
// //4. Is there at least one character that has mass less than 50?
