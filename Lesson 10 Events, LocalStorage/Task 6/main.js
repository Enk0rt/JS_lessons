// ------------------------ TASK - #Jg0gPO00 ---------------------------

let input = document.getElementById('income');//беремо інпут
let output = document.getElementById('outcome');//визначаємо елемент куди будемо записувати результат

input.addEventListener('input',()=>{
    let ftValue = +input.value*0.45;//після вводу в інпут, рахуємо значення у фунтах (1кг = 0.45фунта)
    output.innerText = `${ftValue.toFixed()}`; //заокруглюємо до цілого
})
