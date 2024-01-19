'use strict';

console.log('Index');

// Файл index.js собирает в себя все модули и запускает их

// * Создаём переменные, в которые поместим функции
// Внутри require() в виде строки '' передаём путь к нашему модулю. Расширение формата .js писать необязательно.
const burger = require('./modules/burger');
const slider = require('./modules/slider');
const sliderLibrary = require('./modules/sliderLibrary');