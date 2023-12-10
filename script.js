'use strict';

// Объявление переменных
// const rollback = 15;

// let title;
// let screens;
// let screenPrice;
// let adaptiv;
// let service1;
// let service2;
// let allServicePrices;
// let fullPrice;
// let getTitle;
// let servicePercentPrice;

// Функция проверки типа
// const showTypeOf = function (variable) {
//     console.log(variable, typeof variable);
// };


// Объект appData
const appData = {
    // Переносим все переменные в объект и каждому свойству должны задать изначальное значение !!!
    title: '',
    screens: '',
    screenPrice: 0,
    adaptiv: true,
    rollback: 15,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    service1: '',
    service2: '',

    // Превращаем функцию asking в метод объекта appData и обращение к бывшим переменным через объект, например было title, а стало appData.title
    // Метод с вопросами о проекте
    asking: function () {
        appData.title = prompt('Как называется ваш проект?', 'Задание 7.');
        appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные').toLocaleLowerCase().split(', ');

        do {
            appData.screenPrice = +prompt('Сколько будет стоить данная работа?', '12000');
        } while (!appData.isNumber(appData.screenPrice));

        appData.adaptiv = confirm('Нужен ли адаптив на сайте?');
    },

    // 2) Создать в объекте метод start и перенести в него вызов метода asking и переопределение свойств. Вне самого объекта запускаем только метод start который в нужном порядке выполнит все действия.
    start: function (getAsking) {
        return getAsking = appData.asking();
    },

    // Превращаем функцию isNumber в метод объекта appData
    //  Чуть ли не лучшая проверка в JS на число
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },

    // Превращаем функцию getAllServicePrices в метод объекта appData
    // Метод возвращает сумму всех дополнительных услуг с проверкой, что введённые данные являются числом, которые мы получаем на вопрос "Сколько это будет стоить"
    getAllServicePrices: function () {
        const message = 'Сколько это будет стоить?';

        let sum = 0;
        let price = 0;

        for (let i = 0; i < 2; i++) {
            do {
                if (i === 0) {
                    appData.service1 = prompt('Какой дополнительный тип услуги нужен?', 'Вёрстка модального окна');
                    price = 222;

                    do {
                        sum = +prompt(message, price);
                    } while (!appData.isNumber(sum));

                } else if (i === 1) {
                    appData.service2 = prompt('Какой дополнительный тип услуги нужен?', 'Написание скриптов для модального окна');
                    price = 555;

                    do {
                        sum = +prompt(message, price);
                    } while (!appData.isNumber(sum));
                }

            } while (!appData.isNumber(sum));
        }

        return sum;
    },

    // Превращаем функцию getFullPrice в метод объекта appData
    // Метод возвращает сумму стоимости верстки и стоимости дополнительных услуг
    getFullPrice: function () {
        return appData.screenPrice + appData.allServicePrices;
    },

    // Превращаем функцию getServicePercentPrices в метод объекта appData
    // Метод возвращает итоговую стоимость за вычетом процента отката(итоговая стоимость - сумма отката)
    getServicePercentPrices: function () {
        return appData.fullPrice - Math.ceil(appData.fullPrice * (appData.rollback / 100));
    },

    // Превращаем функцию getTitle в метод объекта appData
    // Метод возвращает title меняя его таким образом: первый символ с большой буквы, остальные с маленькой". Учесть вариант что строка может начинаться с пустых символов.
    getTitle: function () {
        return appData.title.trim()[0].toUpperCase() + appData.title.trim().substring(1).toLocaleLowerCase();
    },

    // Превращаем функцию getRollbackMessage в метод объекта appData
    // Метод возвращает итоговое значение скидки, если она предусмотрена
    getRollbackMessage: function () {
        if (appData.fullPrice >= 30000) {
            return 'Даем скидку в 10%.';
        } else if (appData.fullPrice >= 15000 && appData.fullPrice < 30000) {
            return 'Даем скидку в 5%.';
        } else if (appData.fullPrice > 0 && appData.fullPrice < 15000) {
            return 'Скидка не предусмотрена.';
        } else {
            return 'Что то пошло не так.';
        }
    }
};




// Вызов методов объекта appData
appData.start();
appData.title = appData.getTitle();
appData.allServicePrices = appData.getAllServicePrices();
appData.fullPrice = appData.getFullPrice();
appData.servicePercentPrice = appData.getServicePercentPrices();



// Вывод значений в консоль
console.log('Итоговая стоимость будет равна ' + appData.fullPrice + ', а с учётом вычета отката будет равна ' + appData.servicePercentPrice);


// showTypeOf('Название проекта ' + '"' + title + '".');
// showTypeOf('Типы экранов, которые нужно разработать: ' + screens + '.');
// showTypeOf('Данная работа будет стоить ' + screenPrice + 'р.');
// showTypeOf(getRollbackMessage());
// adaptiv == true ? showTypeOf('Адаптив нужен.') : showTypeOf('Адаптив не нужен.');
// showTypeOf('Итоговая стоимость будет равна ' + fullPrice + 'р.');
// showTypeOf('Итоговая стоимость с учётом вычета отката будет равна ' + servicePercentPrice + 'р.');