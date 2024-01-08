'use strict';

// * Работа с DOM деревом
const lists = document.querySelectorAll('.about__list');
const elems = document.querySelectorAll('.about__list-item');

console.log(lists);
console.log(elems);


// * I. Методы перемещения
// / remove - медод удаляет элементы из вёрстки с определённым индексом из elems
elems[2].remove();
elems[4].remove();
console.log(elems); // В переменной elems элементы остаются и мы можем их переиспользовать


// * append - метод не только вставляет, но и перемещает из своего исходного места в самый конец
lists[1].append(elems[2]); // Обращаемся к первому индексу элемента lists, через метод append добавляет в него элемент, который хотим разместить внутри
lists[1].append(elems[4]);
lists[1].append(elems[3]); // Вставляем элемент в самый конец


// * prepend - вставляет элементы в самоё начало, работает как append
lists[1].prepend(elems[5]);
lists[1].prepend('Я текст №1, а ранее тут был элемент №5.');


// * before - вставляет один определённый элемент до/перед другого определённого элемента
const lists_2 = document.querySelectorAll('.about__list-2');
const elems_2 = document.querySelectorAll('.about__list-item-2');

lists_2[1].append(elems_2[4]);
lists_2[1].append(elems_2[5]);

lists_2[0].before(lists_2[1]); // Перед lists[0] вставляем lists[1]


// * after - вставляет один определённый элемент после другого определённого элемента
elems_2[3].after(elems_2[0]); // После elems_2[3] вставляем elems_2[0]
lists_2[0].after(lists_2[1]); // После lists[0] вставляем lists[1] - возвращаем порядок обратно

// * replaceWith - заменяет один элемент другим элементом или строкой
// elems_2[2] полностью убирается из DOM дерева
elems_2[4].replaceWith(elems_2[2]); // Заменят элемент elems_2[4] на elems_2[2]
elems_2[2].replaceWith('Я текст №2, а ранее тут был элемент №4.'); // Заменят элемент elems_2[4] на elems_2[2]

// * Подобный метод замены сторокой работает и с append, prepend, before и after




// * II. Методы клонирования
const lists_3 = document.querySelectorAll('.about__list-3');
const elems_3 = document.querySelectorAll('.about__list-item-3');

// * cloneNode - копирует элемент
const cloneElem_3_1 = elems_3[3]; // Мы не клонируем элемент, а просто указываем в переменной ссылку на элемент
const cloneElem_3_2 = elems_3[3].cloneNode(); // Получаем лишь первый узезл/node без содержания
const cloneElem_3_3 = elems_3[3].cloneNode(true); // Получаем все узлы/node элемента при указании true

console.log(cloneElem_3_1); // Получаем ссылку на элемент
console.log(cloneElem_3_2); // Получаем первый узел/node
console.log(cloneElem_3_3); // Получаем весь элемент целиком со всеми узлами внутри него


// Меняем стили и содержимое скопированного элемента
cloneElem_3_3.style.padding = '15px';
cloneElem_3_3.style.borderRadius = '15px';
cloneElem_3_3.style.color = 'White';
cloneElem_3_3.style.backgroundColor = 'DodgerBlue';
cloneElem_3_3.textContent = 'Меня скопировали из элемента[3], изменили стили и текстовое содержимаое, а после этого ещё и вставили в список[1].';

cloneElem_3_3.textContent = '<strong>Меня скопировали из элемента[3], изменили стили и текстовое содержимаое, а после этого ещё и вставили в список[1].</strong>'; // Пытаемся обернуть текстовое содержыимое тегом

// * innerHTML - позволяет читать теги как теги, а текст как текст. Полностью затирает старое и добавляет новое
cloneElem_3_3.innerHTML = '<strong>Меня скопировали из элемента[3], изменили стили и текстовое содержимаое, после этого ещё и вставили в список[1], а замет обернули в тег.</strong>'; // Чтобы теги читались как теги, а текст как текст, необходимо использовать innerHTML

lists_3[1].append(cloneElem_3_3); // Вставляем склонированный элемент во второй список

console.dir(cloneElem_3_3);




// * III. Создание новых элементов с нуля
const lists_4 = document.querySelectorAll('.about__list-4');
const elems_4 = document.querySelectorAll('.about__list-item-4');


// * createElement - создание тега, в createElement('') в виде строги указываем название тега для создания
const newElem_4_1 = document.createElement('li'); // Элемент создан, он пока просто хранится в памяти JS

// Наделяем элемент классом, стилями и текстом
newElem_4_1.classList.add('li-new-class-test');
newElem_4_1.style.padding = '15px';
newElem_4_1.style.borderRadius = '15px';
// newElem_4_1.style.color = 'White';
newElem_4_1.style.backgroundColor = 'DodgerBlue';
newElem_4_1.textContent = 'Я новый элемент li, спасибо. что меня создал!';

lists_4[1].append(newElem_4_1);

console.log(newElem_4_1);


// * insertAdjacentText - добавляет текст на разных уровнях без удаления старого
// Первым аргументом принимает одну из четырёх настроек, а вторым аргументом принимает текст
const title_4 = document.getElementById('title-4');


title_4.insertAdjacentText('beforebegin', '[Текст-1 beforebegin.]'); // Добавляет строчку текста до элемента
title_4.insertAdjacentText('afterbegin', '[Текст-2 afterbegin.]'); // Добавляет текст внутри элемента в начале

title_4.insertAdjacentText('beforeend', '[Текст-3 beforeend.]'); // Добавляет текст внутри элемента в конценачале
title_4.insertAdjacentText('afterend', '[Текст-4 afterend.]'); //  Добавляет строчку текста после элемента

console.log(title_4);


// * insertAdjacentElement - добавляет элемент на разных уровнях без удаления старого
// Первым аргументом принимает одну из четырёх настроек, а вторым аргументом принимает элемент'
const title_5 = document.querySelector('#title-5');
const elems_5 = document.querySelectorAll('.about__list-item-5');

title_5.insertAdjacentElement('beforebegin', elems_5[0]); // Добавляет элемент до элемента
title_5.insertAdjacentElement('afterbegin', elems_5[1]); // Добавляет элемент внутри элемента в начале
title_5.insertAdjacentElement('beforeend', elems_5[2]); // Добавляет элемент внутри элемента в конценачале
title_5.insertAdjacentElement('afterend', elems_5[3]); //  Добавляет элемент после элемента

console.log(title_5);


// * insertAdjacentHTML - добавляет HTML на разных уровнях без удаления старого
const title_6 = document.querySelector('#title-6');

title_6.insertAdjacentHTML('beforebegin', '[<i>Text-01.</i>]'); // Добавляет HTML до элемента
title_6.insertAdjacentHTML('afterbegin', '[<i>Text-02.</i>]'); // Добавляет HTML внутри элемента в начале
title_6.insertAdjacentHTML('beforeend', '[<i>Text-03.</i>]'); // Добавляет HTML внутри элемента в конценачале
title_6.insertAdjacentHTML('afterend', '[<i>Text-04.</i>]'); //  Добавляет HTML после элемента

console.log(title_6);




// ! * IV. Несколько устаревших методов, которые могут встретиться в чужом коде
// appendChild >>> append
// insertVefore >>> before
// replaceChild >>> replaceWidth
// removeChild >>> remove


// * appendChild VS append
const lists_7 = document.querySelectorAll('.about__list-7');
const elems_7 = document.querySelectorAll('.about__list-item-7');
const title_7 = document.querySelector('#title-7');

lists_7[1].append(elems_7[4], elems_7[3], elems_7[2]); // Через append мы можем добавить сразу несколько элементов
lists_7[1].appendChild(elems_7[5]); // Принимает только один аргумент, остальные игнорирует

lists_7[1].append('Я просто строка.'); // Может принимать строку ''
// lists_7[1].appendChild('Не может передать строку, будет ошибка.');

const list_7_2 = lists_7[1].appendChild(elems_7[5]);
console.log(list_7_2); // appendChild возвращает тот элемент, который мы добавляем через него

const list_7_3 = lists_7[1].append(elems_7[5]);
console.log(list_7_3); // append возвращает undefined, так как append не заморачивается с подобной работой, потому что это просто не нужно в JS



// * insertBefore - если кратко, то устаревший before и менее удобный
// Отличается от современного метода before тем, что мы зависим от родителя
const lists_8 = document.querySelectorAll('.about__list-8');
const elems_8 = document.querySelectorAll('.about__list-item-8');
const title_8 = document.querySelector('#title-8');

lists_8[1].append(elems_8[1]);

lists_8[1].insertBefore(elems_8[5], elems_8[1]); // Указываем родителя, далее первый аргумент который мы будем перемещать, а вторым перед которым мы вставим первый аргумент




// * replaceChild - заменяет один элемент на другой и полностью удаляем из DOM один их них
const lists_9 = document.querySelectorAll('.about__list-9');
const elems_9 = document.querySelectorAll('.about__list-item-9');
const title_9 = document.querySelector('#title-9');


lists_9[1].append(elems_9[1]);

lists_9[1].replaceChild(elems_9[5], elems_9[1]);



// * removeChild - полностью удаляет один элемент
const lists_10 = document.querySelectorAll('.about__list-10');
const elems_10 = document.querySelectorAll('.about__list-item-10');
const title_10 = document.querySelector('#title-10');

lists_10[1].append(elems_10[5]);

lists_10[1].removeChild(elems_10[5]);