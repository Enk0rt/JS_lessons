// ------------------------- TASK - #8Nmt60ZT -----------------------------
//створити елемент(блок)
const div = document.createElement('div');

//додати класи до елементу
div.classList.add('wrap','collapse','alpha','beta');

//додати стилі до елементу
div.style.backgroundColor = 'red';
div.style.color = 'black';
div.style.fontSize = '24px';

//додати елемент до body
document.body.appendChild(div);

//клонувати елемент й додати до body
const cloneDiv = div.cloneNode(true);
document.body.appendChild(cloneDiv);

