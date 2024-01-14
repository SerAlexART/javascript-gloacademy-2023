'use strict';

const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.createNewElement = function (innerTextElement) {
        let newElement;

        if (this.selector[0] === '.') {
            newElement = document.createElement('div');
            newElement.classList.add(this.selector.substring(1));
        } else if (this.selector[0] === '#') {
            newElement = document.createElement('p');
            newElement.setAttribute('id', this.selector.substring(1));
        }

        document.body.append(newElement);

        newElement.style.cssText += `
            box-sizing: border-box;
            width: ${width}px;
            height: ${height}px;
            padding: ${15}px;
            font-family: Roboto, Arial, sans-serif;
            font-size: ${fontSize}px;
            text-align: center;
            line-height: 100%;
            color: #FFFFFF;
            text-transform: uppercase;
            font-weight: 900;
            background-color: ${bg};
            border-radius: ${15}px;
        `;

        newElement.innerText = innerTextElement;
    };
};

const beautifulDiv = new DomElement('.card', '50', '500', 'lightseagreen', '25');
const beautifulId = new DomElement('#description', '45', '450', 'lightsalmon', '20');

beautifulDiv.createNewElement('Я дивный.');
beautifulId.createNewElement('Я индексный.');
