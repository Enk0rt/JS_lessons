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

function exchange(sumUAH,currencyValues,currency){
    let exchangedMoney = 0;
    for (const item of currencyValues) {
            if (item.currency === currency) {
                exchangedMoney = sumUAH / item.value;
            }
        }
    return exchangedMoney;
    }

let getMoney = exchange(sumUAH, currencyValues,'USD');
console.log(getMoney);