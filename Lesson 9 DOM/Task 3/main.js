// ------------------------- TASK - #jeBqHV525U5 -----------------------------

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let container = document.createElement("div");

for (const item of coursesAndDurationArray) {
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    h3.innerText = `Назва курсу - ${item.title}`
    p.innerText = `Тривалість курсу - ${item.monthDuration}`
    container.append(h3,p);
}

document.body.appendChild(container);
