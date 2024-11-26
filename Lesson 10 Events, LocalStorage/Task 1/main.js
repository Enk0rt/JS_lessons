// ------------------------ TASK - #sH8c4er ---------------------------

let square = document.createElement('div');
square.setAttribute('id','text')

let button = document.createElement('button');
button.innerText = 'Press to hide'

document.body.appendChild(square);
document.body.appendChild(button);

button.onclick = () => {
    if(square.classList.contains('display')) {
        square.classList.remove('display');
        button.innerText = 'Press to hide'

    }else{
        square.classList.add('display');
        button.innerText = 'Press to reveal'
    }
}


