// ------------------------ TASK - #RbQGnH5DuC ---------------------------

let arrNums = [1,2,3,4,5,7,8,9]
let arrStr = ['a','b','c']
let arrObj = [{name:'AAA',age:123},{name:'BBB',age:234},{name:'CCC',age:345}]

localStorage.setItem('arrNums',JSON.stringify(arrNums))
localStorage.setItem('arrStr',JSON.stringify(arrStr))
localStorage.setItem('arrObj',JSON.stringify(arrObj))

function addToArrOfLs(arrName,obj){
           let lsItem = JSON.parse(localStorage.getItem(arrName));
            lsItem.push(obj);
            localStorage.setItem(arrName,JSON.stringify(lsItem));
}

addToArrOfLs('arrNums',{name:'hello'});
addToArrOfLs('arrNums',{name:'it`s okten'});
addToArrOfLs('arrObj',{name:'Task is complete'});
addToArrOfLs('arrStr',{id:1,name:'Artem'});
