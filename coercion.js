// explicit coercion
// Number to String conversion (convert one type to another)
// let num=10;
// console.log(typeof num)

// let numStr=String(num);
// console.log(numStr);
// console.log(typeof numStr);

// string to number
// let str='100';
// console.log(str);
// let strNum = Number(str);
// console.log(typeof strNum)

// implicit 
// let sum=10+20;
// let contactSum='10'+'20'; // concatenated-1020
// console.log(sum)
// console.log(contactSum)

// console.log(10==10);
// console.log('10'==10);
// console.log(true=='true');
// console.log('1'==false);
// console.log('1'==true);
// let newBool=Boolean('i am string');
// console.log(newBool)

// // Truthy
// //  Truthy values (evaluate to true):
// // 'hello', '0', 'false' (any non-empty string)

// // 42, -1 (any non-zero number)

// // [] (empty array)

// // {} (empty object)

// // function() {}

// console.log(Boolean([]));

// falsy statements
// '' (empty string)

// 0

// null

// undefined

// NaN

// false
// console.log(Boolean(0));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));

// if (1){
//     console.log('all is well');
// }
// else{
//      console.log('watch out')
// }

// console.log(!!0);--> double !! to check truthiness
if (0||''){
    console.log('truthy');
}
else{
    console.log('FALSY');
}
