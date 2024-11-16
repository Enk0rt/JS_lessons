// ----------------------- TASK - #yo06d74c1C --------------------------------

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// // відсортувати за спаданням за monthDuration
// let sortedMonth = coursesAndDurationArray.sort((a,b) => b.monthDuration - a.monthDuration);
// console.log(sortedMonth);
//
//
// //відфільтрувати і залишити тільки курси з тривалістю більше 5 місяців
// let filteredMonth = coursesAndDurationArray.filter(item => item.monthDuration > 5);
// console.log(filteredMonth)
//
//
// //перетворити кожен елемент на наступний тип {id,title,monthDuration}
// let mappedArr = coursesAndDurationArray.map((item,idx) => {
//     item.id = idx + 1;
//     return item
// });
// console.log(mappedArr);

let res = coursesAndDurationArray
    .sort((a,b) => b.monthDuration - a.monthDuration)
    .filter(item => item.monthDuration > 5)
    .map((item,idx) => ({...item, id: idx + 1}));
console.log(res);