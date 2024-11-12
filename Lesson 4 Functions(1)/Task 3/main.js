// ------------------- TASK - #Mbiz5K4yFe7 ----------------------------
const PI = 3.14;

function getArea(h,r){
    return 2*PI*Math.pow(r,2)+2*PI*r*h;
}

let cylinderArea = getArea(20,5);
console.log(cylinderArea)