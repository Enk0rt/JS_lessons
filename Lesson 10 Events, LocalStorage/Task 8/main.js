// ------------------------ TASK - #kUSgFqWY ---------------------------

let form = document.forms['tableGen'];

let btn = document.getElementsByTagName("button")[0];

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    let rows = form.rows.value;
    let columns = form.columns.value;
    let content = form.content.value;

    let table = document.createElement('table')

    for (let i = 0; i<rows;i++){
        let tableRows = document.createElement('tr')
            table.appendChild(tableRows)
        for(let k = 0;k<columns;k++){
            let tableColumns = document.createElement('td')
            tableColumns.innerText = content;
            table.appendChild(tableColumns)
        }
    }

    document.body.appendChild(table);

})



