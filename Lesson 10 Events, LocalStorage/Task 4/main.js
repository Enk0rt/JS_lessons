// ------------------------ TASK - #2VaLt4vDczH ---------------------------

let numElement = document.getElementById('num');
let btn = document.getElementById('reset');

let num = parseInt(numElement.innerText);
let lsNum = localStorage.getItem('num');


document.addEventListener("DOMContentLoaded", () =>{
    if(!lsNum) {
        lsNum = num;
        localStorage.setItem('num', lsNum);
    }else{
        lsNum++;
        localStorage.setItem('num', lsNum);
        numElement.innerText = lsNum;
    }

    //додатково додав функціонал кнопки скидання лічильника
    btn.onclick = () =>{
        lsNum = 0;
        localStorage.setItem('num', JSON.stringify(lsNum));
        location.reload();
    }
})