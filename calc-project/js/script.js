'use strict';

// * Объявление переменных
const title = document.getElementsByTagName('h1')[0];

const handlerBtnStartCalculate = document.getElementsByClassName('handler_btn')[0];
const handlerBtnResetCalculate = document.getElementsByClassName('handler_btn')[1];

const screenBtnPlus = document.querySelector('.screen-btn');

const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');

const inputRange = document.querySelector('.rollback input[type="range"]');
const rangeValue = document.querySelector('.rollback span.range-value');

const totalInput = document.getElementsByClassName('total-input')[0];
const totalInputCount = document.getElementsByClassName('total-input')[1];
const totalInputCountOther = document.getElementsByClassName('total-input')[2];
const totalInputFullCount = document.getElementsByClassName('total-input')[3];
const totalInputCountRollback = document.getElementsByClassName('total-input')[4];

let screens = document.querySelectorAll('.screen');


// * Объект appData
const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    screenCount: 0,
    adaptiv: true,
    rollback: 15,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    isError: false,

    // Данный метод будет запускаться во время считывания нашего когда, то-есть загрузки страницы
    init: function () {
        appData.addTitle();
        // handlerBtnStartCalculate.addEventListener('click', appData.start);
        handlerBtnStartCalculate.addEventListener('click', appData.checkError);
        screenBtnPlus.addEventListener('click', appData.addScreenBlock);
        inputRange.addEventListener('input', appData.changeRollback);
        appData.showRollback();
        appData.addScreens();
    },

    // Метод запрещает расчёт, если поля не заполнены
    checkError: function () {
        screens = document.querySelectorAll('.screen');

        appData.isError = false;

        screens.forEach(function (screen) {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');

            if (select.value === '' || input.value === '') {
                appData.isError = true;
            }
        });

        if (appData.isError === false) {
            appData.start();
        }
    },

    // Метод меняет title HTML документа
    addTitle: function () {
        document.title = title.textContent;
    },

    // Метод запускает вызов функций
    start: function () {
        // alert('Рассчёт запущен!');
        appData.addServices();
        appData.addScreens();
        appData.addPrices();
        appData.showResult();
    },

    //  Чуть ли не лучшая проверка в JS на число
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },

    // Метод показывает результат
    showResult: function () {
        totalInput.value = appData.screenPrice;
        totalInputCount.value = appData.screenCount;
        totalInputCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber;
        totalInputFullCount.value = appData.fullPrice;
        totalInputCountRollback.value = appData.servicePercentPrice;
    },

    // Метод показывает значение по умолчанию rollback у range
    showRollback: function () {
        rangeValue.textContent = appData.rollback + '%';
        inputRange.value = appData.rollback;
    },

    // Метод меняет значение rollback при изменении range
    changeRollback: function (event) {
        rangeValue.textContent = event.target.value + '%';
        appData.rollback = event.target.value;
    },

    // Метод заполняет свойство массива screens объектами на основе данных из вёрстки
    addScreens: function () {
        screens = document.querySelectorAll('.screen');

        screens.forEach(function (screen, index) {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;

            // Внутрь массива screens сохраняем элемент в виде объекта с id, name и price
            appData.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value,
                count: +input.value
            });
        });
    },

    // Метод заполняет свойства дополнительных объектов servicesPercent и servicesNumber ключами из выбранных checkbox
    addServices: function () {
        otherItemsPercent.forEach(function (item) {
            const check = item.querySelector(['input[type=checkbox]']);
            const label = item.querySelector(['label']);
            const input = item.querySelector(['input[type=text]']);

            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value;
            }
        });

        otherItemsNumber.forEach(function (item) {
            const check = item.querySelector(['input[type=checkbox]']);
            const label = item.querySelector(['label']);
            const input = item.querySelector(['input[type=text]']);

            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value;
            }
        });
    },

    // Метод добавляет новый блок с экранами
    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true);
        screens[screens.length - 1].after(cloneScreen);
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

        // Считаем сумму всех дополнительных услуг с фиксированным значением и не привязанных к %
        for (let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key];
        }

        // Считаем сумму всех дополнительных услуг привязанных к %
        for (let key in appData.servicesPercent) {
            appData.servicePricesPercent += Math.ceil(appData.screenPrice * (appData.servicesPercent[key] / 100));
        }

        // Считаем сумму основных экранов + дополнительные услуги с фиксированной ценой + дополнительные услуги привязанные к %
        appData.fullPrice = appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;

        // Считаем итоговую стоимость за вычетом процента отката(итоговая стоимость - сумма отката)
        appData.servicePercentPrice = appData.fullPrice - Math.ceil(appData.fullPrice * (appData.rollback / 100));

        // Метод reduce считает общее количество всех экранов
        appData.screenCount = appData.screens.reduce(function (sum, item) {
            return sum + +item.count;
        }, 0);
    }
};

// * Вызов методов объекта appData
appData.init();


// * Вывод значений в консоль
