// ------------------------ TASK - #bq1zkx7WP ---------------------------
let elem = document.getElementsByTagName("p")[0]; //визначили елемент який будемо змінювати

let value = +elem.innerText; //отримали числове значення яке треба змінювати

let sum = +localStorage.getItem('value') //запитуємо значення ключа value з ЛС

document.addEventListener("DOMContentLoaded", ()=>{
    let time = new Date().getTime() //задаємо в змінну отриманий час у мілісекундах

    let newTime = +localStorage.getItem('lastVisit') || 0 ;
    if(!sum){
        sum = value
        localStorage.setItem('value',sum);
    }else{
        let diff = (time-newTime)/1000
        if (diff >= 10){
            localStorage.getItem('value');
            sum+=10;
            localStorage.setItem('value',JSON.parse(sum));
            localStorage.setItem('lastVisit',JSON.stringify(time));
        }
    }
    elem.innerText = `${sum} грн`;
})


