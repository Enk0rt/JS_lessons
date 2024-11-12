// ------------------- TASK - #0Kxco1edSN ----------------------------

function createList(desc,amount){
    document.write(`<ul>`);
    for(let i = 0; i<amount; i++){
        document.write(`<li>${desc}</li>`);
    }
    document.write(`</ul>`);
}

createList('Okten',6);