'use strict'

//Задание 1
//пример 1
//Префиксный инкремент увеличивает значение "а" на 1 и записывает в "с": с = а+1;
let a = 1, b = 1, c, d;
c = ++a;
alert(c); // ответ: 2

//пример 2
//Постфиксный инкремент увеличивает значение "b" на 1. Но сначала происходит присваивание первоначального значения "b" в "d", а после этого "b" увеличивается на 1.
d = b++;
alert(d); // ответ: 1

//пример 3
/* "a" = 2 после предыдущего увеличения, Префиксный инкремент увеличивает значение "а" на 1 и "а"= 3
в результате в "с" записывается 2+3.*/
c = 2 + ++a;
alert(c); // ответ: 5

//пример 4
/* "b" = 2 после предыдущего увеличения, постфиксный инкремент увеличивает значение "b" на 1 после операции сложения. 
в результате в "b" записывается 2+2.*/
d = 2 + b++;
alert(d); // ответ: 4

alert(a); // a = 3 после префиксного инкремента в Примере 3
alert(b); // b = 3 после постфиксного инкремента в Примере 4

//Задание 2
//Выражение в скобках дает результат от сокращенного умножения с присваиванием "n = 2*2"
// x получает сумму 1 + 4;
let n = 2;
let x = 1 + (n *= 2); //ответ: 5


//Задание 3
function numberActions(num1, num2) {
    let result = 0;
    if ((num1 >= 0) && (num2 >= 0)) {
        return result = num1 - num2;
    }
    if ((num1 < 0) && (num2 < 0)) {
        return result = num1 * num2;
    } else {
        return result = parseInt(num1) + parseInt(num2);
    }
}

function chekInput(input) {
    let result = false;
    if (input == "") {
        alert("Please provide some number")
        return result = false;
    }
    if (input == null) {
        alert("Please provide not null value")
        return result = false;
    }
    if (isNaN(input)) {
        alert("Please provide number")
        return result = false;
    }
    return result = true;
}

function askInput() {
    let n = prompt("Please enter number");
    if (!chekInput(n)) {
        return;
    }
    return n;
}

let n1 = askInput();
if (n1) {
    let n2 = askInput();
    if (n2) {
        alert(numberActions(n1, n2));
    }
}

//Задание 4
/**
 * основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
параметрами. 
@param{num1} num1 - int number
@param{num2} num2 - int number
@returns result of arithmetic operation
 */
const num1 = 2;
const num2 = 3;

let resultSum = (num1, num2) => {
    return num1 + num2;
}
console.log(resultSum(num1, num2));

let resultMultiple = (num1, num2) => {
    return num1 * num2;
}
console.log(resultMultiple(num1, num2));

let resultMinus = (num1, num2) => {
    return num1 - num2;
}
console.log(resultMinus(num1, num2));

let resultDiv = (num1, num2) => {
    return num1 / num2;
}
console.log(resultDiv(num1, num2));

//Задание 5
/**
 * arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции, выполнить одну из арифметических
операций
@param{arg1} arg1  - int number
@param{arg2} arg2 - int number
@param{operation} operation - string value
@returns result of arithmetic operation
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return resultSum(arg1, arg2);
        case "-":
            return resultMinus(arg1, arg2);
        case "*":
            return resultMultiple(arg1, arg2);
        case "/":
            return resultDiv(arg1, arg2);
        default:
            alert("Please provide operator symbol");
            return;
    }
}

let operationSign = prompt("Please provide operation sign");
alert(mathOperation(num1, num2, operationSign));

