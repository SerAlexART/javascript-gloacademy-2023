'use strict';

// * ООП - Объектно-ориентированное программирование
// Программировать на языке JS можно используя два разных подхода:
//    1 - Функциональный подход - мы пишем набор функций и используем их по необходимости
//    2 - Объектно-ориентированный - в современном JS становится очень важным

// ООП это методика организации программы, структурирование кода и объединение сущностей и методов в единое целое. Основной принцип заставляет программиста структурировать свой код, а в современном JS это полезно. JS прототипно является ООП ориентированым языком.

// JS не является полноценным ООП языком, он прототипно ориентированный язык.


// * 1) Prototype - это скрытая ссылка объекта
// Прототип это объект из которого текущий объект черпает недостающие свойства и методы.
console.log('1) Prototype');

let array = [1, 2, 3, 4, 5];

console.log(array);

// Использует свойство прототипа array
console.log(array.join(', '));

// Использует свойство прототипа object, так как в предыдущем прототипе array не нашло свойство toString() и обратилось к прототипу array
console.log(array.toString());


// * __proto__  выводим прототип в консоль
console.log(array.__proto__);

// constructor это специальная функция конструктор, которая наделяет определённый объект необходимыми свойстами и методами например массив мы могли создать через конструктор Array

// Выводим прототип конструктора в консоль
console.log(Array.prototype);

// Видим, что прототипа одинаковые
console.log(array.__proto__ === Array.prototype);

// Когда мы создаём наш массив array он проходит через функцию контрустрор Array, которая наделяет его своим prototype/прототипом и поэтому наш массив array получает прототип Array именно от функции конструктора




// * 1-1) Object.create() - Пишем объект абстракцию шаблона человека на основе прототипа/prototype
console.log('\n \n 1-1) Object.create() - Пишем объект абстракцию шаблона человека');

const man = {
    hands: 2,
    legs: 2,
    eyes: 2,
    walk: function () {
        console.log('Я хожу.');
    },
    talk: function () {
        console.log('Я говорю.');
    }
};

// * Object.create()
// Необходимо передать тот шаблон на основе которого мы будем создавать новый объект

// На основе шаблона man попробуем создавать новых людей и ему будут присвоены все характеристики самого prototype объекта man который мы передали
const newMan = Object.create(man);

console.log(newMan); // Будет пустой объект

newMan.walk();
console.log(newMan.hands);
console.log(newMan);

// Придаём объекту newMan уникальные значения
newMan.name = 'Ser';
newMan.age = 31;

console.log(newMan); // Будет уже непустой и уникальный объект со свойстами из prototype man. То-есть помимо базовых для человека свойст есть уникальные черты


// Создаём ещё уникальный объект newWoman на основе прототипа man
const newWoman = Object.create(man);
newWoman.name = 'Polly';
newWoman.age = 33;

console.log(newWoman);


// * 1-2) Пример с должностями и сотрудниками
console.log('\n \n 1-2) Пример с должностями и сотрудниками');

const worker = {
    workPlace: 1,
    dinner: 1,
    goToWork: function () {
        console.log('Иду на работу.');
    },
    leaveWork: function () {
        console.log('Ухожу с работы.');
    },
    work: function () {
        console.log('Работаю.');
    },
    sayHello: function () {
        console.log('My nale is ' + this.name);
    }
};


const frontEndDev = Object.create(worker);
const backEndDev = Object.create(worker);

frontEndDev.dinner = 2; // Меняем свойство dinner у всех frontEndDev
frontEndDev.role = 'Front End Developer';
backEndDev.role = 'Back End Developer';


console.log('Я ' + frontEndDev.role);
frontEndDev.work();
console.log(frontEndDev);

console.log('\n Я ' + backEndDev.role);
backEndDev.work();
console.log(backEndDev);


// * 1-3) Переопределяем метод work - интерпретатор находит этот метод в объекте и дальше его не ищет в Prototype
console.log('\n \n 1-3) Переопределяем метод work');

frontEndDev.work = function () {
    console.log('\n Делаю вёрстку интересного дизайна.');
};

backEndDev.work = function () {
    console.log('\n Изучаю базу данных.');

};

console.log(frontEndDev);
frontEndDev.work();

console.log(backEndDev);
backEndDev.work();

// * 1-4) Устраиваем в компанию несколько людей на позицию frontEndDev и backEndDev
console.log('\n \n 1-4) Устраиваем в данную компанию несколько людей на позицию frontEndDev');
const developer_1 = Object.create(frontEndDev);
const developer_2 = Object.create(frontEndDev);
const developer_3 = Object.create(frontEndDev);
const developer_4 = Object.create(backEndDev);
const developer_5 = Object.create(backEndDev);

// Задаём уникальное свойств в виде name
developer_1.name = 'Ser';
developer_2.name = 'Polly';
developer_3.name = 'Elise';
developer_4.name = 'Amily';
developer_5.name = 'Adriya';


developer_1.sayHello();
developer_2.sayHello();
developer_3.sayHello();
developer_4.sayHello();
developer_5.sayHello();

console.log(developer_1);
console.log(developer_2);
console.log(developer_3);
console.log(developer_4);
console.log(developer_5);

// * 1-5) hasOwnProperty() - проверят свойство, которое хотим проверить
// В параметр () передаём свойство, которое хотим проверить. Возвращает булевое значение и игнорирует прототипы объекта. Можем проверить есть ли у объекта необходимое свойство.

// Ещё можем проверить, является ли объект прототипом другого объекта
console.log('\n \n 1-5) hasOwnProperty() - проверят свойство, которое хотим проверить');

// Вернёт true
console.log(developer_1.hasOwnProperty('name'));

// Вернёт false, так как свойство role является прототипом объекта developer_1 и напрямую не относится к объекту developer_1
console.log(developer_1.hasOwnProperty('role'));

// Вернёт true, так как мы проверяем свойство role прототипа объекта developer_1
console.log(developer_1.__proto__.hasOwnProperty('role'));

// Вернёт false, так как свойство workPlace является прототипом объекта worker напрямую не относится к объекту developer_1.__proto__.hasOwnProperty
console.log(developer_1.__proto__.hasOwnProperty('workPlace'));

// Вернёт true, так как мы проверяем свойство workPlace прототипа прототипа developer_1, то-есть обращаемся к worker
console.log(developer_1.__proto__.__proto__.hasOwnProperty('workPlace'));


// * 1-6) isPrototypeOf - проверяет является ли объект прототипом другого объекта
console.log('\n \n 1-6) isPrototypeOf - проверяет является ли объект прототипом другого объекта');

// Проверяем, являвется ли frontEndDev прототипом объекта developer_1 - вернёт true
console.log(frontEndDev.isPrototypeOf(developer_1));

// Проверяем, являвется ли frontEndDev прототипом объекта developer_5 - вернёт false, так как прототипом являвется backEndDev
console.log(frontEndDev.isPrototypeOf(developer_5));




// * 2) Conctructor - Функция конструктор
// Это абсолютно любая функция, которая использует оператор new для создания новой сущности. Принято называть с большой буквы.
// Помогает создавать множество одинаковых объектов с уникальными именами переменных и свойств внутри этих обхектов.
// Это просто абстракиця, описание будущего объекта, который мы будем создавать на основе конструктора/conctructor
console.log('\n \n \n \n \n 2) Conctructor - Функция конструктор');


// Person - имя функции конструктора, его мы задаём сами
const Person = function (name) { // name - оператор функции конструктора, его мы задаём сами
    this.name = name;
    // На самом деле возвращается this (return this;)

    //  + - что есть доступ к скрытым переменным. age это скрытая переменная
    const age = 31;

    // Методы можно создавать сразу внутри конструктора и они будут принадлежать самому объекту, а не прототипу, что и + и -
    this.message = function () {
        console.log('Мне ' + age + ' год.');
    };

};

const person_1 = new Person('Ser');
const person_2 = new Person('Polly');
const person_3 = new Person();

console.log(person_1);
console.log(person_2);
console.log(person_3);

// * 3) Чем отличается функция conctructor от обычной функции?
//   1 - функуция конструктор всегда вызывается через оператор new
//   1 - в () передаём аргументы, но их можно и не указывать, объект всё-равно создатся

console.log('\n \n \n \n \n 3-1) Чем отличается функция conctructor от обычной функции?');
// * Когда интерпретатор считает оператор new, то в JS будет создан пустой объект, сначала он будет пустой, а уже затем вызывается сама функция (в нашем примере это Person), а новому пустом объекту перенаправляется контекст вызова this, а далее новому объекту приписывается значение свойства, которые мы описали в функции конструктора и возвращет нам новый объект. Этот объект мы и передаём при создании допустим person_1


// У объекта person_4 есть только прототип/prototope объекта/object со всеми методами и свойстами, которые этот object даёт. А у person_1 есть такой же прототип/prototope + есть конструктор/constructor в виде Person у которого есть ещё дополнительные свойства и методы, которые мы можем создавать и добавлять
const person_4 = {
    name: 'Amily'
};

console.log(person_4);

// * 3-1) Добавляем в конструктор Person новые методы через prototype
console.log('\n \n 3-2) Добавляем в конструктор Person новые методы через prototype');

// * РЕКОМЕНДУЕТСЯ вешать новые методы через prototype
Person.prototype.sayHello = function () {
    console.log('Hello, my name is ' + this.name + '.');
};

person_1.sayHello();
person_1.message();
console.log(person_1);

// Методы можно создавать сразу внутри конструктора и они будут принадлежать самому объекту, а не прототипу, что и + и -

// * + - что есть доступ к скрытым переменным см. строку 221
// Если мы попробуем обратиться к переменной age, то получим undefined. age это скрытая переменная. Внутри объекта или конструктора не сможем увидить переменную
console.log(person_1.age);


// * - представим, что на основании данного конструктора Person мы можем создавать множество разных объектов и у каждого объекта будет свой собственный метод message. Они не будут равны, это будут абсолютно разные методы из-за использования скрытой переменной
// Проверяем, что метод message разных объектов не равны - получим false
console.log(person_1.message === person_2.message);

// А если создаём через prototype, то получим true, так как они принадлежат прототипу. Мы не создаём этот конструктор каждый раз. Функция конструктор отдаёт свой метод  новому объекту, а метод принадлежит прототипу.
// * Представим, что нам нужно создавать тысячи объектов, то насколько это загрузит память. Если мы будем создавать методы через prototype конструктора, то сильно разгруим память
// ! Мы можем создать скрытую переменную внутри метода через prototype, но это НЕ ЛУЧШИЙ подход, так как на прототип функции конструктора может быть навешано очень много разных методов, которые вообще могут находиться в других файлах и искать какие-то переменные будет очень-очень неудобно
console.log(person_1.sayHello === person_2.sayHello);

// * 3-2) instanceof - проверяет зависит ли указанный объект от указанного конструктора
console.log('\n \n 3-2) instanceof - проверяет зависит ли указанный объект от указанного конструктора');


// Используя isPrototypeOf мы точно определяем является ли прототип конструктора Person прототипом объекта person_1. Пользоваться этим через подобную вложенность не очень удобно, потому что нужно обращаться к prototype
console.log(Person.prototype.isPrototypeOf(person_1));

// Поэтому есть оператор instanceof
console.log(person_1 instanceof Person);




// * 4) НАСЛЕДОВАНИЕ
// В языке JS можно часто услышать, что подобные функции конструкторы называют КЛАССАМИ
// А всё происходящее при создании нового объекта, например перенаправление контекста вызова на новосозданный объект, принятие в новосозданный объект всех свойст и методов из функции конструктора принятием прототипа функции конструктора в новосозданный объект называют НАСЛЕДОВАНИЕМ.
// Могут быть целые ЦЕПОЧКИ НАСЛЕДОВАНИЯ
console.log('4) НАСЛЕДОВАНИЕ');


// Создаём функцию конструктор newPerson
const PersonCreate = function (name) {
    this.name = name;
};

// Создаём метод для фуонкции конструктора newPerson
PersonCreate.prototype.sayHello = function () {
    console.log('My name is ' + this.name);
};

// Создаём функцию конструктор Student
const StudentCreate = function (name, role) {
    // * Чтобы получить все характеристики PersonCreate нужно использовать метод call
    // Меняем контекст вызова и передаём аргументы
    PersonCreate.call(this, name);
    this.role = role;
};

// Создаём новую сущность newStudent прототипом которой является функция конструктор Student, в которую передали два аргумента name и role
let newStudent = new StudentCreate('Ser', 'Junior');
console.log(newStudent);

// Так как name должно относиться к персоне/Person, то логичнее было бы создавать студента наследуясь от newStudent, а newStudent наследовалось бы от PersonCreate. Тут нам поможет Object.create()

// Связываем прототип StudentCreate с прототипом PersonCreate
StudentCreate.prototype = Object.create(PersonCreate.prototype);
newStudent = new StudentCreate('Ser', 'Junior');
console.log(newStudent);

// Но теперь у самого StudentCreate нет конструктора и нам необходимо его создать
StudentCreate.prototype.consctructor = StudentCreate;
console.log(newStudent);

// Теперь мы имее целую цепочку наследований. Имеет прототип PersonCreate от кого наследуется прототип StudentCreate, а от прототипа StudentCreate наследуется каждый newStudent