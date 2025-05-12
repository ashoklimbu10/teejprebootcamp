// array is list-like data structure in js
// let numbers=[1,2,3];
// let names=['ram','sita'];
// let mixVal=[30,true , 'apple']

// values inside array is elements

// let names=['ram','sita','ashok'];
// console.log(names);
// console.log(names[0])
// console.log(typeof names);

// Array.isArray - method to check if a variable is an array
// console.log(Array.isArray(names));
// console.log(Array.isArray('hello'));

// bracket acess-sret value, get value
// console.log(names[0]);
// names[0]='david';
// console.log(names[0]);


// index -position of elements
// length
// console.log(names.length)
// console.log(names[names.length-1])

// push method- add something to end of array
let names=['ram','sita','ashok'];
// names.push('arohi')
// console.log(names)

// pop method- remove and return most recently added 
// let latesAdd=names.pop();
// console.log(latesAdd)
// console.log(names)

// shiftmethod- remove first element
// console.log(names);
// let firstElremov=names.shift();
// console.log(firstElremov)
// console.log(names)

// unfinished method - add too begining of array
// console.log(names);
// names.unshift('rago');
// console.log(names)


// // indexOf is also array method, shows index position in array
// let person='jack'
// if(names.indexOf(person)>-1){
//             console.log('person found')
// }
//     else{
//         console.log('person found NOT Found');

//        }


// slice- a portion/part of array 
// console.log(names.slice(1,2))
// console.log(names.slice(0,2))
// console.log(names.slice(1))
// console.log(names.slice(0,3,))


// 
let namesCopy=names.slice();
namesCopy[0]='you'
console.log(names)
console.log(namesCopy)
console.log(names.slice(1,2))




