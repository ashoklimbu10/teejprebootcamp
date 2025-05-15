// function lastFriday(){
//     let obj={
//     'supply1':['apples',5],
//     'supply2':['kleenes',2],
//     'supply3':['knitting supplies',10]
// };
//     let num=[];
//     num.push(obj.supply1[1])
//     num.push(obj.supply2[1])
//     num.push(obj.supply3[1])
//     console.log('num in array:',num);
//     let sum=0;
//     for(let i=0;i<num.length;i++){
//         sum+=num[i];
//     }
//     console.log('total sum:',sum);
// }

// function compareObj(obj1,obj2){
//     let obj1Keys=Object.keys(obj1);
//     let obj2keys=Object.keys(obj2);

//     if (obj1Keys.length!==obj2keys.length){
//         return false;
//     }
//     for (let i=0;i<obj1Keys.length;i++){
//         let currentKey=obj1Keys[i];
//         if (obj1[currentKey]!==obj2[currentKey])
//             return false;
//     }
//     return true;
// }
// let object1={
//     'name':'Ashok',
//     'age': 23
// };
// let object2={
//     'name':'Asmiina',
//     'age': 28
// };
// compareObj(object1,object2);


function compareObj(obj1, obj2) {
  let obj1Keys = Object.keys(obj1);
  let obj2Keys = Object.keys(obj2);

  // Check if number of keys are different
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  // Compare each value by key
  for (let i = 0; i < obj1Keys.length; i++) {
    let currentKey = obj1Keys[i];
    if (obj1[currentKey] !== obj2[currentKey]) {
      return false;
    }
  }

  // If all keys and values match
  return true;
}

// Example objects
let object1 = {
  name: 'Ashok',
  age: 23
};

let object2 = {
  name: 'Asmiina',
  age: 28
};

// Call the function and log result
console.log(compareObj(object1, object2)); // false
