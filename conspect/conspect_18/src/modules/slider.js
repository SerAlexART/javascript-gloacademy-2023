'use strict';

// * Инкапсуляция кода
const sliderModule = () => {
    const slider = 'Slider';

    console.log(slider);
};

// * module.exports команда
// Таким образом мы экспортируем данную функцию sliderModule из файла, где находится эта функция
module.exports = sliderModule;