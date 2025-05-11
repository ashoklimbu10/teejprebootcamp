// function plus(a,b){
//     result=a+b;
//     return result;
// }
// console.log(plus(10,5))

// function test() {
//     return 'done';
//     console.log('This will never run'); // ❌ ignored
//   }
  
function add(a,b){
    return a+b;
}
let x=add(10,5)
console.log(x)
function multiply(c,d){
    return c*d;
}
let y=multiply(add(10,5),5)
console.log(y)