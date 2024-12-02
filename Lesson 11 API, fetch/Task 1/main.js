let container = document.getElementById('container');
let btnPrev = document.createElement('button');
let btnNext = document.createElement('button');
btnPrev.innerText = 'Prev';
btnNext.innerText = 'Next';

let cartsArr = [];
let maxCount = 5; // Показуємо 5 кошиків на сторінку
let currentPage = 1;

fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(res => {
        cartsArr = res.carts; // Отримуємо масив кошиків
        document.body.append(btnPrev, btnNext);
        showPagination(currentPage); // Відображення першої сторінки
    });

btnNext.addEventListener('click', () => {
    if (currentPage * maxCount < cartsArr.length) {
        currentPage++;
        showPagination(currentPage);
    }
});

btnPrev.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        showPagination(currentPage);
    }
});

function addCartContent({ userId, totalQuantity, totalProducts, total, discountedTotal, products }) {
    let cartEl = document.createElement("div");
    let titleEl = document.createElement('h2');
    let totalEl = document.createElement('p');
    let quantityEl = document.createElement('p');
    let discountEl = document.createElement('p');

    titleEl.innerText = `Користувач - ${userId}`;
    quantityEl.innerText = `Загальна к-сть товарів у корзині - ${totalQuantity}, к-сть унікальних товарів у корзині - ${totalProducts}`;
    totalEl.innerText = `Загальна вартість корзини без знижок - ${total} UAH`;
    discountEl.innerText = `Загальна вартість корзини із знижками - ${discountedTotal} UAH`;

    cartEl.append(titleEl, quantityEl, totalEl, discountEl);
    container.append(cartEl);


    // Відображення корзини
    let productsContainer = document.createElement("div");
    let textProductsContainer = document.createElement("p");
    textProductsContainer.innerText = `У кошику:`;

    productsContainer.appendChild(textProductsContainer)
    products.forEach(({ id, title, price, total, quantity, discountPercentage, discountedTotal }) => {
        let productInfo = document.createElement("ul");
        let productTitle = document.createElement("h3");
        let priceProductEl = document.createElement('li');
        let totalProductEl = document.createElement('li');
        let discountProductEl = document.createElement('li');

        productTitle.innerText = `${title}, ID товару -  ${id}`
        priceProductEl.innerText = `Кількість товару - ${quantity}, Вартість одиниці товару - ${price}`
        totalProductEl.innerText = `Загальна вартість - ${total}`
        discountProductEl.innerText = `Знижка - ${discountPercentage}, Загальна вартість із знижкою - ${discountedTotal}`


        productInfo.append(priceProductEl,totalProductEl,discountProductEl);
        productsContainer.append(productTitle,productInfo);
    })
        cartEl.appendChild(productsContainer);

}

function showPagination(page) {
    container.innerHTML = ''; // Очищення контейнера перед зміною сторінки
    let start = (page - 1) * maxCount;
    let end = page * maxCount;
    let toShow = cartsArr.slice(start, end); // Визначаємо частину масиву для показу

    toShow.forEach(cart => addCartContent(cart)); // Відображаємо тільки потрібну частину
}
