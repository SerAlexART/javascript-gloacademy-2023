'use strict';

// * 2) Объекьт Date
// Это объект со множеством своих методов. Создаётся через конструктор new
console.log('1) Объекьт Date');

let date = new Date;

console.log(typeof date);
console.log(date);
console.dir(date);

// 1) Start Code
console.log(`____________________________________________________________________________________

`);


// * 2-1) Задаём свои дату и время
// Внутрь этого метода нужно передать два аргумента:
//   1 - callback функция, которая и будет отробатывать через определённоё время
//   2 - количество ms, через которое сработаёт callback функция
console.log(' 2-1) Задаём свои дату и время');

// Можно передавать аргументы в виде строки и порядок неважен
let date_1 = new Date('2 february 2024 02:02:02');
console.log(date_1);

// * Передаём аргументы и их порядок
// год
// месяц - месяца в конструкторе являются массиво, поэтому порядок начинается с 0
// число месяца
// часы
// минуты
// секунды
// милисекунды
// Можем передавать пустые строки через ''
let date_2 = new Date(2024, 4, 22, 1, 30, 22, 555);
console.log(date_2);



// * 2-2) Методы получения данных из объекта
console.log('\n \n 2-2) Методы получения данных из объекта');

console.log('Год ' + date_2.getFullYear());
console.log('Месяц ' + (date_2.getMonth() + 1));
console.log('Число месяца ' + date_2.getDate());
console.log('Число недели ' + date_2.getDay());

console.log('Часы ' + date_2.getHours());
console.log('Минуты ' + date_2.getMinutes());
console.log('Секунды ' + date_2.getSeconds());
console.log('Милисекунды ' + date_2.getMilliseconds());




// * 2-3) Получение времени по Гринвичу(без учёта часового пояса)
console.log('\n \n 2-3) Получение времени по Гринвичу(без учёта часового пояса)');
// После каждого метода get нужно добавить UTC

console.log('Год ' + date_2.getUTCFullYear());
console.log('Месяц ' + (date_2.getUTCMonth() + 1));
console.log('Число месяца ' + date_2.getUTCDate());
console.log('Число недели ' + date_2.getUTCDay());

console.log('Часы ' + date_2.getUTCHours());
console.log('Минуты ' + date_2.getUTCMinutes());
console.log('Секунды ' + date_2.getUTCSeconds());
console.log('Милисекунды ' + date_2.getUTCMilliseconds());




// * 2-4) Методы для указания времени
// Мы можем указать любой из параметров кроме дня недели getDay
console.log('\n \n 2-4) Методы для указания времени');

let date_4 = new Date();

// * setFullYear
// год
// месяц - месяца в конструкторе являются массиво, поэтому порядок начинается с 0
// день
date_4.setFullYear(2024, 4, 22);
console.log(date_4);


// * setFullYear
// индекс месяц - месяца в конструкторе являются массиво, поэтому порядок начинается с 0
// число месяца - день
date_4.setMonth(1, 2);
console.log(date_4);


// * setDate
// число месяца - день
date_4.setDate(22);
console.log(date_4);


// * setHours
// часы
// минуты
// секунды
// милисекунды
date_4.setHours(2, 2, 2, 200);
console.log(date_4);

// * setMinutes
// минуты
// секунды
// милисекунды
date_4.setMinutes(5, 5, 500);
console.log(date_4);


// * setSeconds
// секунды
// милисекунды
date_4.setSeconds(2, 200);
console.log(date_4);

// * setMilliseconds
// милисекунды
date_4.setMilliseconds(500);
console.log(date_4);




// * 2-5) Пересчёт даты
console.log('\n \n 2-5) Пересчёт даты');

let date_5 = new Date();
date_5.setDate(22);
console.log(date_5);

// Что будет, если передать число больше, чем дней в месяце? Метод setDate пересчитывает
date_5.setDate(222);
console.log(date_5);

// Например мы можем передать сегодняшний день + 100 дней
date_5.setDate(date.getDate() + 100);
console.log(date_5);

// Работает и с другими методами
date_5.setFullYear(2024, 50, 20);
console.log(date_5);




// * 2-6) getTime и times tamp - получение в милисекундах
// Объект Date хранит всё время в милисекундах. Число которое мы получаем называется times tamp
// Все данные которые мы получаем через getFullYear, getMonth и т.д. высчитываются из этих милисекунд
console.log('\n \n 2-6) getTime и times tamp - получение в милисекундах');

// 01.01.1970 00:00:00:00 - дата по умолчанию
let date_6 = new Date();

// Получим количество милисекунд, которое прошло с даты (в примере с даты по умолчанию)
console.log(date_6.getTime());


// Что будет, если мы зададим дату меньше, чем дата по умолчанию? Получим отрицательное число
date_6.setFullYear(1950);
console.log(date_6.getTime());

// От 0 мы сможем высчитать сколько прошло времени, просто в date передаём 0 и получим начальную точку(дату по умолчанию)
date_6 = new Date(0);
date_6.setFullYear(1950);
console.log(date_6.getTime());

// Если в new Date() передать одно значение, допустим 55555555555, то это воспринимается как милисекунды
date_6 = new Date(55555555555);
console.log(date_6);




// * 2-7) toDateString() и toTimeString() + Locale версии
// Данные методы выводят время и дату в виде строки, но уже по отдельности
console.log('\n \n 2-7) toDateString() и toTimeString() + Locale версии');

let date_7 = new Date(55555555555);

console.log(date_7);
console.log(date_7.toDateString());
console.log(date_7.toTimeString());

// У этих методов ещё есть вариант local, который выводит данные с учётом локализации
console.log(date_7.toLocaleDateString());
console.log(date_7.toLocaleTimeString());

// Берётся лоализация по умолчанию установленная в системе, но мы можем её указать
console.log(date_7.toLocaleDateString('en'));
console.log(date_7.toLocaleTimeString('en'));




// * 2-8) toISOString() - формат ISO
// Часто работают PHP и его фрейсворки
console.log('\n \n 2-8) toISOString() - формат ISO');

let date_8 = new Date(55555555555);
console.log(date_8);
console.log(date_8.toISOString());

// * Метод substring - мы можем взять допустим первые 10 символов
console.log(date_8.toISOString('en').substring(0, 10));




// * 2-9) Date.now()
// Возвращает количество милисекунд которое прошло с даты по умолчанию
console.log('\n \n 2-9) Date.now()');

console.log(Date.now());




// * 2-10) Date.pase()
// Возвращает количество милисекунд которое прошло с даты по умолчанию до указанной даты
console.log('\n \n 2-10) Date.pase()');

console.log(Date.parse('22 may 2024'));