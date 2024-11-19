// ---------------------- TASK - #pOeHKct ----------------------------

let users = [];

function User(id,name,surname,email,phone){

    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone

    users.push(this);
}

new User(2,'Vasya', 'Petrenko','asdasd@ukr.net', '09523543258')
new User(1,'Artem', 'Paliienko','palienko_2002@ukr.net', '0953403188')
new User(7,'Volodya', 'Okrip','asdasd324r@ukr.net', '09586575675')
new User(3,'Olya', 'Andrienko','asdasd@ukr.net', '09524763568')
new User(5,'Mark', 'Kokos','asdasddsfsdgf@ukr.net', '0954567433')
new User(10,'Max', 'Makeev','asdasdsad134@ukr.net', '09549248826')
new User(8,'Oksana', 'Kirova','asdas324d@ukr.net', '09574576477')
new User(6,'Mykola', 'Vasulenko','asdasdewrwe@ukr.net', '09523453252')
new User(9,'Zina', 'Maslyuk','asdasdbvcb3@ukr.net', '09536574657')
new User(4,'Alina', 'Drozd','asdasdsds@ukr.net', '09543563453')

console.log(users);

let sortedUsers = users.sort((a,b) => a.id - b.id);
console.log(sortedUsers);