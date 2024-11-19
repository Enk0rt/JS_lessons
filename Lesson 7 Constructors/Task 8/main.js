// ---------------------- TASK - #zg6Fifnqig ----------------------------
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

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

let prince = new Prince ('Artur',23,34);

for (const popelushka of popelushkaArr) {
    if(popelushka.footSize === prince.shoe) {
        console.log(`${popelushka.name} має бути з принцом`)
    }else{
        console.log(`Туфелька не належить попелюшці - ${popelushka.name}`)
    }
}

//Знаходження через find
let chosenPopelushka = popelushkaArr.find(item => item.footSize === prince.shoe);
console.log(`${chosenPopelushka.name} має бути з принцом`);