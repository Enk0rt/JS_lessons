// ------------------------ TASK - #LhSfdhM3 ---------------------------
    let visitTimeStorage = JSON.parse(localStorage.getItem('sessionsList')) || []; //запитуємо отримання даних з ЛС, якщо масиву не існує створюємо пустий масив
    let visitTime =  new Date(); //записуємо в змінну дату заходу на сторінку

document.addEventListener("DOMContentLoaded",()=>{ //після завантаження сторінки відбувається подія
        visitTimeStorage.push(visitTime); // час візиту пушиться в масив
        localStorage.setItem('sessionsList',JSON.stringify(visitTimeStorage)); //цей масив записується в ЛС
})
