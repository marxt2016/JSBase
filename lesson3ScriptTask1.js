'use strict';
//Урок3
/* Задание 1:
 С помощью цикла for написать алгоритм для вывода чисел (выводите в консоль, с помощью console.log) от 0 до 10 включительно, чтобы результат выглядел так:
0 – это ноль
1 – нечетное число
2 – четное число
*/
/**
 * Функция определяет четные и нечетные числа, вычисляя остаток отделения на 2. 
 * Ноль выявляется нестрогим сравнением, при определении четного числа используется дополнительная проверка на исключение ноля.
 * Результат проверки выводится в консоль.
 */
function defineEvenNumber() {
    for (let i = 0; i <= 10; i++) {
        if (i == 0) {
            console.log(i + " - это ноль");
        }
        if (i % 2 !== 0) {
            console.log(i + " - нечетное число");
        }
        if ((i % 2 == 0) && (i !== 0)) {
            console.log(i + " - четное число");
        }
    }
};

defineEvenNumber();

/*Задание 2:
Вывести в консоль значения с пометкой в комментариях
*/
const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};
console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

/*Задание 3:
Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку
15%.
*/
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

/**
 Функция расчитывает новую цену с указанной скидкой
@param {number} price - int number
@param {number} discount - int number
@returns {number} price - discount
 */

function calculatePrice(price, discount) {
    return price * (1 - discount / 100);
}

// решение с forEach
let arrayWithNewPrice = [];
let result = products.forEach(function (product) {
    let priceWithDiscount = calculatePrice(product.price, 15);
    let newObjectWithDiscountPrice = Object.assign({}, product, { priceWithDiscount });
    arrayWithNewPrice.push(newObjectWithDiscountPrice);
});

// решение с map
let newPriceArray = products.map(function (product) {
    let priceWithDiscount = calculatePrice(product.price, 15);
    return Object.assign({}, product, { priceWithDiscount });
});
console.log(newPriceArray);

console.log(arrayWithNewPrice);


/*Задание 4:
Массив с продуктами в интернет-магазине. Нужно:
1. Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort https://mzl.la/2Y79hbZ , как устроен sort можно посмотреть например здесь https://youtu.be/O2pusOp0gC0 или в дополнительных видео в материалах урока.
*/
const products1 = [
    { id: 3, price: 127, photos: ["1.jpg", "2.jpg",] },
    { id: 5, price: 499, photos: [] },
    { id: 10, price: 26, photos: ["3.jpg"] },
    { id: 8, price: 78, },
];

//1. Товары с фото
//Опциональное связывание ? - позволяет добраться до вложенных св - в объекта, с условием, что такое свойство может отсутствовать(null), и не генерит exception.
//Если свойства нет - то появляется undefined. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
const productsWithPhotos = products1.filter(product => product.photos?.length > 0);
console.log(productsWithPhotos);

//1. Товары с сортировкой по цене (от низкой цены к высокой)
let sortedAscArray = products1.sort(function (a, b) {
    if (a.price > b.price) {
        return 1;
    }
    if (a.price < b.price) {
        return -1;
    }
    return 0;
});
console.log(sortedAscArray);

//Задание 5
function numbersForConsole() {
    for (let i = 0; i < 10; console.log(i), i++) {

    }
}
numbersForConsole();

//Задание 6
function createMountain(count) {
    let defaultString = "";
    for (let i = 0; i < count; i++) {
        defaultString += "x";
        console.log(defaultString);
    }
}
createMountain(7);



