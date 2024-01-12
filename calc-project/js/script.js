'use strict';

// * Объявление переменных
const title = document.getElementsByTagName('h1')[0];

const handlerBtnStartCalculate = document.getElementsByClassName('handler_btn')[0];
const handlerBtnResetCalculate = document.getElementsByClassName('handler_btn')[1];

const screenBtnPlus = document.querySelector('.screen-btn');

let otherItemsPercent = document.querySelectorAll('.other-items.percent');
let otherItemsNumber = document.querySelectorAll('.other-items.number');

const inputRange = document.querySelector('.rollback input[type="range"]');
const rangeValue = document.querySelector('.rollback span.range-value');

const totalInput = document.getElementsByClassName('total-input')[0];
const totalInputCount = document.getElementsByClassName('total-input')[1];
const totalInputCountOther = document.getElementsByClassName('total-input')[2];
const totalInputFullCount = document.getElementsByClassName('total-input')[3];
const totalInputCountRollback = document.getElementsByClassName('total-input')[4];

let screens = document.querySelectorAll('.screen');

// let resetTest;

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
    checkErrorStart: function () { },
    resetStart: function () { },
    changeRollbackStart: function () { },
    clearServicesStart: function () { },
    changeContext: function () {
        this.checkErrorStart = this.checkErrorFunction.bind(appData);
        this.resetStart = this.resetFunction.bind(appData);
        this.changeRollbackStart = this.changeRollbackFunction.bind(appData);
        this.clearServicesStart = this.clearServicesFunction.bind(appData);
    },

    // Данный метод будет запускаться во время считывания нашего когда, то-есть загрузки страницы
    init: function () {
        // this.checkErrorStart = this.checkErrorFunction.bind(appData);
        // this.resetStart = this.resetFunction.bind(appData);
        // this.changeRollbackStart = this.changeRollbackFunction.bind(appData);
        this.changeContext();

        this.addTitle();
        // handlerBtnStartCalculate.addEventListener('click', appData.start);
        handlerBtnStartCalculate.addEventListener('click', this.checkErrorStart);
        handlerBtnResetCalculate.addEventListener('click', this.resetStart);
        screenBtnPlus.addEventListener('click', this.addScreenBlock);
        inputRange.addEventListener('input', this.changeRollbackStart);
        this.showRollback();
        this.addScreens();
    },

    // Метод запрещает расчёт, если поля не заполнены
    checkErrorFunction: function () {
        const startAppData = this.start.bind(this);
        const blockCalculateStart = this.blockCalculateFunction.bind(this);

        screens = document.querySelectorAll('.screen');

        this.isError = false;

        screens.forEach((screen) => {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');

            if (select.value === '' || input.value === '') {
                this.isError = true;
            }
        });

        if (this.isError === false) {
            startAppData();
            blockCalculateStart();
        }
    },

    // Метод меняет title HTML документа
    addTitle: function () {
        document.title = title.textContent;
    },

    // Метод запускает вызов функций
    start: function () {
        // alert('Рассчёт запущен!');
        // const addPrices = appData.addPrices.bind(appData);

        this.addServices();
        this.addScreens();
        this.addPrices();
        this.showResult();
    },

    //  Чуть ли не лучшая проверка в JS на число
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },

    // Метод показывает результат
    showResult: function () {
        totalInput.value = this.screenPrice;
        totalInputCount.value = this.screenCount;
        totalInputCountOther.value = this.servicePricesPercent + this.servicePricesNumber;
        totalInputFullCount.value = this.fullPrice;
        totalInputCountRollback.value = this.servicePercentPrice;
    },

    // Метод показывает значение по умолчанию rollback у range
    showRollback: function () {
        rangeValue.textContent = this.rollback + '%';
        inputRange.value = this.rollback;
    },

    // Метод меняет значение rollback при изменении range
    changeRollbackFunction: function (event) {
        rangeValue.textContent = event.target.value + '%';
        this.rollback = event.target.value;
    },

    // Метод заполняет свойство массива screens объектами на основе данных из вёрстки
    addScreens: function () {
        screens = document.querySelectorAll('.screen');

        screens.forEach((screen, index) => {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;

            // Внутрь массива screens сохраняем элемент в виде объекта с id, name и price
            this.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value,
                count: +input.value
            });
        });
    },

    // Метод заполняет свойства дополнительных объектов servicesPercent и servicesNumber ключами из выбранных checkbox
    addServices: function () {
        otherItemsPercent.forEach((item) => {
            const check = item.querySelector(['input[type=checkbox]']);
            const label = item.querySelector(['label']);
            const input = item.querySelector(['input[type=text]']);

            if (check.checked) {
                this.servicesPercent[label.textContent] = +input.value;
            }
        });

        otherItemsNumber.forEach((item) => {
            const check = item.querySelector(['input[type=checkbox]']);
            const label = item.querySelector(['label']);
            const input = item.querySelector(['input[type=text]']);

            if (check.checked) {
                this.servicesNumber[label.textContent] = +input.value;
            }
        });
    },

    // Метод добавляет новый блок с экранами
    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true);
        cloneScreen.querySelector(['input[type=text]']).value = '';

        screens = document.querySelectorAll('.screen');

        screens[screens.length - 1].after(cloneScreen);
    },

    // Метод расчитывает стоимость наших экранов и дополнительных услуг

    addPrices: function () {
        // Цикл считает сумму всех типов экранов
        // for (let screen of appData.screens) {
        //     appData.screenPrice += +screen.price;
        // }

        // Метод reduce считает сумму всех типов экранов
        this.screenPrice = this.screens.reduce((sum, item) => {
            return sum + +item.price; // previousValue/sum состоит из суммы всех item.price
        }, 0);

        // Считаем сумму всех дополнительных услуг с фиксированным значением и не привязанных к %
        for (let key in this.servicesNumber) {
            this.servicePricesNumber += this.servicesNumber[key];
        }

        // Считаем сумму всех дополнительных услуг привязанных к %
        for (let key in this.servicesPercent) {
            this.servicePricesPercent += Math.ceil(this.screenPrice * (this.servicesPercent[key] / 100));
        }

        // Считаем сумму основных экранов + дополнительные услуги с фиксированной ценой + дополнительные услуги привязанные к %
        this.fullPrice = this.screenPrice + this.servicePricesNumber + this.servicePricesPercent;

        // Считаем итоговую стоимость за вычетом процента отката(итоговая стоимость - сумма отката)
        this.servicePercentPrice = this.fullPrice - Math.ceil(this.fullPrice * (this.rollback / 100));

        // Метод reduce считает общее количество всех экранов
        this.screenCount = this.screens.reduce(function (sum, item) {
            return sum + +item.count;
        }, 0);
    },


    // Метод блокирует расчёт
    blockCalculateFunction: function () {
        screens = document.querySelectorAll('.screen');

        handlerBtnStartCalculate.style.display = 'none';
        handlerBtnResetCalculate.style.display = 'block';

        screens.forEach((item) => {
            const select = item.querySelector('select');
            const input = item.querySelector(['input[type=text]']);

            select.disabled = true;
            input.disabled = true;
        });

        otherItemsPercent.forEach((item) => {
            const check = item.querySelector(['input[type=checkbox]']);

            check.disabled = true;
        });

        otherItemsNumber.forEach((item) => {
            const check = item.querySelector(['input[type=checkbox]']);

            check.disabled = true;
        });
    },

    // Метод разблокирует расчёт
    unblockCalculate: function () {
        screens = document.querySelectorAll('.screen');

        handlerBtnStartCalculate.style.display = 'block';
        handlerBtnResetCalculate.style.display = 'none';

        screens.forEach((item) => {
            const select = item.querySelector('select');
            const input = item.querySelector(['input[type=text]']);

            select.disabled = false;
            input.disabled = false;
        });

        otherItemsPercent.forEach((item) => {
            const check = item.querySelector(['input[type=checkbox]']);

            check.disabled = false;
        });

        otherItemsNumber.forEach((item) => {
            const check = item.querySelector(['input[type=checkbox]']);

            check.disabled = false;
        });
    },

    // Метод очищает типы экранов
    clearScreens: function () {
        screens = document.querySelectorAll('.screen');

        screens.forEach(function (screen) {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');

            input.value = '';
            select.selectedIndex = 0;

            for (let i = screens.length - 1; i > 0; i--) {
                screens[i].remove();
            }
        });

        this.screens.length = 0;
    },

    // Метод очищает дополнительные сервисы
    clearServicesFunction: function () {
        otherItemsPercent = document.querySelectorAll('.other-items.percent');
        otherItemsNumber = document.querySelectorAll('.other-items.number');


        otherItemsPercent.forEach((item) => {
            const check = item.querySelector(['input[type=checkbox]']);
            const label = item.querySelector(['label']);
            const input = item.querySelector(['input[type=text]']);

            input.value = '';

            if (check.checked) {
                this.servicesPercent[label.textContent] = +input.value;
            }
            check.checked = false;
        });

        otherItemsNumber.forEach((item) => {
            const check = item.querySelector(['input[type=checkbox]']);
            const label = item.querySelector(['label']);
            const input = item.querySelector(['input[type=text]']);

            input.value = '';

            if (check.checked) {
                this.servicesNumber[label.textContent] = +input.value;
            }
            check.checked = false;
        });
    },

    // Метод очищает результат
    clearResult: function () {
        totalInput.value = 0;
        totalInputCount.value = 0;
        totalInputCountOther.value = 0;
        totalInputFullCount.value = 0;
        totalInputCountRollback.value = 0;
    },

    // Метод возвращает откат к иходной точке
    clearRollback: function () {
        rangeValue.textContent = 15 + '%';
        inputRange.value = 15;
    },

    // Метод сбрасывает расчёт и очищает калькулятор
    resetFunction: function () {
        this.unblockCalculate();
        this.clearScreens();
        this.clearResult();
        this.clearServicesStart();
        this.clearRollback();
    }
};

// * Вызов методов объекта appData
appData.init();




// * Вывод значений в консоль