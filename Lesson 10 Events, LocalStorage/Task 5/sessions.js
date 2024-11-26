
let sessionListElement = document.getElementById('container');
let sessionList = JSON.parse(localStorage.getItem('sessionsList'));

if(sessionList){
    for (const item of sessionList) {
        let visitTimeElement = document.createElement('p');
        console.log(item)
        visitTimeElement.innerText = `Користувач заходив на головну сторінку - ${item}`
        sessionListElement.appendChild(visitTimeElement);
    }
}else{
    let visitTimeElement = document.createElement('p');
    visitTimeElement.innerText = `Користувач не заходив на головну сторінку`
    sessionListElement.appendChild(visitTimeElement);
}

