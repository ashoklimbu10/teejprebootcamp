// object- collection of key value pairs
// objects stores values in string keys
// let meArray=['value1','value2'];
// let  myObject={
//     'key1':'value1' ,
//     'key2':'value2'
// };
// console.log(meArray[0])
// console.log(myObject['key1'])

// console.log(typeof []);
// console.log(Array.isArray([])); // true ✅
// console.log(Array.isArray({})); // false ❌
// array is special type of array

// let pusheen={
//     'name':'pushen',
//     'age':7 ,
//     'color':'grey',
//     'sound':'meow',
//     'owner':'john'
// };
// //bracket notation
// console.log(pusheen['name']);
// console.log(pusheen['age']);
// console.log(pusheen['color']);

//dot notaion

// console.log(pusheen.name);
// pusheen['owner']='john'; 
// console.log(pusheen.owner)
// pusheen.newOwner='ram';
// console.log(pusheen.newOwner);

//remove a property of object- key/value
// console.log(pusheen);
// delete pusheen.owner;
// console.log(pusheen);

// use of in - checks the key not value
// if('age'in pusheen){
//     console.log('her age is'+pusheen.age);
// }

// if('country'in pusheen){
//     console.log('her country is'+pusheen.country);
// }
// else{
//     console.log('no country key found')
// }

// for (let key in pusheen){
//     console.log('her '+key+ ' is ' +pusheen[key])
// }

let pusheen={
    'name':'pushen',
    'age':7 ,
    'color':['grey','tabby'],
    siblings:{
        sister:'vaayyi',
        bro:'hsrry'
    },
    'sound':'meow',
    'owner':'john' 
};

// let keys=Object.keys(pusheen);
// console.log(keys)
// for (let i=0;i<keys.length;i++){
//     console.log(pusheen[keys[i]]);
// }
console.log(pusheen.color[1])
console.log(pusheen.siblings.sister)










