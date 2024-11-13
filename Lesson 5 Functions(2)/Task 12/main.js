// ------------------- TASK - #kpsbSQCt2Lf ----------------------------

let arr = [11,22,33,44]

let swappedArr = (arr,idx1,idx2) => {
        let firstNum = arr[idx1];
        let secondNum = arr[idx2];
        arr[idx1] = secondNum;
        arr[idx2] = firstNum;
        return arr
}

let result = swappedArr(arr,1,3);
console.log(result);