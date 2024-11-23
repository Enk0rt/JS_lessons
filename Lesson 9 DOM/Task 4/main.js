// ------------------------- TASK - #Kx1xgoKy8 -----------------------------

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let container = document.createElement("div")

for (const item of coursesAndDurationArray) {
    let h1 = document.createElement("h1");
    h1.classList.add('heading')
    h1.innerText = `${item.title}`

    let p = document.createElement("p");
    p.classList.add('description')
    p.innerText = `Тривалість курсу - ${item.monthDuration}`

    container.append(h1,p);
}

document.body.appendChild(container)