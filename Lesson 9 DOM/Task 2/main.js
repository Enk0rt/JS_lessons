// ------------------------- TASK - #OPLI89c9G -----------------------------

const nav = ['Main','Products','About us','Contacts'];

let list = document.createElement("ul");

for (const item of nav) {
    let listItem = document.createElement("li");
    listItem.innerText = `${item}`
    list.appendChild(listItem)
}

document.body.appendChild(list);