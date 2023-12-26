'use strict';

// * API браузера Storage и Cookie - имеют свои особенные методы помимо стандартных
// Данные API реализуют на стороне браузера своеобразные контейнеры, которые мы можем наполнять информацией. Это нужно, чтобы мы могли сохранить в браузере определённую информацию, которую мы сможем получить даже после перезагрузки страницы. Например Cookie реализуют разнообразную авторизацию.


// * https://mdn.github.io/dom-examples/web-storage/
// В DevTools есть вкладка Application > слева есть целый ряд разных контейнеров
// Контейнер наполняется выбранной информацией и подтягивается в момент повторного открытия страницы.


// * 1) LocalStorage - сам по себе является глобальным объектом и вся информация хранится в виде ключ:значение (предельный объём в 10mb)

// Сохраняется до тех пор, пока через JS или расширение мы не удалим эти данные.
// Как пример подходит для хранения информации о корзине

// https://mdn.github.io/dom-examples/web-storage/
// В DevTools есть вкладка Application > слева есть целый ряд разных контейнеров
// Контейнер наполняется выбранной информацией и подтягивается в момент повторного открытия страницы.

console.log(localStorage); // Получаем доступ к данным localStorage

localStorage['name_01_1'] = 'Ser Alex - 01_1';
localStorage.name_01_2 = 'Ser Alex - 01_2';

console.log(localStorage.name_01_2);

// Объект localStorage имеет свои особенные методы для работы

// * 1-1) setItem - добавляет в объект новый ключ со значением
// В данный метод необходимо передать два аргумента
// В 1-ый аргумент - название ключа
// В 2-ой аргумент - значение ключа
localStorage.setItem('name_02', 'Ser Alex - 02');
console.log(localStorage.name_02);

// * 1-2) getItem - данный метод принимает только один аргумент в виде ключа того свойства, которое мы хотим получить
console.log(localStorage.getItem('name_02') + ' метод getItem.');


// * 1-3) removeItem - данный метод принимает только один аргумент в виде ключа того свойства, которое мы хотим удалить
localStorage.removeItem('name_02');
console.log(localStorage.getItem('name_02') + ' removeItem.'); // Вернёт null, так как мы удали ключ 'name_02


// * 1-4) clear - чистит абсолютно все свойства внутри объекта localStorage, то-есть полностью обнуляет
// localStorage.clear();
// console.log(localStorage);


// * Работа с HTML вёрсткой
console.log('Работа с HTML вёрсткой');

const fieldset_01 = document.querySelector('#fieldset_01');
const input_01 = document.querySelector('#input_01');
const btnSave_01 = document.querySelector('#btn_save_01');
const btnRemove_01 = document.querySelector('#btn_remove_01');
const text_01 = document.querySelector('#text_01');


// * LocalStorage сохраняет новое значение в браузере до тех пор, пока мы не очистим это значение через JS или плагины браузера. Это отличает его от sessionStoage
const showText_01 = function () {
    text_01.textContent = localStorage.getItem('text_01');
};

btnSave_01.addEventListener('click', function () {
    localStorage.setItem('text_01', input_01.value);
    showText_01();
});

showText_01();




// * 2) SessionStoage - сохраняет новое значение в браузере до тех пор, пока ОТКРЫТА (обновление страницы не считается) вкладка в браузере (предельный объём в 5mb)
// Подходит для хранения к примеру идентификаторов/id секций. Допустим нужно сделать одностраничный LP, но с 5 секциями, где будет отображаться только одна. То-есть переход по сайту внутри одной страницы.
const fieldset_02 = document.querySelector('#fieldset_02');
const input_02 = document.querySelector('#input_02');
const btnSave_02 = document.querySelector('#btn_save_02');
const btnRemove_02 = document.querySelector('#btn_remove_02');
const text_02 = document.querySelector('#text_02');


const showText_02 = function () {
    text_02.textContent = sessionStorage.getItem('text_02');
};

btnSave_02.addEventListener('click', function () {
    sessionStorage.setItem('text_02', input_02.value);

    showText_02();
});

showText_02();

// * Очищаем LocalStorage и SessionStoage
btnRemove_02.addEventListener('click', function () {
    localStorage.clear();
    sessionStorage.clear();
    showText_01(); // Обновляем текст
    showText_02(); // Обновляем текст
});




// * 3) Cookie - являвется частью http протокола (включить LiveServer)
// Информация из куки чаще всего улетает вместе с запросом на сервер. Служит для хранения данных для работы с сервером.


// * 3-1) Записываем информацию в Cookie (передаём в виде строки '')
document.cookie = 'name_3_1=Ser Alex - 03_1';

// У каждой Cookie есть Domain с которого она будет доступна. По умолчанию берётся тот Domain, с которого она была создана. Но есть ограничение, мы не можем указать какой-то другой Domain

// * DOMAIN - То-есть если эту Cookie создаёт домен Site.com, то она никак не будет доступна на сайте MySite.com. Но на поддомене мы её получить действительно можем

// * Path - Путь по которому будет доступна данная Cookie

// * Spries / Max-Ages - жизненный цикл или длительность жизни (указывает длительность жизни данной Cookie)



// * 3-2) Указываем длительность жизни Cookie через max-age и expires
// * max-age - указываем в секундах и это будет конец жизни Cookie
document.cookie = 'name_3_2=Ser Alex - 03_2; max-age=3600';

// * expires - указываем дату в специальном формате и это будет конец жизни Cookie
document.cookie = 'name_3_3=Ser Alex - 03_3; expires=31 2024 Dec 00:00:00 GMT';

// Такой формат даты соврешенно не удобен в использовании, но необходимо подстроиться под него



// * 3-3) Создаём конструктор Date для expires через метод (конструктор Date - тема будущих уроков)
// Если в конструктор не передавать аргументов, то вернёт сегодняшнюю дату
let date_01 = new Date();
console.log(date_01);

// Можем передать кастомную дату (Год, Месяц, День, Часы, Минуты, Секнды)
// ! Месяца начинаются с 0-ого индекса + стоит учитывать часово пояс
let date_02 = new Date(2035, 11, 22, 2, 55, 22);
console.log(date_02);
console.log(date_02.toUTCString()); // Используем метод toUTCString, чтобы получить точную дату и время

document.cookie = 'name_3_4=Ser Alex - 03_4; expires=' + date_02.toUTCString();



// * 4) Сохранение объектов в Cookie через объект JSON и его методы
// Довольно часто в Cookie кладут информацию не только связанную с серверной работой, то-есть мы можем хранить в Cookie абсолютно любую информацию, которая нам необходимая для работы сайта. Например мы заходим на сайт, где показывается баннер > мы его закрываем > и далее сколько раз мы бы не заходили, но данный баннер будет закрыт.

// Почему не храним подобное в LocalStorage а в Cookie? Всё довольно просто, потому что больший % состоит из страниц PHP, а сам PHP не очень хорошо работает с LocalStorage и не имеет прямого доступа, поэтому ему приходиться обращаться к нему через JS. Именно поэтому гораздо проще сохранить информацию в Cookie, чтобы через PHP проверять данные Cookie. PHP очень хорошо работает с Cookie.

const user_1 = {
    name: 'Ser',
    city: 'SPB'
};

// * JSON.stringify
//  'user_1='   - часть строки будет являться ключом данной Cookie
//  Переводим объект в строку user_1 и сохраняем его в виде строки '' через метод stringify
document.cookie = 'user_1=' + JSON.stringify(user_1);

// ! У контейнера Cookie есть свои ограничения!
// * Его вместимость 4кб
// * Не более 20 Cookie для одного Domain
// * Не рекомендуется сохранять в контейнер Cookie большие и весомые объекты такие как корзина товаров, так как они могут перевесить 4кб
// * Не рекомендуется сохранять в контейнер Cookie важную пользовательскую информацию как аккаунты и пароли, так как вредоносная программа может их отправить через протокол http и другой человек может получить доступ к аккаунту пользователя