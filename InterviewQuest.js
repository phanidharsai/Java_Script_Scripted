// //  Question 1

// console.log(2 + "2"); // op: 22   here + concatenates two values if atleast one is string
console.log("2" + "2"); // op: 22 0
// console.log(2 - "2"); // op: 0     here - converts string to number to perform substraction
// console.log("2" + "2"); // 22
// var a = 3;
// var b = "b";
// console.log(a - b); // op: nan    here a and b are not valid values to convert to int

// //  Question 2

// console.log(10 < 20 < 30); // op: true
// /* in line 11 here javascript relational operators are evaluated from left to right 
//    so 10<20 gives false which is equivalent to 1 while comparing and then 1<30 returns true */

// console.log(30 > 20 > 10); // op: false same explanation as above

// //  Question 3

// console.log(null == 0); // op: false
// /* in java script equality and comparisions behave differently
//    for equality comparision null and undefined are comparable, 0, false and ""(empty string) are comparable
//    null and 0 are not comparable  */

// console.log(null > 0); // op: false
// /* for number comparision if one operand is number it attempts to convert other operand to number
//    null becomes zero and undefined becomes nan */

// console.log(null >= 0); // op: true

// //  Question 4

// const elements = [1, 2, 3, 4, 5];
// elements.forEach((element) => {
//   console.log(element);
//   if (element == 2) {
//     return;
//     // break;
//     // continue;
//   }
// });
// // op:
// // 1
// // 2
// // 3
// // 4
// // 5

// /* here in above code, the execeution does not stop when element == 2 statement is true bcoz we are passing 
//    a callback function in forEach loop which will continue to execute even after using return, if we use 
//    break or continue instead of return we will get error as "Uncaught syntaxError:Illegal break statement". 
//    There is no way to stop or break a forEach loop other than throwing an exception, if we need to stop execution 
//    when a particular statement is true use simple for or for...of or for...in loops*/

// // Question 5

// var value = 1;

// function myFun() {
//   console.log(value);
//   var value = 2;
// }
// myFun(); // op: undefined

// /* here in function beacuse of hoisting first var is hoisted and initialized with undefined
//    so when we try to print it before initialization it returns undefined */

// // Question 6

// for (var i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }
// // op:
// // 3
// // 3
// // 3

// /* in above the output will be 3, in 3 lines because of the i declared as var which has global scope and since 
//    settimeout function holds the execution for 3 seconds the value of i will be 3 since 3<3 is false
//    but if we use let instead of var scope of variable is block and each value i is printed separately 
//    with each iterated value. we can also write above code asbelow  */

// for (let j = 0; j < 3; j++) {
//   setTimeout(function () {
//     // can also pass i
//     console.log(j);
//   }, j * 1000);
// }

// // op:
// // 0
// // 1
// // 2

// Question 7 map vs forEach

const arr=[16,42,96,150];

// map is used to loop through the array and any changes done in the map do reflect in original array
// also map can be chained like we have used filter after map and can chain as many as we require
const mapResult=arr.map((ar)=>{
  return ar+2;
}).filter((ar)=>{
  return ar>100;
});

console.log(mapResult)  // output: [ 152 ]

// forEach also loops through the array but instead changes are reflected in the original array, cannot be chained

const forEachResult = arr.forEach((ar,i)=>{
  arr[i]= ar+2;
});

console.log(arr);  // output: [ 18, 44, 98, 152 ]

// Question 8  null vs undefined

// null is an actual value but undefined is a variable declared but not initialized yet

console.log(typeof null);      // output: object
console.log(typeof undefined);   // output: undefined
// example for not defined 
let a;
console.log(a); // output: undefined
// console.log(b);  // output: throws reference error not defined

// follow up question
console.log(null==undefined); // output: true  , since == only compares type
console.log(null==undefined); // output: false , since === compares type and value


//  Question 9  Explain event delegation

// document.querySelector("#products").addEventListener("click",(event)=>{
//   console.log(event);  // check in developer tools targetname/style/tagName 
//   if (event.target.tagName ==='LI'){
//     window.location.href+="#"+event.target.id;   // check url for output
//   }
// });

// Question 10 Faltten the array

let array=[[1,2],[3,4,5],[6,7,[8,9,10],11],[12,13,14]];

let flattened= [].concat(...array); // flattens only 1 level
console.log(array.flat(2)); // flattens array to 2 levels

function customFlatFunction(array,depth=1){ // if depth not provide when calling this function takes default value 1
  let res=[];
  array.forEach((arr)=>{
    if(Array.isArray(arr) && depth>0){
      res.push(...customFlatFunction(arr,depth-1));
    }
else{
      res.push(arr);
    }
  })
  return res;
}
console.log(customFlatFunction(array,2));


