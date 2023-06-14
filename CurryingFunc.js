// Normal function
function printSum(a,b,c,d){
    return a*b*c*d
}
console.log(printSum(1,2,3,4))

// currying function
function printSumUsingCurry(a){
    return function level1(b){      //can also use without giving function name 
        return function level2(c){
            return function level3(d){
                return a*b*c*d
            }
        }
    }
}
let nextPart=printSumUsingCurry(1)
console.log(nextPart)
console.log(printSumUsingCurry(1)(2)(3)(4))

// multiplication table using currying function
function mulTable(a){
    return function multiplier(b){
        return a*b
    }
}

let sixteenTable=mulTable(16)      // function reusability
let result = ""
for (i=1;i<+10;i++){
    result = result + sixteenTable(i) + " "
    // console.log(sixteenTable(i))     
}
console.log(result)