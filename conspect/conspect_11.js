'use strict';

// * События в JS - чуть ли не самая важная тема
// На языке JS чаще всего пишется UI. DOM предоставляет целый список абсолютно разнообразных событий и целый ряд методов для их обработки.

// Обработка событий происходит с помощью функций. Мы пишем функцию, а после просим браузер отработать данную функцию при условии какого-то события.

// JS может перехватывать действие пользователя и реагировать на данное действие вызовом определённой функци.

// Действие пользователя это клик по кнопке, наведение курсора на блок или местро на странице, сужение или расширение экрана, клик по ссылке, ввод в инпут и т.д. и т.д.

// * onclick как атрибут - устаревший способ, см. HTML 16-ая строка
// ! Не очень хорошо писать код JS внутри HTML


// * Кждое событие это свойство элемента и мы можем его заполнить определённой функцией



// * 1) ONCKLICK - событие возникает при щелчке левой кнопкой мышки
const btn_01 = document.querySelector('#btn_01');

btn_01.onclick = function () {
    alert('Произошёл клик по кнопке!');
};

console.dir(btn_01); // Увидим что свойство onclick является функция, которую мы добавили


// Попробуем повесить событие не на кнопку, а на другой элемент + вынесим событие в функцию
const square_01 = document.querySelector('#square_01');
const logger_01_1 = function () {
    alert('Ты нажал на куб!');
    console.log('Ты нажал на куб!'); // Сколько раз мы кликнем, столько раз и отработает функция
};

square_01.onclick = logger_01_1;

console.dir(square_01); // Увидим что свойство onclick является функция, которую мы добавили, даже с учётом того, что сама функция вынесена отдельно


// * Если перейти во вкладку Elements > Event Listeners, то мы увидим список всех возможных обработчиков событий выбранного элемента


// * Что будет, если на один и тот же элемент повесить два одинаковых обработчика события?
const logger_01_2 = function () {
    alert('Ты нажал на куб, снова!');
    console.log('Ты нажал на куб, снова!'); // Сколько раз мы кликнем, столько раз и отработает функция
};

square_01.onclick = logger_01_2; // Мы увидим последнее событие, так как мтарое значение просто затёрлось, перезаписываем старое значение + в вкладке Event Listeners будет лишь один onclick
// ! Все свойства oncklick, onchange, onload это свойства объекта и в них может храниться лишь одна функция/значние


// * НО! Есть способ как запустить сразу два события
const square_02 = document.querySelector('#square_02');
const logger_02_1 = function () {
    alert('Ты нажал на куб!');
    console.log('Ты нажал на куб!');
};
const logger_02_2 = function () {
    alert('Ты нажал на куб, снова!');
    console.log('Ты нажал на куб, снова!');
};

// Мы можем передать в значение свойства onclick анонимную функцию, которая и будет вызывать две другие
square_02.onclick = function () {
    logger_02_1();
    logger_02_2();
};

// square_02.onclick = null; // * Удалить или затереть свойство
square_02.onclick = function () {
    logger_02_1();
    logger_02_2();
    console.log('А ещё мы можем переопределить свойство!'); // А ещё мы можем переопределить свойство!
};

console.dir(square_02);
// Метод onclick может поломать наше приложение, если не уследить



// * 2) ADDEVENTLISTENER - ещё один обработчик событий, который более функционален
// Принимает на обработку события абсолютно любое количество функций

// В данный метод необходимо передать два аргумента
// В 1-ый аргумент - передать строкой '' событие, которое планируем отслушивать
// В 2-ой аргумент - передаём callback функцию
const square_03 = document.querySelector('#square_03');
const logger_03_1 = function () {
    alert('Ты нажал на куб!');
    console.log('Ты нажал на куб!');
};

square_03.addEventListener('click', logger_03_1);

// Мы можем передавать во 2-ой аргумент анонимную функцию + мы можем вешать несколько таких обработчиков на один элемент и в списке Event Listeners они будут отображаться
square_03.addEventListener('click', function () {
    alert('Ты нажал на куб, снова!');
    console.log('Ты нажал на куб, снова!');
});


// * 3) REMOVEEVENTLISTENER - Удаляет обработчик событий/слушатель и ТОЛЬКО именные функции
// Имя выступает как ключик. Этот метод ищет свойство по имени и удаляет его
// ! Если мы будем вешать анонимную фунецию, то через этот метод удалить её не сможем
const square_04 = document.querySelector('#square_04');
const logger_04_1 = function () {
    alert('Ты нажал на куб!');
    console.log('Ты нажал на куб!');
};

square_04.addEventListener('click', logger_04_1);
square_04.addEventListener('click', function () {
    alert('Ты нажал на куб, снова и меня не удалить!');
    console.log('Ты нажал на куб, снова и меня не удалить!');
});

square_04.removeEventListener('click', logger_04_1);
square_04.removeEventListener('click', function () { // Анонимную функцию не удалить
    alert('Ты нажал на куб, снова и меня не удалить!');
    console.log('Ты нажал на куб, снова и меня не удалить!');
});

console.dir(square_04); // В списке не будет не анонимных обработчиков событий/слушателей

// * Давайте немного усложним задачу и будем удалять слушатель по условию
// Будем каждый раз увеличивать counter на 1 при вызове logger, пока не будет равно 5, а потом удалить слушатель
const square_05 = document.querySelector('#square_05');
let counter = 0;
const logger_05_1 = function () {
    counter++;

    if (counter === 5) {
        square_05.removeEventListener('click', logger_05_1);
        // alert('Хватит на меня нажимать, с тебя достаточно!');
        // console.log('Хватит на меня нажимать, с тебя достаточно!');
    }
    alert('Ты нажал на куб! ' + counter);
    console.log('Ты нажал на куб! ' + counter);
};

square_05.addEventListener('click', logger_05_1);



// * 4) Объект EVENT
// Каждая callback функция, которая передаётся в метод addEventListener получает внутри данного метода доступ к самому событию, к объкту данного события и принимает его в первый параметр и называть его можем как удобно, в примере это event или e (так принято)
const square_06 = document.querySelector('#square_06');

const logger_06_1 = function (event) {
    console.log(event); // Получаем объект, в котором хранится вся информации о всём событии, которое сейчас случилось на странице
};

square_06.addEventListener('click', logger_06_1);



// * 5) События с мышкой
const square_07 = document.querySelector('#square_07');
const logger_07_1 = function (event) {
    console.log(event.type); // Выводим в консоль тип события
};

// * 5-1) CLICK - Событике клика мышки по элементу
square_07.addEventListener('click', logger_07_1);

// * 5-2) MIUSEDOWN - Событие нажатия кнопки мышки
square_07.addEventListener('mousedown', logger_07_1);

// * 5-3) MOUSEUP - Событие отжатия кнопки мышки
square_07.addEventListener('mouseup', logger_07_1);

// * 5-4) MOUSEMOVE - Событие движения мышки
square_07.addEventListener('mousemove', logger_07_1);

// * 5-5) MOUSEENTER - Событие наведения мышки на элемент, действует ТОЛЬКО на весь объекьт (на который повешан обработчик события) игнорируя дочерние элементы и вложенность
square_07.addEventListener('mouseenter', logger_07_1);

// * 5-6) MOUSELEAVE - Событие выхода мышки из зоны объекта, действует ТОЛЬКО на весь объекьт (на который повешан обработчик события) игнорируя дочерние элементы и вложенность
square_07.addEventListener('mouseleave', logger_07_1);

// * 5-7) MOUSEOVER - Похож на mouseenter, но действует и на дочерние элементы
square_07.addEventListener('mouseover', logger_07_1);

// * 5-8) MOUSEIYT - Похож на mouseleave, но действует и на дочерние элементы
square_07.addEventListener('mouseout', logger_07_1);




// * События с Формой - довольно важная тема

// * 6) INPUT
// Мы должны понимать, что событие на input не зависит от количества символов, а зависит от количества изменений значения данного элемента

// * Что такое значение свойства input? Это его value, можно посмотреть через. Мы можем получать значение value и записывать его в другой элемент

const text_01 = document.querySelector('#text_01');
const text_span_01 = document.querySelector('#text_span_01');

const loggerText_01 = function (event) {
    console.log(event); // Получаем объект, в котором хранится вся информации о всём событии, которое сейчас случилось на странице
    console.log(event.type); // Выводим в консоль тип события
    console.log(event.target); // Выводим в консоль цель/target
    console.dir(event.target); // Выводим в консоль цель/target и смотрим в value
    console.dir(event.target.value); // Выводим в консоль значение свойства value

    // * 6-6) target.value - Меняем textContent спана через value инпута
    text_span_01.textContent = event.target.value;
};

text_01.addEventListener('input', loggerText_01);

// * 6-2) FOCUS - отрабатывает в тот момент, когда мы ставим курсор в данный input
text_01.addEventListener('focus', loggerText_01);

// * 6-3) BLUR - отрабатывает в момент потери фокуса input
text_01.addEventListener('blur', loggerText_01);

// * 6-4) CHANGE - отрабатывает когда у нас производится два событи (input и blur), но при условии, что мы изменили значение input (текст и не только)
text_01.addEventListener('change', loggerText_01);

// * 6-6) KEYUP - появляется при нажатии или зажатии клавиши
text_01.addEventListener('keyup', loggerText_01);

// * 6-7) KEYDOWN - повляется при отпускания клавиши
text_01.addEventListener('keydown', loggerText_01);



// * 7) RANGE
const range_01 = document.querySelector('#range_01');
const range_span_01 = document.querySelector('#range_span_01');

const loggerRange_01 = function (event) {
    console.dir(event.type);
    range_span_01.textContent = event.target.value;
};

range_01.addEventListener('input', loggerRange_01);
range_01.addEventListener('change', loggerRange_01);

// * Мы можем вешать события напрямую на элементы без создания лишних переменных - это не очень хорошо, но иногда так делают
// document.querySelector('#range_01').addEventListener('change', function (event) {
//     console.log('Я без перееменных и именных функций!');
// });




// * Браузерные события, которые относятся к самому DOM

// * 8) DOMContentLoaded - срабатывает тогда, когда интерпретатор считал нашу вёрстку и построил на её основе DOM дерево. Вешается сразу на document
// Данное событие сейчас не используется, но возможно, что оно пригодиться и нужно знать
document.addEventListener('DOMContentLoaded', function () {
    console.log('Я загрузил DOM дерево!');
});

// * 9) onbeforeunload - в последнее время потеряло актуальность.
// Данное событие отрабатывает тогда, когда мы переходим внутри данной вкладки на другую страницу или просто перезагружаем её
// Работает довольно криво и современные бразуеры всё чаще запрещают использование подобных методов

// window.onbeforeunload = function () {
//     return 'Вы уверены, что хотите уйсти со страницы?';
// };



// * 8-1) EVENT.PREVENTDEFAULT - метод объекта event отменяет стандартное поведение элементов на странице
// Например мы можем запретить стандартное поведение ссылки
const link_01 = document.querySelector('#link_01');

link_01.addEventListener('click', function (event) {
    // Чтобы запретить переход по ссылке, мы должны обратиться к объекту event и использовать его метод preventDefault()
    event.preventDefault();
    console.log('Клик по ссылке!');
});

console.log(link_01);

// * 8-1) CONTEXTMENU - контекстное меню
// Ещё можно запретить на странице открывать меню после клика правой кнопки мыши
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    console.log('Я кликнул правой кнопкой мыши, но меню не появилось! 0_0');
});




// * 9) Всплытие и Погружение/Перехват - довольно сложная тема
// * ВСПЛЫТИЕ - когда мы кликаем по одному элементу и данное событие клика всплывает по его родителям
const figureSquare_01 = document.querySelector('#figure-square-01');
const figureCircle_01 = document.querySelector('#figure-circle-01');
const figureButton_01 = document.querySelector('#figure-button-01');


// * Напишм функцию, которая будет добавлять при клике к данному элементу какой-то класс
const toggler_01 = function (event) {
    // console.log(event.target);

    // Кликнули 1 раз, а получил 3 обработки. Даже если мы кликаем только по кнопке, то элементы прокликиваются насквозь кликая всех его родителей, даже блоки main body и html

    // Каждый метод оработки событий гарантирует, что клик по вложенному элементу кликнет и по всем его родителям, как бы поднимаясь каждый раз на уровень выше и прокликивая своего родителя. Таким образом мы всегда можем узнать какой точно элемент был прокликан из свойства event.target

    // * Можем вывести в консоль свойство currentTarget
    console.log(event.currentTarget); // Выводим последовательность кликов начиная от элемента и поднимаяс до родителей, то-есть начинается изнутри наружу

    // * Немного распишем вывод в консоль свойства currentTarget
    // То-есть в каждом объекте event мы точно знаем наш target/цель и currentTarget, а событие прошивает данный элемент и поднимается по каждому родителю данного элемента это и есть ВСПЛЫТИЕ
    console.log('Событие сработало на ' + event.target.id + ' и перенеслось на ' + event.currentTarget.id);

    event.target.classList.toggle('darkred');

    // * stopPropagation - ПРЕКРАЩЕНИЕ ВСПЛЫТИЯ
    event.stopPropagation();
};

// * ПОГРУЖЕНИЕ/ПЕРЕХВАТ - поворот всплытия вспять (нужно удалить stopPropagation)
// Для этого в метод addEventListener передаём true. То-есть поворачиваем клик от родителя к элементу
figureSquare_01.addEventListener('click', toggler_01, true);
figureCircle_01.addEventListener('click', toggler_01, true);
figureButton_01.addEventListener('click', toggler_01, true);


// Чаще всего в обычной стандартной работе, то-есть в обработке событий на отдельно стоячих элементов, мы не увидим ни всплытия ни погружения/перехвата. Но иногда в довольно сложном функционале мы случайно можем повесить один обработчик событий клика на родителя и абсолютно другой обработчик события по клику на его дочерний элемент. Кликнув по дочернму элементу будет происходить сразу два события (событие дочернего элемента и родителя).