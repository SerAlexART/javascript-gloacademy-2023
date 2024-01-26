'use strict';

// * 1) setTimeout, setInterval и requestAnimationFra
// Методы глобального объекта window
console.log('1) setTimeout, setInterval и requestAnimationFra');


// 1) Start Code
console.log(`____________________________________________________________________________________

`);

// * 1-1) setTimeout(callback, 500ms)
// Внутрь этого метода нужно передать два аргумента:
//   1 - callback функция, которая и будет отробатывать через определённоё время
//   2 - количество ms, через которое сработаёт callback функция
console.log(' 1-1) setTimeout(callback, 500ms)');

// * Так как данный метод принадлежит глобальному объекту window, то можно удалить обращение к window, оставив простов setTimeout() + мы можем передавать ранее загтовленную функцию
// window.setTimeout(() => {
//     console.log('Привет, я setTimeout!');
// }, 2000);

const logger_1_1 = () => {
    console.log('Привет, я setTimeout!');
};

// Стоит обратить внимание, что внутри setTimeout мы не пишем () у функции logger_1, так как метод setTimeout сам вызывает функцию
setTimeout(logger_1_1, 200);


// Но что если в функции нам нужно передавать аргумент?
const logger_1_2 = (str) => {
    console.log(`Привет, я ${str}!`);
};

// * Если мы попробуем передать аргумент в виде строки, то функция logger_1_2 вызовется сразу
// setTimeout(logger_1_2('поломанный setTimeout и вызывался сразу'), 205);


// * Чтобы нам запустить функцию logger_1_2 с заддержкой, нам нужна функция обёртка
setTimeout(() => {
    logger_1_2('setTimeout с аргументом и функцией обёрткой');
}, 2005);




// * 1-2) setInterval
// Отрабатывает указанную функцию каждый раз через указанный нами интервал
console.log('\n \n 1-2) setInterval');

setInterval(() => {
    logger_1_2('setInterval с аргументом и функцией обёрткой');
}, 2005);




// * 1-3) clearTimeout() - Сбор setTimeout()
// Для чего нужен? Дело в том, что в коде одовременно могут работать сразу несколько setTimeout. Каждый метод setTimeout возвращает свой идентификатор и это означает, что мы можем занести его в переменную
// * В данный метод нам наобходимо передать идентификатор конкретного setTimeout, который мы хотим почистить, но прежде нужно сохранить его в переменную
console.log('\n \n 1-3) clearTimeout - Сбор setTimeout');

const logger_1_3 = (str) => {
    console.log(`Привет, я ${str}!`);
};

// Сохраняем id setTimeout в переменную
let idTimeout = setTimeout(() => {
    logger_1_3('clearTimeout');
}, 2015);

// Очищаем конкретный setTimeout
clearTimeout(idTimeout);




// * 1-4-1) clearInterval - Сбор setInterval
// Метод clearInterval работает как и метод clearTimeout
// Нам нужно получить id конкретного интервала
console.log('\n \n 1-4-1) clearInterval - Сбор setInterval');

const logger_1_4_1 = (str) => {
    console.log(`Привет, я ${str}!`);
};

// Сохраняем id setTimeout в переменную
let idInterval_1 = setTimeout(() => {
    logger_1_4_1('ClearInterval');
}, 2030);

// Очищаем конкретный clearInterval
clearInterval(idInterval_1);




// * 1-4-2) Давайте немного усложним логику очистки интервала (clearInterval)
console.log('\n \n 1-4-2) Давайте немного усложним логику очистки интервала (clearInterval)');

// Мы создадим переменную count равную нулю
let count = 0;

const logger_1_4_2 = (str) => {
    console.log(`Привет, я ${str} и мой count = ${count}!`);
};

let idTimeout_2 = setTimeout(() => {
    logger_1_4_2('clearTimeout');
}, 2015);

clearTimeout(idTimeout_2);

let idInterval_2 = setInterval(() => {
    // Увеличиваем count на единицу каждый интервал
    count++;
    logger_1_4_2(`ClearInterval`);

    // Если count === 10, то мы очищаем интервал
    if (count === 10) clearInterval(idInterval_2);
}, 500);




// * 1-4-3) Давайте немного поэексперементируем с setTimeout
console.log('\n \n 1-4-3) Давайте немного поэексперементируем с setTimeout');

let active = false;
// 2-ое выносим объявлении фунеции idTimeout_3 наружу
let idTimeout_3;

// Вешаем на document обработчик событий, чтобы менять значение active
document.addEventListener('click', () => {
    // * Подобную проверку переменной active и переопределение можно писать гораздо проще
    // * active = !active
    if (active) {
        active = false;
        console.log(active);
        console.log('11111111111');
    } else {
        active = true;
        console.log(active);
        console.log('222222');
    }

    logger_1_4_3('clearTimeout с обработчиком событий !!!');
});

const logger_1_4_3 = (str) => {
    // 4-ое, если active === true, то функция logger_1_4_3 запускается, в ином случае сбрасываем
    if (active === true) {
        console.log(`Привет, я ${str}!`);
        // 1-ое мы перенесём запуск idTimeout_3 в функцию logger_1_4_3
        // 3-е переопределяем значение idTimeout_3 внутрии функции logger_1_4_3
        idTimeout_3 = setTimeout(() => {
            logger_1_4_3('clearTimeout с обработчиком событий !!!');
        }, 2050);
    } else {
        clearTimeout(idTimeout_3);
    }
};




// * 1-4-4) Немного практики
// * Но с точки зрения анимации, это не лучшее применение, где стоит использовать setTimeout и setInterval из-за дёрганной анимации и нагрузки на процессор и браузер
console.log('\n \n 1-4-4) Немного практики');

// const airplane = document.querySelector('.airplane');
// const man = document.querySelector('.man');

// let countAir = 0;
// let idIntervalAir;

// const flyAnimate = () => {
//     countAir++;
//     console.log(countAir);


//     if (countAir < 250) {
//         // setTimeout(flyAnimate, 1);
//         man.style.top = countAir + 'px';
//         airplane.style.left = countAir * 2.5 + 'px';
//     } else if (countAir < 500) {
//         airplane.style.left = countAir * 2.5 + 'px';
//     } else {
//         clearInterval(idIntervalAir);
//     }
// };

// // flyAnimate();
// idIntervalAir = setInterval(flyAnimate, 1);


// * 1-5) requestAnimationFrame и cancelAnimationFrame
// Плавно без дёргания и нагрузки на процессор с бразуером анимирует функции с анимацией
console.log('\n \n 1-4) requestAnimationFrame и cancelAnimationFrame');

const airplane = document.querySelector('.airplane');
const man = document.querySelector('.man');

let activeAir = false;
let countAir = 0;

// Теперь будем записывать id метода requestAnimationFrame
let idIntervalAir;

const flyAnimate = () => {
    countAir++;
    // console.log(countAir);

    // Передаём анимирующуеся функцию flyAnimate
    idIntervalAir = requestAnimationFrame(flyAnimate);


    if (countAir < 250) {
        // setTimeout(flyAnimate, 1);
        man.style.top = countAir + 'px';
        airplane.style.left = countAir * 2.5 + 'px';
    } else if (countAir < 500) {
        airplane.style.left = countAir * 2.5 + 'px';
    } else {
        // * Передаём id нашего интервала
        cancelAnimationFrame(idIntervalAir);
    }
};


// flyAnimate();

document.body.addEventListener('click', () => {
    // Если active === true, то останавливаем анимацию
    if (active) {
        cancelAnimationFrame(idIntervalAir);
        active = false;
    } else {
        // Если active будет false, то мы должны снова запустить нашу анимацию
        idIntervalAir = requestAnimationFrame(flyAnimate);
        active = true;
    }
});