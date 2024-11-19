// ---------------------- TASK - #8abtVjRv ----------------------------

let clients = [];

class Client{

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
        this.fillArray();
    }

    fillArray(){
        clients.push(this);
    }
}

new Client (1,'Artem', 'Paliienko', 'asdasdasd1@ukr.net','0953482374',1)
new Client (2,'Vasya', 'Petrenko', 'asdasdasd1@ukr.net','0952354325',4)
new Client (3,'Volodya', 'Okrip', 'asdasdasd1@ukr.net','0958657567',7)
new Client (4,'Olya', 'Andrienko', 'asdasdasd1@ukr.net','0952476356',2)
new Client (5,'Mark', 'Kokos', 'asdasdasd1@ukr.net','0954567433',7)
new Client (6,'Max', 'Makeev', 'asdasdasd1@ukr.net','0954924882',5)
new Client (7,'Oksana', 'Kirova', 'asdasdasd1@ukr.net','0957457647',3)
new Client (8,'Mykola', 'Vasulenko', 'asdasdasd1@ukr.net','0952345325',9)
new Client (9,'Zina', 'Maslyuk', 'asdasdasd1@ukr.net','0953657465',8)
new Client (10,'Alina', 'Drozd', 'asdasdasd1@ukr.net','0954356345',4)

console.log(clients);

console.log(clients.sort((a, b) => a.order - b.order));