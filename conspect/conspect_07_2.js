'use strict';

// * Методы работы с Массивами
// Чаще всего сервер будет присылать на front информацию в виде Массивов (объектов, строк, чисел и т.д.) и правильная работа с Массивами очень важна


// * Пример с книгами
// const games = [
//     { id: 0, name: 'Дорог домой', author: 'Виталий З.', price: '1200' },
//     { id: 0, name: 'Война за выживание', author: 'Виталий З.', price: '1500' },
//     { id: 0, name: 'Мир бесчисленных островов', author: 'Виталий З.', price: '1300' },
//     { id: 0, name: 'Далекая страна', author: 'Алекс Кош', price: '950' },
//     { id: 0, name: 'Адреналин', author: 'Алекс Кош', price: '1650' }
// ];

// * Пример с играми
const games = [
    { id: 0, name: 'Dark Souls', author: 'Hidetaka Miyazaki', price: '1200' },
    { id: 1, name: 'Elden Ring', author: 'Hidetaka Miyazaki', price: '1500' },
    { id: 2, name: 'Sekiro', author: 'Hidetaka Miyazaki', price: '1300' },
    { id: 3, name: 'Bloodborne', author: 'PS.', price: '950' },
    { id: 4, name: 'Demons Souls', author: 'PS', price: '1650' }
];

// * I. ДОБАВЛЕНИЕ и УДАЛЕНИЕ элементов в Массиве
// * 1) CONCAT - arr.concat(arg_1, arg_2, arg_3 ...)
// Возвращает новый Массив, который будет состоять из элементов исходного Массива и новых добавленных элементов
const newArr_1 = games.concat({ id: 5, name: 'Shadow Tower', author: 'From Software', price: '1980' });

console.log('Метод CONCAT', newArr_1);


// * 2) SLICE - arr.slice({[start], [end]})
// Возвращает новый Массив в который копирует элемент исходного Массива начиная с индекса [start] и заканчивая [end] НЕ ВКЛЮЧАЯ значение [end]
const newArr_2 = games.slice([2], [4]);

console.log('Метод SLICE', newArr_2);

// * 3) SPLICE - arr.splice(index, deleteCount, elements)
//      index - индекс удаляемого элемента
//      deleteCount - количество удаляемых элементов начиная с index указанного выше
//      elements - указываем те элементы, которые мы будем добавлять
// Часто называют универсальным ножиком, он умеет как удалять, так и добавлять новые элементы, но всё-равно работает немного иначе. Он не возвращает нам новый Массив, он ИЗМЕНЯЕТ исходный Массив.
games.splice(2, 3); // Мы меняем исходный Массив, что не всегда хорошо, но иногда необходимо
console.log('Метод SPLICE без добавления элемента', games);

games.splice(2, 3, { id: 5, name: 'Shadow Tower', author: 'From Software', price: '1980' }); // Можем добавлять несколько элементов
console.log('Метод SPLICE с добавлением элемента', games);



// * II. ПОИСК элементов в Массиве
// Когда необходимо определить существует какой-нибудь элемент внутри Массива, найти его индекс, получить булевое значение в зависимости находится элемент в масиве или нет. Перебирает нужный нам Массив в поисках необходимого нам элемента. Возвращает весь элемент

// * 1) FIND - let result = arr.find(function(item, index, array)) {
//       если true - возвращается текущий элемент и перебор прерывается
//       если false - возвращает undefined
// )};
//       item - каждый очередной элемент при итерации
//       index - каждый очередной индекс этого элемента
//       array - весь перебираемый Массив

// Сама функция представляет собой цикл, который будет проходить по Массиву и искать соотетствие некому условию
const result_1_1 = games.find(function (item, index, array) {
    return item.name === 'Dark Souls'; // Условие
});

const result_1_2 = games.find(function (item, index, array) {
    return item.id === 0; // Условие
});

const result_1_3 = games.find(function (item, index, array) {
    return item.author === 'Hidetaka Miyazaki'; // Условие
});

console.log('Метод FIND, поиск name', result_1_1);
console.log('Метод FIND, поиск id', result_1_2);
console.log('Метод FIND, поиск aurhor', result_1_3);

// * 2) FIND INDEX
// Возвращает только индекс
const result_2_1 = games.findIndex(function (item, index, array) {
    return item.id === 5; // Условие
});

console.log('Метод FIND INDEX, поиск id', result_2_1);

games.splice(result_2_1, 5);
console.log('Метод FIND INDEX, поиск и удаление id', games);

// * III. ПЕРЕБОР и ПРЕОБРАЗОВАНИЕ Массива
games = [
    { id: 0, name: 'Dark Souls', author: 'Hidetaka Miyazaki', price: '1200' },
    { id: 1, name: 'Elden Ring', author: 'Hidetaka Miyazaki', price: '1500' },
    { id: 2, name: 'Sekiro', author: 'Hidetaka Miyazaki', price: '1300' },
    { id: 3, name: 'Bloodborne', author: 'PS.', price: '950' },
    { id: 4, name: 'Demons Souls', author: 'PS', price: '1650' }
];
// Часто с сервера данные приходят не в том виде который нам необходим. В JS есть удобные методы, чтобы привести эти данные в удобный нам вид

// * 1) FOR EACH - стандартный метод перебор Массива. Он перебирает весь массив и для каждого элемента Массива по очереди вызывает callback функцию. ИЗМЕНЯЕТ
// arr.forEach(function(item, index, array) {
//      ... что-то делает с item ...
// })
games.forEach(function (item) {
    item.price = item.price + ' руб.';
});

console.log(games);


// * 2) MAP - в отличи от FOR EACH при переборе СОЗДАЁТ новый Массив меняет на каждой итерации наши элементы как значительно, так и не очень
// let result = arr.map(function(item, index, array) {
//      возвращает новое значение вместо элемента
// })
const games_3_2_1 = [
    { id: 0, name: 'Dark Souls', author: 'Hidetaka Miyazaki', price: '1200' },
    { id: 1, name: 'Elden Ring', author: 'Hidetaka Miyazaki', price: '1500' },
    { id: 2, name: 'Sekiro', author: 'Hidetaka Miyazaki', price: '1300' },
    { id: 3, name: 'Bloodborne', author: 'PS.', price: '950' },
    { id: 4, name: 'Demons Souls', author: 'PS', price: '1650' }
];

// Данная запись говорит о том, что метод map на каждой иттерации применяет к каждому элементу функцию, которая возвращает этот элемент БЕЗ ИЗМЕНЕНИЙ
const newArr_3_2_1 = games_3_2_1.map(function (item) {
    return item;
});

console.log(newArr_3_2_1);
console.log('Вывод в консоль games_3_2_1 до изменений', games_3_2_1);

// Данная запись говорит о том, что метод map на каждой иттерации применяет к каждому элементу функцию, которая возвращает этот элемент С ИЗМЕНЕНИЯМИ
const games_3_2_2 = [
    { id: 0, name: 'Dark Souls', author: 'Hidetaka Miyazaki', price: '1200' },
    { id: 1, name: 'Elden Ring', author: 'Hidetaka Miyazaki', price: '1500' },
    { id: 2, name: 'Sekiro', author: 'Hidetaka Miyazaki', price: '1300' },
    { id: 3, name: 'Bloodborne', author: 'PS.', price: '950' },
    { id: 4, name: 'Demons Souls', author: 'PS', price: '1650' }
];

const newArr_3_2_2 = games_3_2_2.map(function (item) {
    item.price = item.price + 'руб.';
    return item;
    // return {}; // Может возвращать абсолютно любую сущность вместо элемента, будт это пустой строкой {}
});

console.log(newArr_3_2_2);
console.log('Вывод в консоль games_3_2_2 после изменений', games_3_2_2);

// Создаём новый объект newArr_3_2_3 на основе старого у которого есть только id и name
const games_3_2_3 = [
    { id: 0, name: 'Dark Souls', author: 'Hidetaka Miyazaki', price: '1200' },
    { id: 1, name: 'Elden Ring', author: 'Hidetaka Miyazaki', price: '1500' },
    { id: 2, name: 'Sekiro', author: 'Hidetaka Miyazaki', price: '1300' },
    { id: 3, name: 'Bloodborne', author: 'PS.', price: '950' },
    { id: 4, name: 'Demons Souls', author: 'PS', price: '1650' }
];

const newArr_3_2_3 = games_3_2_3.map(function (item) {
    const newObj = {
        id: item.id,
        name: item.name
    };
    return newObj;
});
console.log('Вывод в консоль games_3_2_3', games_3_2_3);
console.log(newArr_3_2_3);


// * 3) FILTER
// Метод filter как и метод map создаёт новый массив, но копирует внутрь элементы, которые пройдут через проверку/усдлвие, которое мы пропишем

// let result = arr.filter(function(){
//      true - элемент добавляется к результату и перебор продолжается
//      false - возвращает пустой Массив в случае если ничего не найдено
// })

const games_3_3_1 = [
    { id: 0, name: 'Dark Souls', author: 'Hidetaka Miyazaki', price: '1200' },
    { id: 1, name: 'Elden Ring', author: 'Hidetaka Miyazaki', price: '1500' },
    { id: 2, name: 'Sekiro', author: 'Hidetaka Miyazaki', price: '1300' },
    { id: 3, name: 'Bloodborne', author: 'PS.', price: '950' },
    { id: 4, name: 'Demons Souls', author: 'PS', price: '1650' }
];

// Создаём новый объект newArr_3_3_1 на основе старого так, чтобы в новый объект попали тольо те элементы, которые соответствуют author === 'Hidetaka Miyazaki'
const newArr_3_3_1 = games_3_3_1.filter(function (item) {
    return item.author === 'Hidetaka Miyazaki';
});

console.log('Вывод в консоль games_3_3_1', games_3_3_1);
console.log(newArr_3_3_1);



// * IV. Последовтельная обработка
// Давайте представим задачу, что в шапке нашей страницы нам необходимо выводить в price страницы цену всех товаров и для этого нам необходимо пробежать по всему массиву, взять price каждого элемента и сложить его в один какой-то контейнер и после отрисовать этот контейнер

// * 1) REDUCE - принимает аргументом callback функцию и некое число, с которого начнутся все расчёты
// let value = arr.reduce(function(previousValue, item, index, array){
//     ...
// }, [initial])

// * previousValue - это некий контейнер, в который будет складываться наша сумма

const games_4_1_1 = [
    { id: 0, name: 'Dark Souls', author: 'Hidetaka Miyazaki', price: 1200 },
    { id: 1, name: 'Elden Ring', author: 'Hidetaka Miyazaki', price: 1500 },
    { id: 2, name: 'Sekiro', author: 'Hidetaka Miyazaki', price: 1300 },
    { id: 3, name: 'Bloodborne', author: 'PS.', price: 950 },
    { id: 4, name: 'Demons Souls', author: 'PS', price: 1650 }
];

const result_4_1_1 = games_4_1_1.reduce(function (sum, item) {
    return sum + item.price; // previousValue/sum состоит из суммы всех item.price
}, 0); // 0 - это число, с которого начинается функция суммирования. Если нужно умнажать, указываем 1

console.log(result_4_1_1);


// * 2) REDUCE RIGHT - работает как REDUCE, но только справа налево. Имеет значение при умножении
const result_4_2_1 = games_4_1_1.reduceRight(function (sum, item) {
    return sum + item.price;
}, 0);

console.log(result_4_2_1);