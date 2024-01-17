'use strict';

// * Особенности современного стандарта ES6 - ECMAScript 6
// На самом деле комитет выпускает стандарт каждый год, но ES6 привнёс в язык наибольшее количество глобальных нововведений, о самых важных мы поговорим и рассмотрим
console.log('Особенности современного стандарта ES6 - ECMAScript 6');


// 1) Start Code
console.log(`____________________________________________________________________________________

`);


// * 1) let и const вместо var
console.log('1) let и const вместо var');
// Переменная заданная через var объявляется в глобальном объекте window и её области видимости
// Переменная заданная через let или const объявляется внутри области видимости и не записываются в глобальный объект window, а это разрешает кучу проблем
var a = 2;
let b = 5;
const c = 25;

console.log(window);

// * 1-1) Пример с циклом var и let - var
console.log('\n \n 1-1) Пример с циклом var и let - var');
for (var a = 0; a < 5; a++) {
    console.log(window);
    setTimeout(() => {
        // Выведет в консоль 5 раз, так как переменная a была создана в глобальном объекте и ей сразу было присвоено значение 5
        console.log(a);
    });
}

console.log('\n \n Пример с циклом var и let - let');
for (let a = 0; a < 5; a++) {
    console.log(window);
    setTimeout(() => {
        // Выведет в консоль 5 раз, так как переменная a была создана в глобальном объекте и ей сразу было присвоено значение 5
        console.log(a);
    });
}


// * 1-2) let определяет изменяемые переменные, а const нет
console.log('\n \n 1-2) let определяет изменяемые переменные, а const нет');

let d = 2;
d = 5;
console.log(d);

// У const нельзя переопределить значение
// const dd = 2;
// dd = 5;

// У const есть маленький нюанс например с массивом, изменить напрмяую значение мы не можем, но добавить новое значение в массив возможно
const e = [1, 2, 3, 4];
e.push(5);
console.log(e);

// Тоже самое и с объектами/object
const f = {
    a: 1,
    b: 2
};

f.c = 3;

console.log(f);


// * 1-3) Стрелочные функции =>
// Имеют несколько приятных нюансов, к примеру более краткую запись, но главным их преимущество является полное преимущество собственного контекста вызова.
console.log('\n \n 1-3) Стрелочные функции =>');

const foo = (name, age) => {
    console.log('\n Example-1');
    console.log('Hello, my name is ' + name + '.');
    console.log('I am ' + age + ' year old.');
};

foo('Ser', 31);


const user = {
    name: 'Ser',
    age: 31,
    sayHello: function () {
        const foo = (name, age) => {
            console.log('\n \n Example-2');
            console.log('Hello, my name is ' + name + '.');
            console.log('I am ' + age + ' year old.');
        };

        foo('Ser', 31);
    },
    // * Можем переписать на => и метод message объекта user удалив :function
    message() {
        console.log('\n \n Example-3');
        console.log(this);

        const foo = (name, age) => {
            console.log(this);
            console.log('Hello, my name is ' + name + '.');
            console.log('I am ' + age + ' year old.');
        };

        foo(this.name, this.age);
    },
    showThis() {
        console.log(this);
    }
};

user.sayHello();
user.message();


// * addEventListener
const elementBody = document.querySelector('body');

elementBody.style.minHeight = '100vh';
elementBody.style.boxSizing = 'border-box';
elementBody.style.margin = '0';
elementBody.style.padding = '15px';

// Покажет body, хоть body запускает метод showThis, но body передаёт сама себя контекстом вызова
elementBody.addEventListener('click', user.showThis);

// Покажет объект user как контекст вызова, нам в этом помогает => функция
elementBody.addEventListener('click', () => {
    user.showThis();
});


console.log(elementBody);




// * 1-4) Значения параметров по умолчанию
console.log('\n \n 1-4) Значения параметров по умолчанию');

const fooA = (name = 'Ser', age = 31) => {
    console.log('Hello, my name is ' + name + '.');
    console.log('I am ' + age + ' year old.');
};

fooA();
fooA('Ser Alex', 31.5);




// * 1-5) Интерполяция или по простому шаблонные строки - `Обратные кавычки Бэктики` - ${}
// Между ними можем указывать не только текст, но и переменные, а так же целые JS выражения
// ${}
// ${age + 5}
// Можно указывать тернарный оператор, который по условию будет выводить нужное сообщение
console.log('\n \n 1-5) Интерполяция или по простому шаблонные строки - `Обратные кавычки Бэктики` - ${}');

const fooB = (name = 'Ser', age = 31) => {
    // На данный момент сообщение в консоль выводится в виде отдельных строк, так как используется два метода console.log()
    console.log('Hello, my name is ' + name + '.');
    console.log('I am ' + age + ' year old.');

    //Можно объеденить всё в один метод при этом, чтобы информация была в две строки, но подобные вещи можно делать гораздо проще через бэктики `
    console.log('\n');
    console.log('Hello, my name is ' + name + '.\n' + // Делаем перенос через \n
        'I am ' + age + ' year old.');

    // ` Обратные кавычки
    console.log('\n');
    console.log(`Hello, my name is ${name}. I am ${age + 0.2} year old.`);
};

fooB('Ser Alex', 31.5);
