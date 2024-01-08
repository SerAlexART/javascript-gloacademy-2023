'use strict';

// * Стоит помнить, что замыкающая функция это просто функция внутри функции, которая используем параметр родительской функции


// * Область видимости и Замыкания
// Поняв эти темы, можно сказать, что мы понял 1/3 языка JS. Весь JS строится на функциях, а каждая функция это отдельная область видимости.

let a1 = 5; // Объявление глобальной переменной

function one1() {
    let b1 = 55; // Объявление внутренней переменной

    console.log(a1); // Глобальная переменная
    console.log(b1); // Внутренняя переменная
}

one1();

console.log(a1); // Глобальная переменная вернёт значение
console.log(b1); // Внутренняя переменная вернёт ошибку

// * use strict
// Когда мы не указываем ключевые слова let, const и var для объявления функции, то переменная, даже находящиеся внутри тела функции, попадает в глобальную область вдимости, но это поведение убирается через use strict, так как он заставляет использовать ключевые слова, что гарантирует соблюдение областей видимости в переменных. Когда интерпретатор считывает код, то для каждой переменной он указывает ту область видимости из которой он будет доступен.
'use strict';

let a2 = 5; // Объявление глобальной переменной

function one2() {
    b2 = 55; // Объявление глобальной переменной

    console.log(a2); // Глобальная переменная
    console.log(b2);  // Глобальная переменная
}

one2();

console.log(a2); // Глобальная переменная вернёт значение
console.log(b2); // Глобальная переменная вернёт ошибку


// * Как создаётся область видимости на примере
// Вызов функции берёт значение из ближайшей области видимости выше, выше, выше и т.д.
'use strict';

let a3 = 5;

function one3() {
    console.log(a3); // Значение a3 возьмёт из переменной выше, которая объявлена глобально и будет равно 5
}

one3(); // Выведет 5

// Объявляем переменную внутри с таким же названием
'use strict';

let a4 = 5;

function one4() {
    let a4 = 2;
    console.log(a4); // Значение a4 возьмёт из переменной выше, которая объявлена внутри и будет равно 2
}

one4(); // Выведет 2.


// * Пример со вложенной функцией
// Переменные a5 это абсолютно разные переменные, которые не относятся друг к другу и несут внутри себя свою информацию, у них просто одинаковое название, не более
'use strict';

let a5 = 5;

function one5() {
    let a5 = 10; // 2. Если удалить объявление переменной ниже в функции two5, то значение будет 10

    function two5() {
        let a5 = 15;
        console.log(a5); // 1. a5 будет равно 15, так как это самое ближайшее значение
    }

    two5();
}

one5(); // 2. Если удалить объявление переменной в функции one5, то значение будет 5


// * Углубление в теорию - Lexical Environment (лексическое окружение) и Scope
// Внутри каждой функции существует скрытый объект, в этом объекте хранятся все локальные переменные.
// Локальная переменная это переменная, которая локально объявлена внутри функции и этот объект называется
// Этот объект никак нельзя вывести в консоль и посмотреть, что в нём находится

// У каждой функции есть второй скрытый объект 0_0 под названием Scope
// Scope данный объект принимает ссылкой все локальные переменные объявленные в функции родителя, а если быть точнее, то попадает весь Lexical Environment из уровня выше

// Если у переменной есть значения, то сначала мы заглядываем в Lexical Environment, если там нет, то потом смотрим в Scope. Если и там их нет, то идём на уровень выше и смотрим сначала в Lexical Environment и так по кругу
'use strict';

let a6 = 5;

function one6(c6, d6) {
    // 1. Lexical Environment = {c: 55, d: undefined}
    let a6 = 10;
    // 2. Lexical Environment = {a:10, c: 55, d: undefined}
    console.log(a6, c6, d6);

    function two6() {
        // 3. Lexical Environment = {}
        // 4. Scope = {a:10, c: 55, d: undefined}
        console.log(a6);
    }

    two6();
}

one6(55);

// Lexical Environment работает во время вызова функции
// Scope работает во время написания
let y7 = 5;

function one7(x7) {
    console.log(x7 + y7); // В x7 попадёт значение 2 из вызова ниже
}

one7(2); // Выведет 7

// Ещё пример, у каждой функции своя область видимости

let y8 = 5;

function one8(x8) {
    console.log(x8 + y8);
}

function two8() {
    let y8 = 55; // Видна только внутри этой функции
    one8(2);
}

two8(2); // Выведет 7


// * Замыкание - если говорить простым языком, то это функция внутри функции
function one9(x9) {
    function two9() {
        console.log(x9);
        console.dir(two9);
    }

    two9();
}

one9(5);

//  Функция с замыканием пример 1
// Параметр x10 замкнут вместе с функцией two10, которая просто меняет его значение
function one10(x10) {
    function two10() {
        const a10 = +prompt('Введите число');
        x10--; // Значение x10 принадлежит функции one10

        console.log(a10);
        console.log(x10);

        if (a10 !== x10) {
            two10(); // Функция сбрасывает запускается по новой
        }
    }

    two10();
}

one10(10);

//  Функция с замыканием пример 2
function counter1(n) {
    return function () { // Возвращает анонимную фунцию
        return 1000 + n; // Анонимная функция возвращает сумму 1000 + n
    };
}

let sum1 = counter1(1); // sum становится функцией, которую можно запустить
console.log(sum1); // Выведет функцию, которая возвращает сумму 1000 + n
console.log(sum1()); // Запускаем функцию sum, вернёт 1001


// Попробуем передать в анонминю функцию
function counter2(n) {
    return function (x) {  // Передаём аргумент x в анонимную функцию
        return x + n;
    };
}

let sum2 = counter2(1); // 1 попадёт в n и она замкнута внутри counter(n)
console.log(sum2);
console.log(sum2(15)); // 15 попадёт в x

// * Реальный пример из жизни и хорошая практика, принменяют довольно часто
// Представим, что на проекте несколько папок с артами и каждый раз URL к арту указываем руками. Сделаем генератор URL к этим артам, чтобы при вызове необхоимой функции нам оставалось только преедать название арта
function pathGenerator(url) {
    return function (imageName) {
        return url + imageName;
    };
}

let urlToIcons = pathGenerator('https://mydomain.ru/assets/icons/');
let urlToImages = pathGenerator('https://mydomain.ru/assets/images/');

console.log(urlToIcons('clock.svg'));
console.log(urlToImages('man.svg'));