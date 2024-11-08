//----------------------- TASK - #4WrHwFTEop0 ---------------------------

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];


// користувачі із статусом true
for (let i = 0; i<users.length; i++) {
    document.write(`<h3>`)
    if (users[i].status === true) {
        for(let field in users[i]){
        document.write(`<span>${field} - ${users[i][field]}, </span>`);
        }
    document.write(`</h3>`);
    }
}

document.write('-------------------------------');

// користувачі із статусом false
for (let i = 0; i<users.length; i++) {
    document.write(`<h3>`)
    if (users[i].status === false) {
        for(let field in users[i]){
        document.write(`<span>${field} - ${users[i][field]}, </span>`);
        }
    document.write(`</h3>`);
    }
}

document.write('-------------------------------');

// користувачі із віком > 30
for (let i = 0; i<users.length; i++) {
    document.write(`<h3>`)
    if (users[i].age > 30) {
        for(let field in users[i]){
            document.write(`<span>${field} - ${users[i][field]}, </span>`);
        }
        document.write(`</h3>`);
    }
}
