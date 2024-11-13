// ------------------- TASK - #SIdMd0hQ ----------------------------

let users = [
    {
        id: 1,
        name: 'Artem',
        age: 22
    },
    {
        id: 2,
        name: 'Max',
        age: 17
    },
    {
        id: 3,
        name: 'Yarik',
        age: 18
    },
]

let userArray = (array) => {
    for (const user of array) {
        console.log(user);
    }
}
userArray(users);
