//  Question 1

console.log(2+"2");  // op: 22   here + concatenates two values if atleast one is string
console.log("2"+"2"); // op: 22 0
console.log(2-"2"); // op: 0     here - converts string to number to perform substraction
console.log("2"+"2"); // 22
var a=3;
var b="b";
console.log(a-b);  // op: nan    here a and b are not valid values to convert to int

//  Question 2

console.log(10<20<30); // op: true     
/* in line 11 here javascript relational operators are evaluated from left to right 
   so 10<20 gives false which is equivalent to 1 while comparing and then 1<30 returns true */

console.log(30>20>10); // op: false same explanation as above

//  Question 3

console.log(null==0); // op: false
/* in java script equality and comparisions behave differently
   for equality comparision null and undefined are comparable, 0, false and ""(empty string) are comparable
   null and 0 are not comparable  */

console.log(null>0); // op: false
/* for number comparision if one operand is number it attempts to convert other operand to number
   null becomes zero and undefined becomes nan */

console.log(null>=0); // op: true

//  Question 4

const elements= [1,2,3,4,5]
elements.forEach(element=>{
    console.log(element);
    if(element==2){
        return;
        // break;
        // continue;
    }
}) 
// op:
// 1
// 2
// 3
// 4
// 5

/* here in above code, the execeution does not stop when element == 2 statement is true bcoz we are passing 
   a callback function in forEach loop which will continue to execute even after using return, if we use 
   break or continue instead of return we will get error as "Uncaught syntaxError:Illegal break statement". 
   There is no way to stop or break a forEach loop other than throwing an exception, if we need to stop execution 
   when a particular statement is true use simple for or for...of or for...in loops*/

// Question 5

var value=1;

function myFun(){
    console.log(value);
    var value=2;
}
myFun(); // op: undefined

/* here in function beacuse of hoisting first var is hoisted and initialized with undefined
   so when we try to print it before initialization it returns undefined */

// Question 6

for(var i=0;i<3;i++){
    setTimeout(function(){
        console.log(i);
    },i*1000);
}
// op:
// 3
// 3
// 3

/* in above the output will be 3, in 3 lines because of the i declared as var which has global scope and since 
   settimeout function holds the execution for 3 seconds the value of i will be 3 since 3<3 is false
   but if we use let instead of var scope of variable is block and each value i is printed separately 
   with each iterated value. we can also write above code asbelow  */

   for(let j=0;j<3;j++){
    setTimeout(function(){ // can also pass i 
        console.log(j);
    },j*1000);
   }

// op:
// 0
// 1
// 2