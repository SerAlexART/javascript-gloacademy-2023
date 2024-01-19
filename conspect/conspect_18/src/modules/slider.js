'use strict';

// * Инкапсуляция кода
const sliderModule = () => {
    const slider = 'Slider';

    console.log(slider);
};

// * module.exports команда
// Таким образом мы экспортируем данную функцию sliderModule из файла, где находится эта функция
// module.exports = sliderModule;


// * export default и import
// Меняем строчку
// module.exports = sliderModule;
// на
// * export default sliderModule;

// Но в консоли будет ошибка. Если мы экспортируем по дефолту, то и импортировать должны по дефолту

// Нужно перейти в index.js, найти наш модуль (sliderModule) и заменить строчку
// const slider = require('./modules/slider');
// на
// * import sliderModule from './modules/slider';

//import sliderModule from './modules/slider';
export default sliderModule;