/**            PROMISES                     */
// Synchronous vs Asynchronous

//sync
console.log("Start");
console.log("middle");
console.log("finish");

// in above code output is start and then middle in next line aand so on bcoz by default javascript is
// synchronous(single threaded language) executes line by line

//Async exp 1
console.log("start");
setTimeout(() => {
  console.log("middle");
}, 1000);
console.log("finish");

// op: start
//     finish
//     middle

/** since it is a function which is executed by web api it is executed only after all the other code is executed
 with the help of event loop, even if delay is set to 0 output will be the same, asynchronous(setTimeout) code output will
 always be executed after synchronous(start, finish) */

// Async examp 2
console.log("start");
function importantAction(name, cb) {
  setTimeout(() => {
    return cb(`congrats! ${name}`);
  }, 3000);
}
function reason(reason, cb) {
  setTimeout(() => {
    return cb(`${reason}`);
  }, 5000);
}
importantAction("Phanidhar sai", (message) => {
  console.log(message);
  reason("you are selected", (message2) => {
    console.log(message2);
  });
});

console.log("finish");

/** here "reason" is executed after "importantaction" here reason is a callback function and this chain can go on
    and we can nest multiple call back functions one inside other which can lead to "CALL BACK HELL"
    or "PYRAMID OF DOOM" to overcome this promises are introduced  */

// promise

console.log("promiseStart");
const prom = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = true;
    if (result) resolve("Great you have kept yor promise");
    else reject("try again you can do it");
  }, 6000);
});

prom
  .then((resolveMessage) => {
    console.log(resolveMessage);
  })
  .catch((rejectMessage) => {
    console.error(rejectMessage);
  });
console.log("promiseEnd");

// "promise chaining" instead of "CALLBACK HELL"

console.log("promiseChain1");

function promiseChainAction1(chain1Mes) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(`${chain1Mes}`);
    }, 1000);
  });
}
function promiseChainAction2(chain2Mes) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(`${chain2Mes}`);
    }, 2000);
  });
}
function promiseChainAction3(chain3Mes) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(`${chain3Mes}`);
    }, 3000);
  });
}

// promiseChainAction1("Hurray! you made it")
//   .then((chain1) => {
//     console.log(chain1);
//     return promiseChainAction2("Mr Phanidhar sai");
//   })
//   .then((chain2) => {
//     console.log(chain2);
//     return promiseChainAction3("inka Thaggedhe le");
//   })
//   .then((chain3) => {
//     console.log(chain3);
//   })
//   .catch((error) => {
//     console.error(err); // err shows which promise failed
//   });

console.log("promiseChainEnd");

// Promise ALL  even if 1 promise is failed it returns failure

Promise.all([
  promiseChainAction1("Hurray! you made it"),
  promiseChainAction2("Mr Phanidhar sai"),
  promiseChainAction3("inka Thaggedhe le"),
])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error("promises failed", err);
  });

// Promise RACE returns first promise which gets rejected or resolved, syntax--> Promise.race([])

// Promise ALL SETTLED returns failed as well as fuflfilled promises, syntac--> Promise.allSettled([])

// Promise ANY returns first fulfilled promise, returns failed only if all promises fail, syntax--> Promise.any([])

// ASYNC AWAIT,

async function awaitAndAsync() {
  try {
    const message1 = await promiseChainAction1("Hurray! you made it");
    console.log(message1);
    const message2 = await promiseChainAction2("Mr Phanidhar sai");
    console.log(message2);
    const message3 = await promiseChainAction3("inka Thaggedhe le");
    console.log(message3);
    // console.log({ message1, message2, message3 });
  } catch (error) {
    console.log("promises failed", error);
  }
}
awaitAndAsync();
