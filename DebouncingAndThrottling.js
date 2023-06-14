/* DEBOUNCING and THROTTLING --- helps optimise how we call certain events 
DEBOUNCING--> triggers event only after paused for specified time
THROTTLING--> if clicked before delay doesnt trigger else if clicked after delay time then gets triggered */
/* Question 1-- create  a button ui and add debounce as follows=>
                --> show "button pressed <x> times" every time button is pressed
                --> Increase "triggered <y> times" count after 800 ms of debounce*/

const btn = document.querySelector(".increment_btn");
const btnpress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");


var pressedCount=0;
var triggeredCount =0;

const start= new Date().getTime();
//****** using lodash
// const debounceCount= _.debounce(()=>{
//     const now= new Date().getTime();
//     console.log("debounce "+ (now-start));
//     count.innerHTML=++triggeredCount;
// }, 3000);

// ********* for question 2 
// const throttledCount = _.throttle(()=>{      
//     const now= new Date().getTime();
//     console.log("throttle " +(now-start));  
//     count.innerHTML=++triggeredCount;
// },3000);

// ******** for question 3 debounce using polyfill

const myDebounce=(cb,d)=>{
 let timer;

 return function (){
    if(timer) clearTimeout(timer)
    timer = setTimeout(()=>{  // here setTimeout returns a timer id which is used to remove the event in event queue so that every time an event is called it will start a new timeout function
        cb();
    },d);
 };

};

const debounceCount= myDebounce(()=>{
    const now= new Date().getTime();
    console.log("debounce "+ (now-start));
    count.innerHTML=++triggeredCount;
}, 3000);


//******* for question 4 throttle using poly fill
// const myThrottle =(cb,d)=>{
//     let last=0;
//     return function (...args) {
//         let now = new Date().getTime();
//         if(now-last<d) return;
//         last = now;
//         return cb(...args);

//     };

// };

// const throttledCount = myThrottle(()=>{      
//     const now= new Date().getTime();
//     console.log("throttle " +(now-start));  
//     count.innerHTML=++triggeredCount;
// },3000);


btn.addEventListener("click",()=>{
    btnpress.innerHTML=++pressedCount;
    debounceCount();
    // throttledCount();
});

/* Question 2-- create  a button ui and add throttle as follows=>
                --> show "button pressed <x> times" every time button is pressed
                --> Increase "triggered <y> times" count after 800 ms of debounce*/


/* Question 3-- create  debounce polyfill implementation*/