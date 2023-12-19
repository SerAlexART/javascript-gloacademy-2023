'use strict';

// Выводит модальное окное в браузере с текстом, который указываем в параметре. Есть две кнопки кнопки ОК и ОТМЕНА. ОК = true. ОТМЕНА = false.
let answer1 = confirm('Любишь JS?');
console.log(answer1);

// Выводит модальное окное в браузере с текстом, который указываем в параметре. Есть две кнопки кнопки ОК и ОТМЕНА. Плюс есть поле ввода. Тип ответа promt ВСЕГДА будет приходить в виде строки. Если в методе promt нажать отмену, то вернётся значение null и это стоит учитывать.
let answer2 = prompt('Любишь JS?');
console.log(answer2);

// У метода promt есть параметр по умолчанию.
let answer3 = prompt('Любишь JS?', 'Да!');
console.log(answer3);

// * Приведение типов данных
// Интерпретатор приведёт оба операнда, которые являются разными типами, к одному типу и вернёт значение, если использовать оператор +
console.log(5 + '5'); // Вернёт строку
console.log(5 + 5); // Вернёт число

// Приведёт оба операнда к числовому типу и вернёт значение
console.log(5 - '5');
console.log(5 * '5');
console.log(5 / '5');

// Попытается привести оба операнда к числовому типу и вернёт результат
console.log(5 - '5s'); // Вернёт NaN
console.log(5 == '5'); // Вернёт true
console.log(5 === '5'); // Вернёт false

// * Глобальные методы явного приведения типа данных
// Метод String переводит всё переданное в него в строку
console.log(String(true));
console.log(String(undefined));
console.log(String(null));
console.log(String('123'));
console.log(String(123));

// Метод Number переводит всё переданное в него в число
console.log(Number(true));
console.log(Number(false));
console.log(Number(undefined));
console.log(Number(null));
console.log(Number('123'));
console.log(Number('123s'));
console.log(Number(123));

// Метод Boolean переводит всё переданное в него в булевые значения
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(false));

console.log(Boolean(5));
console.log(Boolean('5'));
console.log(Boolean('5s'));

console.log(!!5); // Используя двойное отрицание !! можно приводить значения к булевым
console.log(!!'5s');
console.log(5 + ''); // Короткая запись привести значение в строку через пустые кавычки
console.log(5 .toString()); // Вариант без переменной, пробел после числа обязателен

let a = 5;
console.log(a.toString());  // Вариант с переменной, пробел не нужен

console.log(+'5'); // Вариант перевода строки в число, где это можно
console.log(typeof +'5');

console.log(+'5s'); // Если строка не может быть переведена в число, вернёт Nan



// * Где это может пригодиться?
let str1 = prompt('Какой сегодня день?');
let result1 = str1 + 5;
console.log(result1); // Если ответить 5, то вернёт 55

let str2 = +prompt('Какой сегодня день?'); // Ставим +
let result2 = str2 + 5;
console.log(result2); // Если ответить 5, то вернёт 10. Если ответить строкой вроде 5s, то вернёт NaN, так как мы попытались перевести строку в число.

// Возвращает ТОЛЬКО целочисленные значения, даже если ввести 555sss. Но если мы введём только строку и текст sss, который начинается с букв sss555, то получим NaN
let str3 = prompt('Какой сегодня день?');
console.log(parseInt(str3));
console.log(parseInt(str3), 2); // переведёт в двоичную систему
console.log(parseInt(str3), 16); // переведёт в шестнадцатиричную систему

// Позволяет получать дробные значения вроде 5.555555
let str4 = prompt('Какой сегодня день?');
console.log(parseFloat(str4));



// * Ветвления это выполнение набора команд на основании их истинности или ложности логического выражения. Ответа может быть только два - да или нет.

/*
    Если (выходной) {
        радуемся;
        отдыхаем;
    } иначе {
        умываемся;
        одеваемся;
    }
*/

if (true) console.log('Истина');
if (false) console.log('Ложь');

if (true) {
    console.log('Команда 1');
    console.log('Команда 2');
    console.log('Команда 3');
} else {
    console.log('Команда 4');
    console.log('Команда 5');
    console.log('Команда 6');
}

let n1 = 5;
if (n1 == 5) {
    console.log('Команда 1');
    console.log('Команда 2');
    console.log('Команда 3');
} else {
    console.log('Команда 4');
    console.log('Команда 5');
    console.log('Команда 6');
}

let n2 = 5;
if (n2 == 5) {
    console.log('Команда 1');
    console.log('Команда 2');
    console.log('Команда 3');
} else if (n2 == 2) { // Если нужно сравнить с несколькими значениями
    console.log('Команда 4');
    console.log('Команда 5');
    console.log('Команда 6');
} else { // Дефолтное значение. Если все значения не совпадают, а выполнить команду нужно
    console.log('Команда 7');
    console.log('Команда 8');
    console.log('Команда 9');
}



// switch - кейсы всегда проверяются на строгое соответствие
let s1 = 5;

switch (s1) { // Указываем переменную или логическое выражение
    case 5: // Кейс проверки и через пробел значение, с которым будем сравнивать
        console.log(5); // Функционал, который должен отработать, если выражение вернёт истину
        break; // Оператор break останавливает выполнение команды кейса и не перебирает остальные
    case 10:
        console.log(10);
        break;
    case 15:
        console.log(15);
        break;
    case 20:
        console.log(20);
        break;
    default: // Дефолтное значение. Если все значения не совпадают, а выполнить команду нужно
        console.log('Значения не совпадают.');
}

// Можно группировать кейсы с выводом одного функционала
let s2 = 15;

switch (s2) {
    case 5:
        console.log(5);
        break; //
    case 10:
    case 15:
    case 20:
        console.log(10, 15, 20);
        break;
    default:
        console.log('Значения не совпадают.');
}



// Данные для проверки от пользователя
let s3 = prompt('Введите число.'); // В поле введём цифру 5

switch (s3) {
    case 5:
        console.log(5);
        break;
    case 10:
    case 15:
    case 20:
        console.log(10, 15, 20);
        break;
    default:
        console.log('Значения не совпадают.'); // Отработает эта строка, так как prompt всегда возвращает число
}



// Меняем тип данных от пользователя
let s4 = +prompt('Введите число.'); // Меняем тип данных от пользователя у promt через +

switch (s4) {
    case 5:
        console.log(5); // Если ввести в строку 5, то отработает эта строка
        break;
    case 10:
    case 15:
    case 20:
        console.log(10, 15, 20);
        break;
    default:
        console.log('Значения не совпадают.');
}


// switch обладает возможностью проверять на true целые логические выражения
let s5 = +prompt('Введите число.');

switch (true) { // Вместо переменной необходимой указать true и именно с ней будет сверяться логическое выражение из case
    case s5 > 10:
        console.log('s5 > 10');
        break;
    case s5 <= 10:
        console.log('s5 <= 10');
        break;
    default:
        console.log('Значения не совпадают.');
}



// Пример сложного случая
let s6 = +prompt('Введите число.');

switch (true) {
    // case 5 < s6 < 10: Так логические выражения нельзя, будет отрабатаывать, даже если написать 11
    case 5 < s6 && s6 < 10: // Необходимо использовать логические операторы
        console.log('5 < s6 < 10');
        break;
    default:
        console.log('Значения не совпадают.');
}


// * Тернарный оператор
let s7 = +prompt('Введите число.');

let resultS7 = s7 === 5 ? 1 : 2; // Если s7 равно 5, то вернётся значение 1, в остальных случаях вернётя 2
console.log(resultS7);

let s8 = +prompt('Введите число 5.');

let resultS8 = s8 === 5 ? console.log('Вы ввели верное значение.') : console.log('Вы ввели неверное значение.');
console.log(resultS8);