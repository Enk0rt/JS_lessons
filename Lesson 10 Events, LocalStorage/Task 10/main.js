// ------------------------ TASK - #NKB0tgWIK1G  ---------------------------

let container = document.getElementById('container');
let list = document.getElementById('list');
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');


let arrObj = [];
let pagination = 10;
let currentPage =1;

for(let i = 1;i<101;i++){
    let user = {
        id: i,
        name: 'Artem'
    }
    arrObj.push(user);
}

function showPagination(page){
    list.innerHTML = ''

    let start = (page-1)*pagination;
    let end = page*pagination
    let toShow = arrObj.slice(start, end);


    for (const item of toShow) {
        let listItem = document.createElement("li");
        listItem.innerText = `${item.id},${item.name}`;
        list.appendChild(listItem);
    }
}

showPagination(currentPage);

nextBtn.addEventListener('click',()=>{
    if(currentPage*pagination <arrObj.length){
        currentPage++;
        showPagination(currentPage);
    }
});

prevBtn.addEventListener('click',() =>{
    if(currentPage === 1){
        showPagination(currentPage)
    }else if(currentPage*pagination > 1 && currentPage*pagination){
        currentPage--;
        showPagination(currentPage)
    }
})