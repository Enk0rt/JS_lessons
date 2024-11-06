// ----------------- TASK ID - #UMoNq4biWGe ---------------------------------------------------

let day = prompt('Enter num from 1 to 31');

if (day >= 0 && day <=10){
    console.log(`Day: ${day} - is in the first decade`);
}else if(day >10 && day<=20){
    console.log(`Day: ${day} - is in the second decade`);
}else{
    console.log(`Day: ${day} - is in the third decade`);
}