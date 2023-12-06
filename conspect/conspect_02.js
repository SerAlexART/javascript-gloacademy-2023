'use strict';

// * Типы данных
// Примитивные
let myVar;

myVar = 5;
myVar = 556232154987932165987132n;
myVar = 'SerAlex';
myVar = true;
myVar = null;
myVar = undefined;
myVar = Symbol();

// *Объект и всё, что из него произростает
myVar = {};
myVar = [];
let regExp = /w+/g;
let func = function () { };
let error = Error('error message');

// *Оператор typeof проверяет какой тип данных сохранён в переменную
console.log(typeof myVar);

// *Есть конструкция через оператор new, примеры ниже тоже имеет тип данных объект
let obj = new Object();
let att = new Array();
let date = new Date();
let map = new Map();
let set = new Set();
let weakMap = new WeakMap();
let weakSet = new WeakSet();

// *Логические операторы
//  || - ИЛИ. Вернёт истину, если хотя бы операндов вернёт истину
console.log(true || true);
console.log(true || false);
console.log(false || false);

//  && - И. Вернёт истину, если каждый из операндов вернёт нам истину
console.log(true && true);
console.log(true && false);
console.log(false && false);

//  ! - ОТРИЦАНИЕ. Принимает операнд и возвращает противоположное значение
console.log(!true);
console.log(!false);

// *Числа - примеры ниже являются типом number
console.log(5);
console.log(5.5);
console.log(.5);
console.log(0xff); // Шестрадцатеричная система === 255
console.log(0b11111111); // Бинарная/Двоичная система === 255
console.log(0o377); // Восьмеричная система === 255

// Специальные числовые значения
console.log(Infinity); // Математическая бесконечность. Больше любого числа
console.log(5 / 0);
console.log(-Infinity); // Может быть отрицательным

console.log(NaN); // Значение, которое не может быть числом. Появлявется в результате неправильной математической операции.
console.log('Пять' / 5);
console.log(Infinity / Infinity);

// bigint Большое число. Чтобы привести к bigint, нужно после числа поставить n. Служит только для целых чисел
console.log(typeof 5n);
// console.log(typeof 5.5n); // будет ошибка

// * Операторы. Есть унарные(один операнд) и бинарные(два опернда)
console.log(+5); // + это оператор, а 5 это операнд
console.log(-5);

// *Инкремент и декремент
// Префисная запись сначала выводит начальное значение в консоль, а следующее уменьшает или увеличивает
// Посфиксная запись сразу выводит значение меньше или больше оригинала
let i = 5;

console.log(i++); // Постифсный форма инкремент - оператор после переменной
console.log(++i); // Префисный форма инкремента - оператор до переменной
console.log(i);

console.log(i--); // Постифсный форма декремент - оператор после переменной
console.log(--i); // Префисный форма декремент - оператор до переменной
console.log(i);

// *Бинарные арифмитические операторы
console.log(2 + 5); // Сложение
console.log(2 - 5); // Вычитание
console.log(2 * 5); // Умножение
console.log(2 / 5); // Деление
console.log(5 % 2); // Получение остатка от деления, вернёт 1, так как целочисленное число 5 не делится на два целочисленный числа
console.log(5 ** 2); // Возведение в степень, вернёт 25

// Пример короткой записи на примере оператора +
let n = 5;
n = n + 5; // Полная запись
n += 5; // Короткая запись

// *Операторы сравнения
console.log(5 > 2); // Больше
console.log(5 < 2); // Меньше
console.log(5 >= 2); // Больше или ровно
console.log(5 <= 2); // Меньше или ровно

console.log(5 == 5); // Равенство
console.log(5 == '5');
console.log(5 != 5); // Отрицание
console.log(5 != 7);
console.log(5 != '7');

console.log(5 === 5); // Строгое равенство
console.log(5 === '5');
console.log(5 !== 5); // Строгое отрицание
console.log(2 !== 5);
console.log(2 !== '5');

// * Объект Math
console.log(Math.floor(2.255)); // Округляет в меньшую сторону
console.log(Math.ceil(2.255)); // Округляет в большую сторону
console.log(Math.round(2.555)); // Округляет до ближайшего
console.log(Math.trunc(2.255)); // Удаление дробной части

console.log(Math.random()); // Возвращает случайное число от 0 до 1
console.log(Math.max(2, 5, 7)); // Возвращает большее число
console.log(Math.sqrt(22)); // Возвращает корень числа
console.log(Math.pow(5, 2)); // Возводит в степень

// * 'String' - "Строка"
let myString = "String text.";
let myStr = 'Str text.';

// Экранирование символом - \"Text\"
// Табуляция - \t
// Перенос строки \n
console.log('\t Some \n "string" text');

// Оператор конкатенации +
// Если в выражении есть число, то оно приводится в строку
console.log('Hello' + ' ' + 5 + ' my friend!');

// * Популярные методы и свойства при работе со строками
let str = 'Hello my friend!';

console.log(str.length); // Обратился к переменной str и через . сказал переменной, что буду обращаться к чему-то, что будет относиться к переменной и обратился к названию свойства lenght

console.log(str.toUpperCase()); // Обратился к переменной str и через . сказал переменной, что буду обращаться к чему-то, что будет относиться к переменной и через () вызвал метод toUpperCase
console.log(str.toLocaleLowerCase());

console.log(str[1]); // Позволяет получить определённый символ из строки, отчёт начинается с 0

// Как получить целый кусок строки
let strLong = 'Hello my friend!';

console.log(strLong.substring(2)); // Возвращает строку с указанного нами символа, в данном примере это 2, отчёт начинается с 0
console.log(strLong.substring(2, 5)); // Возвращает строку с указанных нами символов начала и конца, в данном примере это 2 и 5, отчёт начинается с 0

console.log(strLong.slice(2, 5)); // Тоже самое, что и метод substring, но умеет принимать отрицательные значения и делает отчёт с конца строки
console.log(strLong.slice(2, -2));
console.log(strLong.slice(-5, -2));

// Поиск в строке
let strSearch = 'Hello my friend!';

console.log(strSearch.indexOf('my')); // Метод проходит по исходной строке и если найдёт совпадения, то вернёт индекс, с которого начинается это совпадение. Указывать можно как один символ, так и целую строку
console.log(strSearch.includes('my')); // Метод проходит по исходной строке и если найдёт совпадения, то вернёт true, в ином лсучае вернёт false.

console.log(strSearch.replace('my', 'best')); // Метод проходит по исходной строке и если находит совпадение по первому параметру my, то заменит его на значение второго параметра best

// Разбиение строки на массив
let strMassive = 'Hello my friend!';
let strMassiveComma = 'Hello, my friend, Ser!';

console.log(strMassive.split()); // Если ничего не указывать, то преобразают строку в массив
console.log(strMassive.split('')); // Если указать пустой параметр с кавычками '', то строка разобьётся на массив с несколькими значениями
console.log(strMassive.split(' ')); // Если указать параметр пробел ' ', то строка разобьётся на массив с несколькими значениями

console.log(strMassiveComma.split(', ')); // Если указать параметр запятой с пробелом ', ', то строка разобьётся на массив с несколькими значениями





// * Полезные методы из урока 5

// Метод isNaN() - если значение будет NaN, то вернёт true, в другом случае false
console.log(isNaN(2)); // вернёт false
console.log(isNaN(5)); // вернёт false
console.log(isNaN(5 * '5 sss')); // вернёт true

// Метод trim() - убирает пробелы слева и справа от первого и последнего символа строки и за символ он действительно принимает введённый символ игнорируя пробелы
console.log('     '.trim().length);
console.log('   s sdds ss  '.trim());

// Метод isFinite - проверяет является ли переданное значением конечным числом, не пропускает строку, которая не является числом
console.log(isFinite(2)); // вернёт true
console.log(isFinite('5')); // вернёт true
console.log(isFinite('5' * 5)); // вернёт true
console.log(isFinite('5 asdasd')); // вернёт false
console.log(isFinite('5 asdasd' + 5)); // вернёт false