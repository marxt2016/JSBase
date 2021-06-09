'use strict';
//Урок4
/* Задание 1.1:
 конструктор Product, который принимает параметры name и price, сохраните их как свойства объекта.
 Также объекты типа Product должны иметь метод make25PercentDiscount,
 который будет уменьшать цену в объекте на 25%.
*/
/**
 es6
 */
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount() {
        return this.price = 0.85 * this.price;
    }
}

const myProduct = new Product("name1", 100);
alert("Price with discount = " + myProduct.make25PercentDiscount());

/**
 es5 
 */
function Product1(name, price) {
    this.name = name;
    this.price = price;
}
Product1.prototype.make25PercentDiscount1 = function () {
    return this.price = 0.85 * this.price;
};
const myProduct1 = new Product1("name1", 100);
alert("Price with discount = " + myProduct1.make25PercentDiscount1());


/* Задание 1.2:
 а) конструктор Post,
 который принимает параметры author, text, date и сохраняет их как свойства объекта.
  Объекты типа Post должны иметь метод edit,
  который будет принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost,
который принимает параметры author, text, date.
 Проинициализируйте эти свойства с помощью конструктора Post,
 чтобы не дублировать код.
 Также в конструкторе AttachedPost должно создаваться свойство highlighted со значением false.
 Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted,
который будет назначать свойству highlighted значение true.
*/
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (newtext) {
    this.text = newtext;
};

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
};

let myPost = new Post("AuthorMy", "TextMy", new Date().getUTCMonth());
alert(myPost.date);
myPost.edit("Post1new823764");
alert(myPost.text);


let myPost2 = new AttachedPost("AuthorMy2", "TextMy2", new Date().getUTCDay().toString());
alert(myPost2.date);
myPost2.edit("Post2newtext");
alert(myPost2.text);
myPost2.makeTextHighlighted();
alert(myPost2.highlighted);


class Postes6 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    };

    edites6(newtext) {
        this.text = newtext;
    }
}

let myPostES6 = new Postes6("AuthorMy", "TextMy", new Date().getUTCMonth());
alert(myPostES6.date);
myPostES6.edites6("Post1333");
alert(myPostES6.text);

class AttachedPostes6 extends Postes6 {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }

}

let myPostes6_2 = new AttachedPostes6("AuthorMy2", "TextMy2", new Date().getUTCDay().toString());
alert(myPostes6_2.date);
myPostes6_2.edites6("Postes6_newww3456");
alert(myPost2.text);
myPostes6_2.makeTextHighlighted();
alert(myPostes6_2.highlighted);