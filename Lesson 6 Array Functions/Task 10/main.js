// ----------------------- TASK - #EP5I1UUzAX --------------------------------
let cardSuites = ['spade', 'diamond','heart', 'clubs'];
let values = ['6','7','8','9','10', 'ace','jack','queen','king'];

let cards = [];
for (const cardSuit of cardSuites) {
    for (const value of values) {
        let card = {
            cardSuit:cardSuit,
            value: value
        }
        if (cardSuit === 'diamond' || cardSuit === 'heart'){
            card.color = 'red';
        }else card.color = 'black'
        cards.push(card);
    }
}
console.log(cards);

let sortedCards = cards.reduce((acc,curr) => {
    if(curr.cardSuit === 'spade'){
        acc.spades.push(curr);
    }
    else if(curr.cardSuit === 'diamond'){
        acc.diamonds.push(curr);
    }else if(curr.cardSuit === 'heart'){
        acc.hearts.push(curr);
    }else {
        acc.clubs.push(curr);
    }
    return acc
},{spades:[],diamonds:[],hearts:[],clubs:[]})

console.log(sortedCards);