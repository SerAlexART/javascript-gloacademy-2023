'use strict';

const rollback = 55;

let title;
let screens;
let screenPrice;
let adaptiv;
let service1;
let service2;
let allServicePrices;
let fullPrice;
let getTitle;
let servicePercentPrice;

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
};

//  Чуть ли не лучшая проверка в JS на число
const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
    title = prompt('Как называется ваш проект?', 'Задание 5.');
    screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные').toLocaleLowerCase().split(', ');
    // screenPrice = +prompt('Сколько будет стоить данная работа?', '12000');
    // screenPrice = prompt('Сколько будет стоить данная работа?', '12000');

    // 1) Переписать получение значения переменной screenPrice циклом do while. Вопрос должен задаваться один раз обязательно, далее уже по условию
    do {
        screenPrice = +prompt('Сколько будет стоить данная работа?', '12000');
    } while (!isNumber(screenPrice));

    adaptiv = Boolean(prompt('Нужен ли адаптив на сайте?', 'Адаптив нужен.'));
};

// Функция возвращает сумму всех дополнительных услуг
// Тип - function expression
// const getAllServicePrices = function () {
//     return servicePrice1 + servicePrice2;
// };


// 3) Поправить проект так, чтоб расчеты велись верно. Проверить типы получаемых переменных и привести их к нужным.
const getAllServicePrices = function () {
    const message = 'Сколько это будет стоить?';
    let sum = 0;
    let price = 0;

    for (let i = 0; i < 2; i++) {
        do {
            if (i === 0) {
                service1 = prompt('Какой дополнительный тип услуги нужен?', 'Вёрстка модального окна');
                price = 222;

                    do {
                        sum = +prompt(message, price);
                    } while (!isNumber(sum))

            } else if (i === 1) {
                service2 = prompt('Какой дополнительный тип услуги нужен?', 'Написание скриптов для модального окна');
                price = 555;

                do {
                    sum = +prompt(message, price);
                } while (!isNumber(sum))
            }

        } while (!isNumber(sum));
    }

    return sum;
};

// Функция возвращает сумму стоимости верстки и стоимости дополнительных услуг
// Тип - function declaration
function getFullPrice() {
    return screenPrice + allServicePrices;
}

// Функция возвращает title меняя его таким образом: первый символ с большой буквы, остальные с маленькой". Учесть вариант что строка может начинаться с пустых символов.
getTitle = function () {
    return title.trim()[0].toUpperCase() + title.trim().substring(1).toLocaleLowerCase();
};

// Функция возвращает итоговую стоимость за вычетом процента отката(итоговая стоимость - сумма отката)
const getServicePercentPrices = function () {
    return fullPrice - Math.ceil(fullPrice * (rollback / 100));
};

// Функция возвращает итоговое значение скидки, если она предусмотрена
const getRollbackMessage = function () {
    if (fullPrice >= 30000) {
        return 'Даем скидку в 10%.';
    } else if (fullPrice >= 15000 && fullPrice < 30000) {
        return 'Даем скидку в 5%.';
    } else if (fullPrice > 0 && fullPrice < 15000) {
        return 'Скидка не предусмотрена.';
    } else {
        return 'Что то пошло не так.';
    }
};

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
title = getTitle();
servicePercentPrice = getServicePercentPrices();

showTypeOf('Название проекта ' + '"' + title + '".');
showTypeOf('Типы экранов, которые нужно разработать: ' + screens + '.');
showTypeOf('Данная работа будет стоить ' + screenPrice + 'р.');
showTypeOf(getRollbackMessage());
adaptiv == true ? showTypeOf('Адаптив нужен.') : showTypeOf('Адаптив не нужен.');
showTypeOf('Итоговая стоимость будет равна ' + fullPrice + 'р.');
showTypeOf('Итоговая стоимость с учётом вычета отката будет равна ' + servicePercentPrice + 'р.');

// showTypeOf('getAllServicePrices', typeof allServicePrices, allServicePrices); // Проверка переменной

// console.log(screens.length);
// console.log('Стоимость разработки сайта ' + fullPrice + ' рублей');
// console.log(screens);
// console.log(fullPrice * (rollback / 100));

// console.log('First log.');
// alert('Important!');

// console.log(sum);