// ----------------------- TASK - #bfoJuse4ZzP --------------------------------

let str = 'Ревуть воли як ясла повні';

// function stringToArray(str){
//     return str.split(' ');
// }
//
// let strArr = stringToArray(str);
// console.log(strArr)

// стрілочна функція
let strArr = (str) => str.split(' ');
console.log(strArr(str));