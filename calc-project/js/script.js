'use strict';

// * Объявление переменных

// 1) Получить заголовок "Калькулятор верстки" через метод getElementsByTagName. (тэг h1, получить именно элемент, а не коллекцию)
const title = document.getElementsByTagName('h1')[0];

// 2) Получить кнопки "Рассчитать" и "Сброс" через метод getElementsByClassName. (класс handler_btn)
const handlerBtnStartCalculate = document.getElementsByClassName('handler_btn')[0];

const handlerBtnResetCalculate = document.getElementsByClassName('handler_btn')[1];
// 3) Получить кнопку "+" под выпадающим списком через метод querySelector. (класс screen-btn)
const screenBtnPlus = document.querySelector('.screen-btn');

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
        handlerBtnStartCalculate.addEventListener('click', appData.start);
        screenBtnPlus.addEventListener('click', appData.addScreenBlock);
        inputRange.addEventListener('input', appData.changeRollback);
        appData.showRollback();
        appData.addScreens();
    },

    addTitle: function () {
        document.title = title.textContent;
    },

    // Метод start запускает вызов функций
    start: function () {
        // alert('Рассчёт запущен!');
        appData.addServices();
        appData.addScreens();
        appData.addPrices();

        console.log(appData);


        appData.showResult();
        // appData.logger();
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


        // console.log('Показать результат');
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

            for (let i = 0; i < screens.length; i++) {
                console.log('Цикл');

                if (select.textContent === 'Тип экранов' || +input.value === 0) {
                    appData.isError = true;
                    console.log('Выберите тип и введите количество');
                } else {
                    appData.isError = false;

                    appData.screens.push({
                        id: index,
                        name: selectName,
                        price: +select.value * +input.value,
                        count: +input.value
                    });

                    console.log('Расчёт разрешён');
                }
            }
        });

        console.log(screens.length);
        console.log(this.isError);

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
    },

    // 3) Метод logger выводит в консоль необходимую информациюи запускается в самом конце метода start (после того как все расчеты уже были произведены)
    logger: function () {
        console.log('Название проекта ' + '"' + appData.title + '".');

        if (appData.adaptiv == true) {
            console.log('Адаптив нужен.');
        } else { console.log('Адаптив не нужен.'); }

        console.log('Откат равен ' + appData.rollback + '%.');
        console.log('Итоговая стоимость дополнительных услуг будет равна ' + appData.allServicePrices + 'р.');
        console.log('Итоговая стоимость будет равна ' + appData.fullPrice + 'р.');
        console.log('Итоговая стоимость с учётом вычета отката будет равна ' + appData.servicePercentPrice + 'р.');
        console.log(appData.screens);
    }

};

// * Вызов методов объекта appData
appData.init();


// * Вывод значений в консоль
