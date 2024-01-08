'use strict';

// * Браузерный API DOM - Application Programming Interface + Document Object Model
// API это маленькая программа, которая с поомщью набора, методов и свойств сотрудничает с нашим интерпретатором и она вшита в движок JS. Сздаёт полный слепок нашей вёрстки и помещает его в объект, каждый элемент, каждый тег и заворачивает в древевидную структуру. Далее вся структура становится нам доступна через один глобальный объект под названием Document.

console.log(document);

// Дерево состоит из веток и узлов (комментарии тоже относятся к узлам)
// * Узлы бывают двух типов:
//   1. Просто узлы - всё что не представлено в HTML, а находятся только внутри объекта
//   2. Узлы элементы - к этим узлам можно отнести все теги нашего Document

console.dir(document);

// * Список всех узлов находящихся внутри объекта Document
console.dir(document.childNodes);

// * Пустая сторка, комментрий или просто символ переноса определяется API DOM как узел/node text
console.dir(document.body);




// * I. Методы получения элементов

// * getElementById - получение элемента по ID
// Внутрь нужно сторкой '' передать идентификатор/id, к которому мы хотим обратиться
const title_1 = document.getElementById('title');

console.log(title_1);
console.dir(title_1); // Посмотреть свойства объекта

// * textContent - свойство объекта
console.dir(title_1.textContent);

// * style - здесь представлен список всех инлайновых стилей
console.dir(title_1.style);


title_1.textContent = 'Title New - 01'; // Меняем свойство textContent, но в вёрстке он остаётся прежний
title_1.style.backgroundColor = 'DodgerBlue';
console.dir(title_1);



// * getElementsByTagName - получние элемента по TAG в виде МАССИВА
// ! Сейчас не используются
const listItems = document.getElementsByTagName('li');
console.log(listItems); // ! Получаем HTMLCollection - это псевдомассив

console.log(listItems[0]); // Можем обратиться по индексу, если мы хотим обратиться к конкретному элементу из псевдомассива

// * Либо можем сделать это через цикл, чтобы при переборе каждую итерацию получать каждый элемент
for (let key of listItems) {
    console.log(key);
}


// * getElementsByClassName - получение элемента по CLASS в виде МАССИВА
// ! Сейчас не используются
const links_1 = document.getElementsByClassName('header__link');
console.log(links_1); // ! Получаем HTMLCollection - это псевдомассив

console.log(links_1[0]); // Можем обратиться по индексу, если мы хотим обратиться к конкретному элементу из псевдомассива

// * Либо можем сделать это через цикл, чтобы при переборе каждую итерацию получать каждый элемент
for (let key of links_1) {
    console.log(key);
}




// * querySelector - получает один селектор/элемент как мы обращаемся во вложенности в CSS
// id - #idName
// tag - h1
// class - .className
// atribut - title="Title-01"
// 'header > ul' - можно обращаться через родителя
// * Нельзя обращаться к псевдоэлеменам, так как они создаются в CSS
const title_2 = document.querySelector('#title');
console.log(title_2);

const title_3 = document.querySelector('h1');
console.log(title_3);

const title_4 = document.querySelector('.about__title');
console.log(title_4);

const title_5 = document.querySelector('[title="Title-01"]');
console.log(title_5);

const links_2 = document.querySelector('header > ul'); // Можно обращаться через родителя
console.log(links_2);




// * querySelectorAll - получает коллекцию/NodeList/список узлов селекторов/элементов
// id - #idName
// tag - h1
// class - .className
// atribut - title="Title-01"
// 'header > ul' - можно обращаться через родителя
// * Нельзя обращаться к псевдоэлеменам, так как они создаются в CSS
const links_3 = document.querySelectorAll('.header__link');
console.log(links_3); // ! Получаем NodeList



// ! * HTMLCollection и NodeList - немного забегаем вперёд и узнаем, что разница между ними колоссальная
// * HTMLCollection - это живая HTML коллекция элементов с орпделеённым классом, названием тега и т.д.
// Допустим мы создали переменную links куда собрали все элементы с классом link, далее в другом месте создали ещё один дополнительный элемент с классом link и поместили этот новый дополнительный элемент на страницу, то данный элемент сразу же подтянется в переменную links.

// * NodeList - статический массив каких-то элементов
// document.querySelectorAll() один раз пробегается по странице, собирает всё необходимое, что попадается под запрос, кладёт это в переменную и забывает о том, что на странице могут появиться новые элементы с подобным селектором

// * querySelector и querySelectorAll более современные собратья getElementsByTagName, getElementsByClassName
// Язык JS развивается в сторону полной структуризации кода и полного контроля данными, которыми мы оперируем. Именно поэтому содержать в коде переменные, которые могут резко изменить своё значение, количество и т.д., не очень хорошо и совсем неправильно.

// * В современном JS используется только 3 метода:
// 1 - querySelector - находит необходимый элемент и возвращает первый в вёрстке, что стоит выше всех
// 2 - querySelectorAll - находит все необходимые элементы и возвращает их данные
// 3 - getElementById - находит необходимый элемент, возвращает его и останавливает поиск
const links_4_1 = document.querySelector('.header__link');
console.log(links_4_1);

const links_4_2 = document.querySelectorAll('.header__link');
console.log(links_4_2);

const links_4_3 = document.querySelectorAll('#link');
console.log(links_4_3);

// querySelector и querySelectorAll открывает доступ к большему количеству методов
links_4_2.forEach(function (item) {
    console.log(item);
});

// querySelector и querySelectorAll могут искать не только в Document, но и в уже полученных элементах
const list_5 = document.querySelector('header > ul');
const listItem_5 = list_5.querySelectorAll('li');

console.log(list_5);
console.log(listItem_5);




// * II. Практика - некоторые самые важные методы
console.log('Практика начинается тут.');

// * II. 1) Работа с классами. Данные четыре метода являются самыми используемыми для работы с classList
console.log('Работа с классами. Метод classList.');
const title_6 = document.getElementById('title');

console.log(title_6);
console.dir(title_6);

// * classList.add - добавляет класс
title_6.classList.add('main-title');
title_6.classList.add('title-test');
console.log(title_6);

// * classList.remove - удаляет класс
title_6.classList.remove('title-test');
console.log(title_6);

// * classList.toggle - работает как включатель/выключтель
// Проверяет если в данном элементе указанный класс. Если класс есть, то он удаляется и наоборот
title_6.classList.toggle('title-toggle'); // Класс появляется, так как ранее его не было
title_6.classList.toggle('title-toggle'); // Класс исчезает, так как ранее мы его добавили методом toggle


// * classList.contains - данный метод возвращает true или false
title_6.classList.contains('title-toggle');
console.log(title_6.classList.contains('title-toggle')); // Вернёт false, так как мы ранее удалили класс
console.log(title_6.classList.contains('about__title')); // Вернёт true, так как этот класс есть




// * II. 2) Работа с атрибутами
console.log('Работа с атрибутами.');
console.dir(title_6);

// * getAttribute - получаем значение необходимого атрибута
console.log(title_6.getAttribute('title'));
console.log(title_6.getAttribute('id'));
console.log(title_6.getAttribute('style'));

// * setAttribute - можем переопределить значение атрибута, id
title_6.setAttribute('title', 'Title-01-NEW'); // ('название атрибута', 'новое значение')
console.log(title_6.getAttribute('title')); // Покажет новое значение 'Title-01-NEW'

title_6.setAttribute('id', 'title-new-id'); // Можем менять значение id
console.log(title_6); // Увидим новое значение id = title-new-id

// * hasAttribute - можем проверить наличие определённого атрибута в элементе, возвращает true или false
console.log(title_6.hasAttribute('style')); // Вернёт true
console.log(title_6.hasAttribute('styleNew')); // Вернёт false



// * II. 3) Работа со стилями
console.log('Работа со стилями. Метод style.');

// * style - обращаемся через свойство style к узлу элемента, далее обращаемся к его свойству и придаём/меняем значение в ''.
// Данные стили сразу появляются в виде инлайнстилей элемента, а это значит, что эти стили стандут более приоритетными
title_6.style.padding = '15px';
title_6.style.borderRadius = '15px';
title_6.style.textTransform = 'uppercase';
title_6.style.textAlign = 'center';

// * getComputedStyle - показывает стили необходимого элемента
// Данные свойства, полученные через эту функцию никак нельзя изменить, можем только прочитать и проверить
console.log(getComputedStyle(title_6));
console.dir(getComputedStyle(title_6).backgroundColor); // Читаем и проверяем определённое свойство
console.dir(getComputedStyle(title_6).fontSize); // Читаем и проверяем определённое свойство