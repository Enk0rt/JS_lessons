// ---------------------- TASK - #gsKLAsNWM ----------------------------

Array.prototype.customForEach = function (action){
    for (const item of this) {
        action(item);
    }
}

Array.prototype.customFilter = function (action){
    let arr = [];
    for (const item of this) {
        if (action(item)) {
            arr.push(item);
        }
    }
    return arr
}

let popelushkaArr = [];

class Popelushka{
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
        popelushkaArr.push(this);
    }
}

new Popelushka('Ozelia',20,36)
new Popelushka('Kim',21,35)
new Popelushka('Brenda',20,40)
new Popelushka('Kate',19,37)
new Popelushka('Rose',20,36)
new Popelushka('Stella',18,35)
new Popelushka('Amber',20,36)
new Popelushka('Maya',21,38)
new Popelushka('Greta',19,34)
new Popelushka('Miya',22,36)

// Виклик кастомного ForEach
popelushkaArr.customForEach(item => console.log(item.name));

// Виклик кастомного Filter
let filteredArr = popelushkaArr.customFilter(item => item.age >= 20);
console.log(filteredArr);
