/** ITERATORS AND GENERATORS USED FOR ITERATING COLLECTION OF ITEMS */

const text="Phanidharsai"
const iterable=text[Symbol.iterator]();
console.log(iterable.next());
// output: { value: 'P', done: false }   
// if we call next after traversing the entire text we get value as undefined and done: true

// Iterating through a list

const countries=["barcelona","paris","amsterdam","morocco","spain"];
const iterable2 =  countries[Symbol.iterator]();
let result = iterable2.next();

while(!result.done){
    console.log(result)
    result=iterable2.next();
}


// For of, spread, destructuring

for(let item of text){
    console.log(item)
}

// can also use iterable in for of

const iterable3= text[Symbol.iterator]();
for(let item of iterable3){
    console.log(item)
}

// spread operators

const letters=[...text];
console.log(letters)

// merging two arrays using spread

let bikes=["HDxx900","G310R","RR310","speedtriple1200RS"]
let riders=["mps","rdj","tc","js"]

const club=[...bikes,...riders]
console.log(club)

// destructuring

const [first,second,third]=bikes
console.log(first,second,third)   // output: HDxx900 G310R RR310

// can also use iterator on individual items 
const[first1,second1]=bikes[Symbol.iterator]();
console.log(first1)

// custom iterators

class polygon{
    constructor(...sides){
        this.sides=sides;
    }
    [Symbol.iterator](){
        let currentSideIndex=0;
        return{
            next:()=>{
                if(currentSideIndex<this.sides.length){
                    return {value: this.sides[currentSideIndex++], done: false}
                }
                else{
                    return{done: true}
                }
            }
        }
    }

}

const poly= new polygon(1,2,3,4,5)
for(let item of poly){
    console.log(item)
}

// below is a function that generates an id every item we call next on the iterable

function idMaker(){
    let id=0
    return{
        next:()=>{
            return {value:id++, done:false}
        }
    }

}

const it = idMaker();
console.log(it.next().value);  // output: 0 
console.log(it.next().value);  // output: 1 
console.log(it.next().value);  // output: 2 
console.log(it.next().value);  // output: 3 