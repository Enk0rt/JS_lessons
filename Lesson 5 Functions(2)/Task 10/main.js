// ------------------- TASK - #pghbnSB ----------------------------

let arr = [23,24,56,92,56,85,32,4,12,-1,2,-34,-70];


// 1й спосіб

// let minNum = (arr) =>{
//     let min = Math.min(...arr);
//     return min;
// }

// 2й спосіб

let minNum = (arr) =>{
    let min = arr[0];
    for (const item of arr) {
        if(min > item){
            min = item;
        }
    }
    return min;
}
let result = minNum(arr);
console.log(result);