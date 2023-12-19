'use strict';

const body = document.querySelector('body');
const books = document.querySelector('.books');
const book = document.querySelectorAll('.book');
const book2 = book[0]; // Для удобства создал переменную 2-ой книги
const book5 = book[5]; // Для удобства создал переменную 5-ой книги
const book6 = book[2]; // Для удобства создал переменную 6-ой книги
const bookTitle = document.querySelectorAll('h2 > a');
const listBook5 = book5.querySelectorAll('ul');
const listItemBook2 = book2.querySelectorAll('li');
const listItemBook5 = book5.querySelectorAll('li');
const listItemBook6 = book6.querySelectorAll('li');


// * 1) Восстановить порядок книг.
book[0].style.order = 2; // Книга 2. Область видимости и замыкания
book[1].style.order = 1; // Книга 1. Начните и Совершенствуйтесь
book[2].style.order = 6; // Книга 6. ES6 и не только
book[3].style.order = 4; // Книга 4. Типы и грамматика
book[4].style.order = 3; // Книга 3. this и Прототипы Объектов
book[5].style.order = 5; // Книга 5. Асинхронность и Производительность


// * 2) Заменить картинку заднего фона на другую из папки image
body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';


// * 3) Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
bookTitle[4].textContent = 'Книга 3. this и Прототипы Объектов';


// * 4) Удалить рекламу со страницы
document.querySelector('.adv').remove();


// * 5) Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)

// * Индексы глав Книги 2 для удобства
// listItemBook2[0] Введение
// listItemBook2[1] Предисловие
// listItemBook2[2] Приложение C: Лексический this
// listItemBook2[3] Глава 1: Что такое область видимости?
// listItemBook2[4] Глава 4: Поднятие переменных (Hoisting)
// listItemBook2[5] Глава 5: Замыкание области видимости
// listItemBook2[6] Глава 2: Лексическая область видимости
// listItemBook2[7] Приложение A: Динамическая область видимости
// listItemBook2[8] Глава 3: Область видимости: функции против блоков
// listItemBook2[9] Приложение B: Полифиллинг блочной области видимости
// listItemBook2[10] Приложение D: Благодарности!
listItemBook2[1].after(listItemBook2[3]);
listItemBook2[3].after(listItemBook2[6]);
listItemBook2[10].before(listItemBook2[2]);
listItemBook2[6].insertAdjacentElement('afterend', listItemBook2[8]);


// * Индексы глав Книги 5 для удобства
// listItemBook5[0] Введение
// listItemBook5[1] Предисловие
// listItemBook5[2] Глава 4: Генераторы
// listItemBook5[3] Глава 2: Колбеки
// listItemBook5[4] Глава 3: Обещания
// listItemBook5[5] Приложение A: Библиотека: asynquence
// listItemBook5[6] Глава 5: Производительность программы
// listItemBook5[7] Глава 6: Бенчмаркинг и настройка
// listItemBook5[8] Приложение B: Расширенные асинхронные шаблоны
// listItemBook5[9] Глава 1: Асинхронность: Сейчас и Тогда
// listItemBook5[10] Приложение C: Благодарности!
// listBook5.prepend(listItemBook5[0]);
listItemBook5[1].after(listItemBook5[9]);
listItemBook5[4].after(listItemBook5[2]);
listItemBook5[8].before(listItemBook5[5]);


// * Вариант сортировки через append
// book5.querySelector('ul').append(listItemBook5[0]);
// book5.querySelector('ul').append(listItemBook5[1]);
// book5.querySelector('ul').append(listItemBook5[9]);
// book5.querySelector('ul').append(listItemBook5[3]);
// book5.querySelector('ul').append(listItemBook5[4]);
// book5.querySelector('ul').append(listItemBook5[2]);
// book5.querySelector('ul').append(listItemBook5[6]);
// book5.querySelector('ul').append(listItemBook5[7]);
// book5.querySelector('ul').append(listItemBook5[5]);
// book5.querySelector('ul').append(listItemBook5[8]);
// book5.querySelector('ul').append(listItemBook5[10]);


// * 6) В шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
let newChapter8 = document.createElement('li');
newChapter8.textContent = 'Глава 8: За пределами ES6';

listItemBook6[8].after(newChapter8);