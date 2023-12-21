'use strict';

// Объявление переменных

// 1) Получить заголовок "Калькулятор верстки" через метод getElementsByTagName. (тэг h1, получить именно элемент, а не коллекцию)
const title = document.getElementsByTagName('title')[0];

// 2) Получить кнопки "Рассчитать" и "Сброс" через метод getElementsByClassName. (класс handler_btn)
const handlerBtnCalculate = document.getElementsByClassName('handler_btn')[0];

const handlerBtnReset = document.getElementsByClassName('handler_btn')[1];
console.log(handlerBtnReset);
// 3) Получить кнопку "+" под выпадающим списком через метод querySelector. (класс screen-btn)
const screenBtn = document.querySelector('.screen-btn');

// 4) Получить все элементы с классом other-items в две разные переменные. В первую элементы у которых так же присутствует класс percent, во вторую элементы у которых так же присутствует класс number через метод querySelectorAll.
const otherItemsPercent = document.querySelectorAll('.other-items.percent');

const otherItemsNumber = document.querySelectorAll('.other-items.number');

// 5) Получить input type=range через его родителя с классом rollback одним запросом через метод querySelector.
const inputRange = document.querySelector('.rollback input[type="range"]');

// 6) Получить span с классом range-value через его родителя с классом rollback одним запросом через метод querySelector.
const rangeValue = document.querySelector('.rollback span.range-value');

// 7) Получить все инпуты с классом total-input справа через метод getElementsByClassName. (класс total-input, получить именно элементы, а не коллекции)
const totalInput = document.getElementsByClassName('total-input')[0];
const totalInputCount = document.getElementsByClassName('total-input')[1];
const totalInputCountOther = document.getElementsByClassName('total-input')[2];
const totalInputFullCount = document.getElementsByClassName('total-input')[3];
const totalInputCountRollback = document.getElementsByClassName('total-input')[4];

// 8) Получить все блоки с классом screen в изменяемую переменную ( let ) через метод querySelectorAll (далее мы будем переопределять ее значение)
let screen = document.querySelectorAll('.screen');




// Функция проверки типа
// const showTypeOf = function (variable) {
//     console.log(variable, typeof variable);
// };


// Объект appData
const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptiv: true,
    rollback: 15,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},

    // Метод start запускает вызов функций
    start: function () {
        appData.asking();

        appData.addPrices();
        appData.getTitle();
        // appData.getAllServicePrices();
        appData.getFullPrice();
        appData.getServicePercentPrices();

        // appData.loggerMessage();
        appData.logger();
    },

    //  Чуть ли не лучшая проверка в JS на число
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },

    // Метод с вопросами о проекте
    asking: function () {

        // 1-1) - ответ на вопрос "Как называется ваш проект?" - строка
        do {
            appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
        } while (appData.isNumber(appData.title));
        // appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные').toLocaleLowerCase().split(', ');

        // do {
        //     appData.screenPrice = +prompt('Сколько будет стоить данная работа?', '12000');
        // } while (!appData.isNumber(appData.screenPrice));

        appData.adaptiv = confirm('Нужен ли адаптив на сайте?');

        // Цикл с типом экранов
        for (let i = 0; i < 2; i++) {
            let name = '';
            let price = 0;
            // let nameDefault = 'Тип экрана №' + (i + 1);
            let nameDefault;
            // let priceDefault = i + 100;
            let priceDefault;

            if (i == 0) {
                nameDefault = 'Простые';
                priceDefault = 1000;
            } else {
                nameDefault = 'Сложные';
                priceDefault = 1500;
            }

            // 1-2) - ответ на вопрос "Какие типы экранов нужно разработать?" - строка
            do {
                name = prompt('Какие типы экранов нужно разработать?', nameDefault);
            } while (appData.isNumber(name));

            // 1-3) - ответ на вопрос "Сколько будет стоить данная работа?" - число
            do {
                price = prompt('Сколько будет стоить данная работа?', priceDefault);
            } while (!appData.isNumber(price));

            // Внутрь массива screens сохраняем элемент в виде объекта с id, name и price
            appData.screens.push({ id: i, name: name, price: price });
        }

        // Цикл про дополнительный тип услуг
        for (let i = 0; i < 2; i++) {
            let name = '';
            let price = 0;
            // let nameDefault = 'Дополнительный тип №' + (i + 1);
            let nameDefault;
            // let priceDefault = i + 200;
            let priceDefault;

            if (i == 0) {
                nameDefault = 'Вёрстка модального окна';
                priceDefault = 2000;
            } else {
                nameDefault = 'Адаптация модального окна';
                priceDefault = 2500;
            }

            // 1-4)- ответ на вопрос "Какой дополнительный тип услуги нужен?" - строка
            do {
                name = prompt('Какой дополнительный тип услуги нужен?', nameDefault);
            } while (appData.isNumber(name));

            // 1-5) - ответ на вопрос "Сколько это будет стоить?" - число
            do {
                price = prompt('Сколько это будет стоить?', priceDefault);
            } while (!appData.isNumber(price));

            appData.services[name] = +price;
        }

    },

    // Метод расчитывает стоимость наших экранов и дополнительных услуг
    addPrices: function () {
        // Цикл считает сумму всех типов экранов
        // for (let screen of appData.screens) {
        //     appData.screenPrice += +screen.price;
        // }

        // Метод reduce считает сумму всех типов экранов
        appData.screenPrice = appData.screens.reduce(function (sum, item) {
            return sum + +item.price; // previousValue/sum состоит из суммы всех item.price
        }, 0);

        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key];
        }
    },

    // Метод возвращает сумму стоимости верстки и стоимости дополнительных услуг
    getFullPrice: function () {
        appData.fullPrice = appData.screenPrice + appData.allServicePrices;
    },

    // Метод возвращает итоговую стоимость за вычетом процента отката(итоговая стоимость - сумма отката)
    getServicePercentPrices: function () {
        appData.servicePercentPrice = appData.fullPrice - Math.ceil(appData.fullPrice * (appData.rollback / 100));
    },

    // Метод возвращает title меняя его таким образом: первый символ с большой буквы, остальные с маленькой". Учесть вариант что строка может начинаться с пустых символов.
    getTitle: function () {
        appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substring(1).toLocaleLowerCase();
    },

    // Метод возвращает итоговое значение скидки, если она предусмотрена
    getRollbackMessage: function (price) {
        if (price >= 30000) {
            return 'Даем скидку в 10%.';
        } else if (price >= 15000 && price < 30000) {
            return 'Даем скидку в 5%.';
        } else if (price > 0 && price < 15000) {
            return 'Скидка не предусмотрена.';
        } else {
            return 'Что то пошло не так.';
        }
    },

    // 3) Метод logger выводит в консоль необходимую информациюи запускается в самом конце метода start (после того как все расчеты уже были произведены)
    logger: function () {
        console.log('Название проекта ' + '"' + appData.title + '".');

        if (appData.adaptiv == true) {
            console.log('Адаптив нужен.');
        } else { console.log('Адаптив не нужен.'); }

        console.log('Откат равен ' + appData.rollback + '%.');
        console.log(appData.getRollbackMessage(appData.fullPrice));
        console.log('Итоговая стоимость дополнительных услуг будет равна ' + appData.allServicePrices + 'р.');
        console.log('Итоговая стоимость будет равна ' + appData.fullPrice + 'р.');
        console.log('Итоговая стоимость с учётом вычета отката будет равна ' + appData.servicePercentPrice + 'р.');
        console.log(appData.screens);
    }

};

// Вызов методов объекта appData
// appData.start();


// Вывод значений в консоль
console.log(title);
console.log(handlerBtnCalculate);
console.log(handlerBtnReset);
console.log(screenBtn);
console.log(otherItemsPercent);
console.log(otherItemsNumber);
console.log(inputRange);
console.log(rangeValue);
console.log(totalInput);
console.log(totalInputCount);
console.log(totalInputCountOther);
console.log(totalInputFullCount);
console.log(totalInputCountRollback);
console.log(screen);