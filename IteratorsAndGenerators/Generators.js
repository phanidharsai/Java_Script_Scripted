// // generators are iterator factories i.e functions that return iterators

// function* generator(){
//     yield 1;
//     yield 2;
//     yield 3;
// }

// const it = generator();
// console.log(it.next()) // output: { value: 1, done: false }
// console.log(it.next()) // output: { value: 2, done: false }
// console.log(it.next()) // output: { value: 3, done: false }
// console.log(it.next()) // output: { value: undefined, done: true }

// // // bad practice 
// // // here eventhough we used generator name in line number 3 this line still works bcoz it is overrided by below generator function
// function* generator(){     
//     yield 1;
//     yield 2;
//     return 15;
//     yield 3;
//  }

//  const it2 = generator();
// console.log(it2.next()) // output: { value: 1, done: false }
// console.log(it2.next()) // output: { value: 2, done: false }
// console.log(it2.next()) // output: { value: 15, done: true }
// console.log(it2.next()) // output: { value: undefined, done: true }

// // using the generator function we can rewrite the iterator function with a lot less code

// class polygon{
//     constructor(...sides){
//         this.sides=sides
//     }
//     *[Symbol.iterator](){
//         for(let side of this.sides){
//             yield side
//         }
//     }
// }

// const it3=new polygon(1,2,3,4,5)
// for(let side of it3){
//     console.log(side)
// }

// // using the generator function we can rewrite the idmaker code in iterationprotocols file with a lot less code

// function* idMaker(){
//     let id=0
//    while(true){
//         yield id++;
//    }
   
// }

// const maker =idMaker()

// // console.log(maker.next().value)  // output: 0
// // console.log(maker.next().value)  // output: 1
// // console.log(maker.next().value)  // output: 2


// // fibonacci sequence using generator

// function* fibonacciGenerator(){
//     let a=0;
//     let b=1;
//     while(true){
//         yield a;
//         [a,b]=[b,a+b]
//     }
// }

// const fg=fibonacciGenerator();
// let no_of_terms=16;
// for(i=0;i<no_of_terms;i++){
//     // console.log(fg.next().value)
// }


// // generating prime numbers upto a certain number

// const isPrime=(num)=>{
//     for(let i=2;i<num;i++){
//         if(num%i==0){
//             return false;
//         }
//     }
//     return num>1;
// }

// function* primeGenerator(){
//     let start=1;
//     while(true){
//         if(isPrime(start)){
//             yield start
//         }
//         start++
//     }
// }

// const pG= primeGenerator()

// console.log(pG.next().value)

//  passing parameters in generator functions
//  in below format if we do not pass parameters it will not take default values and throws error
const parameterised=function* generate(start=0,end=Infinity){
    for(let i=start;i<end;i++){
        yield i;
    }
}

// console.log(parameterised(1,4).next().value)

// this format works fo default values
function* generate1(start= 0 ,end=Infinity){
    for(let i=start;i<end;i++){
        yield i;
    }
}
const parameterised2=generate1()
console.log(parameterised2.next().value)

// generators as observors

function* observerGenerator(){
    console.log("Generator created")
    while(true){
        const value=yield;
        console.log(`value passed: ${value}`)
    }
}
const oG=observerGenerator();
console.log(oG.next(1))
console.log(oG.next(2))
console.log(oG.next(3))
console.log(oG.next(4))

// output: Generator created
// { value: undefined, done: false }
// value passed: 2
// { value: undefined, done: false }
// value passed: 3
// { value: undefined, done: false }
// value passed: 4
// { value: undefined, done: false }

// in above output 1 is omitted because the first call to next is used to invoke the generator

// function* solveRiddle(){
//     const quest="what is the ultimate meaning of life"
//     const answ=yield quest
//     if(answ===42){
//         yield true
//     }
//     else{
//         yield false
//     }
// }
// const sR= solveRiddle()
// const quest=sR.next().value
// console.log(quest)

// const res= sR.next(42).value
// console.log(res)

// // delegating execution to other generators

// function* italianCities(){
//     yield* ["rome","florence","turin"]
//     yield "geneva"
//     return "someCity"
// }

// function* citiesGenerator(){
//     yield "paris"
//     const value= yield* italianCities()
//     yield value 
//     yield "berlin"
// }
// const it = citiesGenerator()
// console.log(it.next().value)
// console.log(it.next().value)
// console.log(it.next().value)
// console.log(it.next().value)
// console.log(it.next().value)
// console.log(it.next().value)


// flattening array

function* flatten(array,depth=Infinity){
    for(let item of array){
    if(Array.isArray(item) && depth >0){
        yield* flatten(item,depth-1)
    }
    else{
        yield item
    }
    }
}
const arr=[1,2,[3,4,5],6,7,[8,9,10]]
const res1= [...flatten(arr)]
console.log(res1)