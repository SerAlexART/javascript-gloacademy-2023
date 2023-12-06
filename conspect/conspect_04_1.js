'use strict';

// * Функция
// Рекомендуется законченный алгоритм заключать в функцию.

// * Объявление функции с типом Function Declaration

// Такой типа является и плюсом и минусом, что вызывать можно как до, так и после объявления, что не очень хорошо по современным стандартам. Если использовать до, то будет называться всплытием, что может привести к потере контролю над программой.

function getMessage() { // Объявление функции с именем getMessage
    alert('I\'m a function!'); // Тело функции
    console.log('I\'m a function!');
}

getMessage(); // Вызов функции через ()

// * Операция чистые руки
// В JS принято разбивать большую задачу(функцию) на мелки задачи(функции) и запускать их последовательно
function cleanHandsOperation1() {
    console.log('start');

    function dirtyHands1() {
        console.log('Испачкать руки.');
    }

    function goToTheBathroom1() {
        console.log('Пойти в ванную комнату.');
    }

    function cleanHands1() {
        console.log('Помыть руки.');
    }

    dirtyHands1();
    goToTheBathroom1();
    cleanHands1();
}

cleanHandsOperation1();

// Пример выше можно сократить, чтобы не дублировать код.
function cleanHandsOperation2() {
    function step(str) { // str это параметр/переменная функции step, имя мы задаём сами
        console.log(str);
    }

    step('Испачкать руки.'); // информация внутри () это аргумент при вызове функции
    step('Пойти в ванную комнату.');
    step('Помыть руки.');
}

cleanHandsOperation2();

// Параметры и аргументы это неотъемлемая часть функции и передавать аргументы и принимать параметры мы можем бесчисленное количество раз
function cleanHandsOperation3() {
    function step(index, str) { // index и str это параметр/переменная функции step
        console.log(index + ' ' + str);
    }

    step(1, 'Испачкать руки.'); //  в этом примере два аргумента
    step(2, 'Пойти в ванную комнату.');
    step(3, 'Помыть руки.');
}

cleanHandsOperation3();

// * Объявление функции с типом Function Expression
// Довольно распространённый способ, который рекомендуется использовать. Вызов функции возможен только после объявления самой функции

const cleanHandsOperation4 = function () { // Объявление константы или переменной cleanHandsOperation4 значением которой является функция
    const step = function (index, str) { // Объявление константы или переменной step значением которой является функция
        console.log(index + ' ' + str);
    };

    step(1, 'Испачкать руки.');
    step(2, 'Пойти в ванную комнату.');
    step(3, 'Помыть руки.');
};

cleanHandsOperation4();

// * Объявление функции через глобальный класс new Function()
// Данный способ используется крайне редко, когда другого способоа просто не найти
const cleanHandsOperation5 = function () {
    const step = new Function('index', 'str', 'console.log(str)');

    step(1, 'Испачкать руки.');
    step(2, 'Пойти в ванную комнату.');
    step(3, 'Помыть руки.');
};

cleanHandsOperation5();

// * Интересные моменты

// Переменные созданные внутри функции не видны вне её границы
const countSum1 = function (a, b) {
    let res1 = a + b;
    console.log(res1);
};
// console.log(res1); // Выдаст ошибку, так переменная res1 используется внутри фунции
countSum1(2, 5);

// Можно объявить переменную вне функции, использовать её внутри функции и переопределить
let res2;
console.log(res2);

const countSum2 = function (a, b) {
    res2 = a + b; // Переопределение внешней функции res2
    console.log(res2);
};

countSum2(2, 5);
console.log(res2);

// * Оператор return
// Есть куда более простой способ с использованием оператора return. Всё, что будет написано после оператора return не будет обработано, так как он останавливает программу
let res3;
console.log(res3);

const countSum3 = function (a, b) {
    return a + b; // Внутри функции не переопределять значение res3, а возвращать результат выражения.
    console.log('Не будет обработано.');
};

res3 = countSum3(2, 5); // Результат выполнения функции назначить как значение переменной res3
console.log(res3);

// Есть ещё более короткая и простая запись, нужно в начале отказаться от объявления переменной res
const countSum4 = function (a, b) {
    // const countSum4 = function (a, b = 5) { // Задаём аргументу b значение по умолчанию 5, если не задавать, то при выводе будет undefined
    console.log(arguments[5]); // Используя псевдомассив arguments достаём аргумент 5-ый по индексу, в современном стандарте не используется, есть решение проще
    return a + b;
};

console.log(countSum4(2, 5)); // Выводит в консоль функцию countSum4 с аргументами 2 и 5
console.log(countSum4(2, 5) + 55); // + можно использовать математические операции, выведет 65
console.log(countSum4(2)); // Если передать только один аргумент, то получим NaN
console.log(countSum4(2, 5, 22, 55, 525)); // Если передать больше аргументов чем есть в функции, то они проигнорируются, но их можно получить через псевдомассив arguments

// * Чистая функция или Детерминированая функция это функция, которая зависит ТОЛЬКО от входящих аргументов
// Чистой функцией называют функцию результат которой зависит только от входных параметров и она не может иметь побочных эффектов. Рекомендуется соблюдать чистоту кода везде, где это возможно, так как их проще поддерживать и читать.

// Пример чистой функции
const pureFunction1 = function (a, b) {
    return a + b;
};

console.log(pureFunction1(2, 5));

// * Нечистая функциия
// Опасность в том, что переменная может находится далеко от самой функции и её могут поменять, что может повлиять на работоспособность функции
let pureCount2 = 55;

const pureFunction2 = function (a, b) {
    return a + b + pureCount2; // pureCount2 является внешним аргументом из внешней переменной. Результат зависит от переменной, находящейся вне функции pureCount2
};

console.log(pureFunction2(2, 5));

// * Побочные эффекты
// Чистые функции не должны нести в себе побочные эффекты вроде console.log, alert, обращение к серверу и обращение к DOM дереву
const pureFunction3 = function (a, b) {
    //  console.log(a + b); // если в функции будет этот метод, то она уже не будет чистой
    return a + b;
};

console.log(pureFunction3(2, 5));

// * Callback функция и Анонимные функции
// Callback функция обратного вызова. Внутрь функции в виде аргументов можно передать числа, строки, объекты, массивы и даже функции. Можем принять функцию в параметр и запустить этот параметр
const callbackCountSum1 = function (a, b, callback) {
    return a + callback(b); // в аргумент cellback передаём аргумент b
};

const secondCallbackFunc1 = function (num) {
    return num + 55;
};

console.log(callbackCountSum1(2, 5, secondCallbackFunc1));
// В функции callbackCountSum1 мы передали три аргумента
// a - 2 попадает в параметр a
// b - 5 попадает в параметр b
// и функия secondCallbackFunc1 - попадает в параметр callback



// * Анонимная функции
// Если функция нужна только один раз, то имеет смысл использовать анонимную, это не загрязняет память и пространство имён для переменных, упрощает читаемость и поддержку.
function anonymousOne() { // Объявление именной функции anonymousOne
    console.log('anonymousOne');
}

const anonymousTwo = function () { // Объявление анонимной функции через переменную
    console.log('anonymousTwo');
};

const anonymousThree = function anonymousThreeFunc() { // Объявление именной функции anonymousThreeFunc через переменную
    console.log('anonymousThree');
};

console.log(anonymousOne);
console.log(anonymousTwo);
console.log(anonymousThree);


// Использование анонимной функции
const callbackCountSum2 = function (a, b, callback) {
    return a + callback(b);
};
// const secondCallbackFunc1 = function(num) { // Удаляем объявление переменной с функцией
//     return num + 55
// }

console.log(callbackCountSum2(2, 5, function (num) { // Используем анонимную функцию в виде аргумента
    return num + 55;
}));

// * Закрепляем тему Callback и Анонимных функций
// В данном примере не имеет смысла, но он показывает работу
const money = 5555;
const expenses1 = 222;
const expenses2 = 255;

const sumExpenses = function (exp1, exp2) {
    return exp1 + exp2; // Функция, которая считает все расходы
};

const countTotal1 = function () {
    return money - expenses1 - expenses2; // Функция, которая считает остаток после расходов
};

const countTotal2 = function () {
    return money - sumExpenses(expenses1, expenses2); // Функция, которая считает остаток после расходов, где используется ещё одна функция sumExpenses
};


const countTotal3 = function (count, callback) {
    return count - callback(expenses1, expenses2); // Функция, которая считает остаток после расходов, где используется ещё одна функция sumExpenses
};

console.log(countTotal1());
console.log(countTotal2());
console.log(countTotal3(money, sumExpenses));
console.log(countTotal3(money, function (exp1, exp2) {
    return exp1 + exp2;
}));
console.log(sumExpenses(expenses1, expenses2));

// * Callback функции раскрываются когда мы работаем с сервером и когда происходят события на которые нужно время
const sendServer1 = function () {
    setTimeout(function () { // Откладывает запуск...
        console.log('Вызов 1-ой функции.');
    }, 2000); //...на 2000ms
};

const someFunc1 = function () {
    console.log('Вызов 2-ой функции.');
};

sendServer1(); // Эта функция запустится позже
someFunc1(); // Эта фунеция запустится первой

// Чтобы функции отработали в нужной последовательности можно использовтаь Callback
const sendServer2 = function (callback) {
    setTimeout(function () {
        console.log('Вызов 1-ой функции.');
        callback(); // Вызываем callback функцию
    }, 2000);
};

const someFunc2 = function () {
    console.log('Вызов 2-ой функции.');
};

sendServer2(someFunc2);