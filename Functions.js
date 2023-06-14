// Function declaration

function func1(a,b){
    console.log(a*b)
}

func1(2,8)

// Function expression

const multiplied=function(a,b){
    return a*b
}

console.log(multiplied(16,3))

// arrow functions

const arrowFunc=()=>console.log("Phanidhar sai")

// First class function

function square(a,b){
    return a*b
}
// above function is first class function as it can be passed as a variable or argument to otherrs
function display(fn){
    console.log("value is " + fn(16,16))
}
display(square);

// IIFE- immediately invoked function expression

(function Iife(c){
    console.log(c*c)
})(16)

// closures in functions

(function(x){
    return (function(y){
    console.log(x)  // op: 6
    })(5)
})(6)

// in above code output is 6, due closure outer function variables can be accessed by inner functions 


// Function Hoisting

var x=21
function hoist(){
    console.log(x);  // op: undefined
    var x=20;
}
hoist()

// out put of above code is undefined because x is declared in local scope so the variable in local scope is 
// considered since it is initialized after logging,  but if there is no variable declared in function op is 21 

// params vs arguments in function
function square(num){  // here num is parameter
    return num*num;
}
square(5) // here 5 is argument

// spread operator

function spread(...nums){
    console.log(nums); // prints array
    console.log((nums[0]*nums[1]))
}
var arr =[16,16]
spread(...arr)


function spread2(a,x,y,...nums){  // ...nums parameter should always be used at last 
    console.log(x,y,numbers)
}
spread2(4,16,37,69,116,137,169)

// Call back function
// it is passed as an argument which is then invoked inside the outer function to complete some kind of action

// ************ "THIS" keyword in normal func vs arrrow func

let user={
    userName: "Phanidharsai",
    func1: ()=>{
        console.log("arrow "+ this.userName)
    },
    func2(){
        console.log("normal "+ this.username)
    },
}

user.func1() // op: undefined  because "this" in arrow functions point to global object 
user.func2() // op: phanidharsai beacuse "this point to current object"/

