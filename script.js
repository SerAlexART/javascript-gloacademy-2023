let title = 'JavaScript - 2023/2024';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 5.555;
let rollback = 55;
let fullPrice = 555.555;
let adaptiv = true;

screens = screens.toLocaleLowerCase().split(', ');

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptiv);
console.log(screens.length);
console.log('Стоимость верстки экранов ' + screenPrice + ' рублей');
console.log('Стоимость разработки сайта ' + fullPrice + ' рублей');
console.log(screens);
console.log(fullPrice * (rollback / 100));

// console.log('First log.');
// alert('Important!');