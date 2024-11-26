// ------------------------ TASK - #ymAmN2xJ ---------------------------

let inputs = document.querySelectorAll('.input');
let button = document.getElementById('btn')


function User(name,surname,age){
   return {name,surname,age}
}

let userElement = document.createElement('div');
button.onclick = (e) =>{
    e.preventDefault();//вимикаємо перезавантаження сторінки

    let tempUser = {} //тимчасовий об'єкт для збереження полів

    inputs.forEach(input => { //проходимо по колекції інпутів
        let field = input.getAttribute('name');//визначаємо назви полів для об'єкту
        tempUser[field] = input.value //задаємо значення для полів об'єкту
    })

    let user = new User (tempUser.name,tempUser.surname,tempUser.age); //створюємо нового юзера

    userElement.innerText = `${user.name} ${user.surname} ${user.age}`; //виводимо інфу про нового юзера в блок на сторінці
}
document.body.appendChild(userElement);

