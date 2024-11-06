// ----------------- TASK ID - #3ckURgvs ---------------------------------------------------

let time = prompt('Enter num from 0 to 59');

if(time >= 0 && time <= 15){
    console.log('Число попадає в першу чверть');
}else if(time > 15 && time <= 30){
    console.log('Число попадає в другу чверть');
}else if(time > 30 && time <= 45){
    console.log('Число попадає в третю чверть');
}else{
    console.log('Число попадає в четверту чверть');
}

console.log(time);

