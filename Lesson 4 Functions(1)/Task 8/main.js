// ------------------- TASK - #gEFoxMMO ----------------------------

let info = ['hello',1,false,'Okten'];

function createList(array){
    document.write(`<ul>`);
    for(let i = 0; i<array.length; i++){
        document.write(`<li>${array[i]}</li>`);
    }
    document.write(`</ul>`);
}
createList(info)