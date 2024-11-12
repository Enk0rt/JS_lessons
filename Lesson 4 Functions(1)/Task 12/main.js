// ------------------- TASK - #kpsbSQCt2Lf ----------------------------

let arr = [11,22,33,44]

function swap(arr,idx1, idx2){
        let firstNum = arr[idx1];
        let secondNum = arr[idx2];
        console.log(arr)
        arr[idx1] = secondNum;
        console.log(arr);
        arr[idx2] = firstNum;
    return arr
}
let result = swap(arr,1,3);
console.log(result);