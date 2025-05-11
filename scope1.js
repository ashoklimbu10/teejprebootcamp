// global scope- for anywhere it can be used
// console.log(waitForIt);
// let waitForIt='i am here';
// console.log(waitForIt);

// Functional scope-inside a function-locally scoped
// function happFunc(){
//     let message='i am good'
//     console.log(message);
// }
// happFunc();
// console.log(message);

let message='think global'
function logMessage(){
    let message ='act local'
    console.log(message);
}
logMessage();
console.log(message)