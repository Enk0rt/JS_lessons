// ------------------- TASK - #mkGDenYnNjn ----------------------------

let sumUAH = prompt('Enter sum');

const currencyValues = [
    {
        currency:'USD',
        value:25
    },
    {
        currency:'EUR',
        value:42
    }
]

let exchangedMoney = (sumUAH,currencyValues,currency) =>{
    let num  = 0;
    for (const item of currencyValues) {
        if (item.currency === currency) {
            num = sumUAH / item.value;
        }
    }
    return num;
}

let getMoney = exchangedMoney(sumUAH, currencyValues,'USD');
console.log(getMoney);