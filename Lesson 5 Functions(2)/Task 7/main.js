// ------------------- TASK - #0Kxco1edSN ----------------------------

let list = (desc,amount) =>{
    document.write(`<ul>`);
    for(let i = 0; i<amount; i++){
        document.write(`<li>${desc}</li>`);
    }
    document.write(`</ul>`);
}
list('Okten',6);