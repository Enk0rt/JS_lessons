// ------------------------ TASK - #j693ca8 ---------------------------
let form = document.createElement('form')
form.setAttribute('name','userAge');

let input = document.createElement('input')
input.setAttribute('type','number');
input.setAttribute('name','age');
input.setAttribute('placeholder','Enter your age')

let button = document.createElement('button')
button.setAttribute('id','submit');
button.innerText = 'Send';

form.append(input,button)
document.body.appendChild(form)

let age = 0;
button.onclick = (e) =>{
    e.preventDefault();
    age >= 18 ? console.log('Adult') : console.log('Kid');
}

input.oninput = () => age = input.value





