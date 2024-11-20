// ----------------------- TASK - #AiN5CoUQ -----------------------------

class User {
    constructor(id, name, age, email) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.email = email;
        this.foo = function (){
            console.log('Let`s go!')
        }
    }
}

let user = new User(1,'Artem',22,'asdasdad@gmail.com');
console.log(user);

function copyObj (obj){
    // //перевірка на undefined
    // if(obj){
    //     let funcArr = [];
    //     for (const key in obj) {
    //         if(typeof obj[key] === 'function'){
    //             let funcCopy = obj[key].bind({})
    //             funcArr.push({funcCopy,key});
    //         }
    //     }
    //     console.log(funcArr);
    //     let copy = JSON.parse(JSON.stringify(user));
    //     for (const func of funcArr) {
    //         copy[func.key] = func.funcCopy;
    //     }
    //     console.log(copy);
    //     return copy
    // }
    // //якщо undefined
    // throw new Error("Помилка об'єкту")

    //перевірка на undefined
    if(obj){
        // короткий запис створення копії об'єкту не включаючи функції
        // JSON.parse перетворює стрінговий запис об'єкту '(JSON.stringify(user)' у звичаний об'єкт
        let copy = JSON.parse(JSON.stringify(user));
        // ітерація ключів об'єкту
        for (const key in obj) {
            //перевірка чи є поле об'єкту - функцією
            if(typeof obj[key] === 'function'){
                //якщо так, тоді додаємо ключ цього поля до скопійованого об'єкту і говоримо, що цей ключ матиме значення первинного ключа, тобто функцію яку ми хочемо скопіювати
                copy[key] = obj[key].bind()
            }
        }
        console.log(copy);
        return copy
    }
    //якщо undefined
    throw new Error("Помилка об'єкту")
}

let copyUser = copyObj(user);
console.log(copyUser === user)






