/************ VARIABLE SCOPES (region of program where a defined variable can exist and be recognized) eg Global, Function, Block
var vs let vs const,     var - global   let and const - block ******************/

//global  it is accessible anywhere in the program
var a; 

//function  accessible within function

function func(){

}

//block  accessible only within the block

{
    let b1 = 16
    var b2 = 37
    const b3 = 69
    console.log(b1) // op: 16
    console.log(b2) // op: 37
    console.log(b3) // op: 69
}
// console.log(b1)  // throws  reference error
console.log(b2)  // op: 37
// console.log(b3)  // throws reference error 

/********** SHADOWING***************/ 

function test(){
    let t = "Phani"
    if(true){
        let t = "phanidhar" /* value of t is only changed in this block, outside its stil phani this is SHADOWING
        variable t in block is shadowing variable t which is outside block in function*/
        // var t = "phanidhar" 
        /* above line gives error as let and const cannot be redeclared in same scope, 
        works if outside variable is declared as var */
        console.log(t);
    }
    console.log(t)
}
test()

/**** variable declaration, initialization and reinitialization ****/

var d1
var d1 // can be redeclared
// let d2 // gives error as const and let cannot be redeclared
// let d2

var i1 // works fine
// let i2   // gives error as let and const should be initialized while declaring
// const i3

var ri =16
ri=37
let ri2=16
ri2 =37
const ri3 =69
// ri3=111 // gives error as const variables cannot be reinitialized


/********* VARIABLE HOISTING 
 * during creation phase javascript engine moves variable and function declarations to top of code  *********/

// var h1 // by default javascript will look at this code like this which has var declared at top
console.log("hoisting "+a) // op: undefined         
/* output is undefined instead of error because of hoisting, works only for var gives ERROR for let and const
  if let or const is used they are stored in "temporal dead zone" which is time between declaration and initialization*/
var h = 16


