'use strict';

const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');


// * 3) То-есть нам нужно создать массив, в котором мы в виде объектов будем хранить каждую нашу ToDoo`шку
let toDoData = [
    // 1-ое свойство будет содержать текст
    // 2-ое свойство будет содержать состояние выполнено/не выполнено
    // {
    //     text: 'Сварить кофе',
    //     completed: false
    // },
    // {
    //     text: 'Помыть посуду',
    //     completed: true
    // }
];

const saveLocalStorageToDo = function () {
    console.log('Save');
    localStorage.setItem('ToDoList', JSON.stringify(toDoData));
};

const loadLocalStorageToDo = function () {
    if (localStorage.length > 0) {
        console.log('Load Function IF > 0');
        toDoData = JSON.parse(localStorage.getItem('ToDoList'));
        console.log(toDoData);
        console.log(toDoData.length);
        render();
    }

    console.log('Load Function');
    console.log(toDoData);
};

// * 2) Отрисовывать данная функция будет перебором определённый массив toDoData
const render = function () {

    // * 12) Очищаем списки, чтобы они не дублировались при добавлении новых ToDo
    todoList.innerHTML = '';
    todoCompleted.innerHTML = '';

    // * 9) Перебираем массив с объектами через метод forEach
    toDoData.forEach(function (item, index) {

        // * 10) При каждой итерации forEach создаём элемент li с классом todo-item
        const li = document.createElement('li');

        li.classList.add('todo-item');

        li.innerHTML = '<span class="text-todo">' + item.text + '</span>' +
            '<div class="todo-buttons">' + // Каждый тег оборачиваем в ''
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
            '</div>';

        // * 11) Добавляем в список элементы li через append с условием completed
        if (item.completed === false) {
            todoList.append(li);
        } else {
            todoCompleted.append(li);
        }

        // * 13) Обрабатываем статус completed при клике на кнопку с галочкой внутри элемента li. При клике на эту кнопку меняем свойство completed нашего item на противоположное + снова запускаем функцию render, чтобы элементы отрисовывались
        li.querySelector('.todo-complete').addEventListener('click', function () {
            item.completed = !item.completed;

            // localStorage.setItem('ToDoList', JSON.stringify(toDoData));
            // saveLocalStorageToDo();
            // loadLocalStorageToDo();
            render();
        });

        // * 14 ) Удаляем элемент при нажатии на кнопку с корзиной
        li.querySelector('.todo-remove').addEventListener('click', function () {
            toDoData.splice(index, 1);

            // saveLocalStorageToDo();
            // localStorage.setItem('ToDoList', JSON.stringify(toDoData));
            // loadLocalStorageToDo();
            render();
        });

        // saveLocalStorageToDo();
        // localStorage.setItem('ToDoList', JSON.stringify(toDoData));

    });

    // localStorage.setItem('ToDoList', JSON.stringify(toDoData));
    saveLocalStorageToDo();
    console.log('Render');
    console.log(toDoData);
};

// * 1) На форму вешаем слушатель submit. При данном событии форма попытается отправить данные из каждого input через get запрос, что спровоцирует перезагрузку страницы. Чтобы остановить эту перезагрузку, мы должны использовать метод preventDefault объекта event
todoControl.addEventListener('submit', function (event) {
    event.preventDefault();

    // Пустые дела добавляться не должны
    if (headerInput.value === '') {
        alert('Заполните поле с планом =)');
    } else {
        // * 5) Создаём новый объект с текстом из введённого input
        const newToDo = {
            text: headerInput.value,
            completed: false
        };

        // * 6) Добавляем новый объект в массив
        toDoData.push(newToDo);

        // * 7) Очищаем input делая его пустым после добавления нового объекта
        headerInput.value = '';

        // * 8) Запускаем перебор массива с объектами включая новый добавленный
        render();
    }
});

loadLocalStorageToDo();