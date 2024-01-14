'use strict';

// 1 this
console.log('EXAMPLE 1 - this');

const item_1 = {
    name: 'Ser',
    price: 5,
    calculatePrice: function (discont = 0) {
        console.log(this);
        console.log(this.price - discont);
    }
};

item_1.calculatePrice();
item_1.calculatePrice(2);


// 2 call
console.log('\n \n \n EXAMPLE 2 - call');

const myFn = function () {
    console.log(this);
};

myFn();

const item_2 = {
    name: 'Ser'
};

myFn.call(item_1);
myFn.call(item_2);


// 3 bind
console.log('\n \n \n EXAMPLE 3 - bind');

const calculateDiscont = function (age = 0) {
    if (age >= 55) {
        console.log(this.price / 2);
    } else if (age < 55 && age !== 0) {
        console.log(this.price * 2);
    } else {
        console.log(this.price);
    }
};

const person_1 = {
    name: 'Ser',
    price: 55
};

const calculateDiscontPerson_1 = calculateDiscont.bind(person_1);

calculateDiscontPerson_1();
calculateDiscontPerson_1(31);
calculateDiscontPerson_1(55);

// 4 =>
console.log('\n \n \n EXAMPLE 4 - =>');

const obj = {
    getThis_1: function () {
        console.log(this);
    },
    getThis_2: () => {
        console.log(this);
    },
    innerObj: {
        getThis_3: () => {
            console.log(this);
        },
    },
    innerObj2: {
        getThis_4: function () {
            console.log(this);
        },
    }
};

obj.getThis_1();
obj.getThis_2();
obj.innerObj.getThis_3();
obj.innerObj2.getThis_4();
