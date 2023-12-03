'use strict';

let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные').toLocaleLowerCase().split(', ');
let screenPrice = +prompt('Сколько будет стоить данная работа?', '12000');
let adaptiv = Boolean(prompt('Нужен ли адаптив на сайте?'));

let service1 = prompt('Какой дополнительный тип услуги нужен?', 'Вёрстка модального окна');
let servicePrice1 = +prompt('Сколько это будет стоить?', '500');
let service2 = prompt('Какой дополнительный тип услуги нужен?', 'Написание скриптов для модального окна');
let servicePrice2 = +prompt('Сколько это будет стоить?', '555');

let rollback = 55;


const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
};

// 1) Объявить функцию getAllServicePrices. Функция возвращает сумму всех дополнительных услуг. Результат сохраняем в переменную allServicePrices. Тип - function expression
const getAllServicePrices = function (price1, price2) {
    return price1 + price2;
};

let allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);


// 2) Объявить функцию getFullPrice. Функция возвращает сумму стоимости верстки и стоимости дополнительных услуг (screenPrice + allServicePrices). Результат сохраняем в переменную fullPrice. Тип - function declaration
function getFullPrice(price1, price2) {
    return price1 + price2;
}

let fullPrice = getFullPrice(screenPrice, allServicePrices);


// 3) Объявить функцию getTitle. Функция возвращает title меняя его таким образом: первый символ с большой буквы, остальные с маленькой". Учесть вариант что строка может начинаться с пустых символов. " КаЛьКулятор Верстки
let getTitle = function (text) {
    return text[0].toUpperCase() + text.substring(1).toLocaleLowerCase();
};

title = getTitle(title);

// 4) Объявить функцию getServicePercentPrices. Функция возвращает итоговую стоимость за вычетом процента отката. Результат сохраняем в переменную servicePercentPrice (итоговая стоимость минус сумма отката)
const getServicePercentPrices = function (fullPrice, rollback) {
    return fullPrice - Math.ceil(fullPrice * (rollback / 100));
};

let servicePercentPrice = getServicePercentPrices(fullPrice, rollback);


// Вариант через if
const getRollbackMessage = function () {
    if (fullPrice >= 30000) {
        return 'Даем скидку в 10%';
    } else if (fullPrice >= 15000 && fullPrice < 30000) {
        return 'Даем скидку в 5%';
    } else if (fullPrice > 0 && fullPrice < 15000) {
        return 'Скидка не предусмотрена';
    } else {
        return 'Что то пошло не так';
    }
};

// Вариант через switch
const getRollbackMessageSwitch = function () {
    switch (true) {
        case fullPrice >= 30000:
            return 'Даем скидку в 10%';
            break;
        // case 15000 <= fullPrice && fullPrice < 30000:
        case fullPrice >= 15000 && fullPrice < 30000:
            return 'Даем скидку в 5%';
            break;
        case 0 < fullPrice && fullPrice < 15000:
            return 'Скидка не предусмотрена';
            break;
        default:
            return 'Что то пошло не так';
    }
};


showTypeOf('Название проекта ' + '"' + title + '".');
showTypeOf(screens);
showTypeOf('Данная работа будет стоить ' + screenPrice + 'р.');
showTypeOf(getRollbackMessage());
adaptiv == true ? showTypeOf('Адаптив нужен.') : showTypeOf('Адаптив не нужен.');
showTypeOf('Итоговая стоимость будет равна ' + fullPrice + 'р.');
showTypeOf('Итоговая стоимость с учётом вычета отката будет равна ' + servicePercentPrice + 'р.');


// console.log(screens.length);
// console.log('Стоимость разработки сайта ' + fullPrice + ' рублей');
// console.log(screens);
// console.log(fullPrice * (rollback / 100));

// console.log('First log.');
// alert('Important!');