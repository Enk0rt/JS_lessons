// ---------------------- TASK - #vV9a6584I5 ----------------------------

function Car(model,producer,year,maxSpeed,engine){
    this.model = model;
    this.producer = producer;
    this.maxSpeed = maxSpeed;
    this.engine = engine;
}

let fordMustang = new Car('Ford Mustang', 'Ford',2020, 300,'5л');

// Використання властивості об'єкта "максимальна швидкість"
Car.prototype.drive = function (){
    console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
}
fordMustang.drive();

// Вивід повної інформації
Car.prototype.info = function () {
    console.log(`Модель - ${this.model}`)
    console.log(`Виробник - ${this.producer}`)
    console.log(`Рік випуску - ${this.year}`)
    console.log(`Максимальна швидкість - ${this.maxSpeed}`)
    console.log(`Двигун - ${this.engine}`);
}
fordMustang.info();

// Зміна максимальної швидкості
Car.prototype.increaseMaxSpeed = function (newSpeed) {
    this.maxSpeed = newSpeed;
    console.log(`Нова максимальна швидкість - ${this.maxSpeed}`);
}
fordMustang.increaseMaxSpeed(500);

// Зміна року випуску
Car.prototype.changeYear = function (newValue) {
    this.year = newValue;
    console.log(`Новий рік випуску - ${this.year}`);
}
fordMustang.changeYear(2024);

// Додавання водія
Car.prototype.addDriver = function (name,surname,age,category){
    this.driver = {name, surname, age, category}
}
fordMustang.addDriver('Артем', 'Палієнко', 22, 'B');
console.log(fordMustang);