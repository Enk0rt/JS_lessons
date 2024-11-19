// ---------------------- TASK - #5kla3yMpgp ----------------------------

class Car {
    constructor(model, producer, year, maxSpeed, engine) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }
}

let fordMustang = new Car ('Ford Mustang', 'Ford',2020, 300,'5л');

Car.prototype.drive = function () {
    console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
}
fordMustang.drive();

Car.prototype.info = function (){
    console.log(`Модель - ${this.model}`)
    console.log(`Виробник - ${this.producer}`)
    console.log(`Рік випуску - ${this.year}`)
    console.log(`Максимальна швидкість - ${this.maxSpeed}`)
    console.log(`Двигун - ${this.engine}`);
}
fordMustang.info();

Car.prototype.increaseMaxSpeed = function (newSpeed){
    this.maxSpeed = newSpeed;
    console.log(`Нова максимальна швидкість - ${this.maxSpeed}`);
}
fordMustang.increaseMaxSpeed(500);

Car.prototype.changeYear = function (newValue){
    this.year = newValue;
    console.log(`Новий рік випуску - ${this.year}`);
}
fordMustang.changeYear(2024);

Car.prototype.addDriver = function (name,surname,age,category){
    this.driver = {name, surname, age, category};
}
fordMustang.addDriver('Артем', 'Палієнко', 22, 'B');
console.log(fordMustang);
