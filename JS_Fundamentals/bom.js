/* 7.1. 
За допомогою методів об’єкта window створити:
        1) нове вікно розміром 300х300 пікселів.
        2) із затримкою 2 сек змініть розміри вікна на 500х500 пікселів
        3) із затримкою 2 сек перемістіть вікно в точку з координатами (200, 200)
        4) із затримкою 2 сек закрийте вікно. */
/*
let newWindow = window.open('', '', 'width=300, height=300');
setTimeout(function(){
  newWindow.resizeTo(500, 500);
}, 2000);
setTimeout(function(){
  newWindow.moveTo(200, 200);
}, 4000);
setTimeout(function(){
  newWindow.close();
}, 6000);*/

/* 7.2. 
Для заданої HTML-сторінки:
<p id ='text'>I learning JavaScript events!</p> 
<div>
        <button . . . . . >Change style!</button>
</div>
напишіть функцію changeCSS(), яка спрацьовуватиме по кліку на кнопку і змінюватиме стиль вмісту тега <p>: колір шрифту – оранжевий, розмір шрифту 20px, шрифт сімейства "Comic Sans MS".
*/
function changeCSS() {
    let textElement = document.getElementById('text');
    textElement.style.color = 'orange';
    textElement.style.fontSize = '20px';
    textElement.style.fontFamily = 'Comic Sans MS';
}
let buttonElement = document.querySelector('button');
buttonElement.onclick = changeCSS;

/* 7.3. 
Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на кожному елементові:
        1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
        2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
        3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
        4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
        Приклад – курсор наведений на лінку.
https://user-images.githubusercontent.com/9075641/228461056-455d4dbf-527b-43de-a3dd-7c079dfbffed.png
*/
const button1 = document.querySelector('#btn1');
const button2 = document.querySelector('#btn2');
const button3 = document.querySelector('#btn3');
const link = document.querySelector('#link');
const body = document.querySelector('body');

button1.addEventListener('click', function () {
    body.style.backgroundColor = 'blue';
});
button2.addEventListener('dblclick', function () {
    body.style.backgroundColor = 'pink';
});
button3.addEventListener('mousedown', function () {
    body.style.backgroundColor = 'brown';
});
button3.addEventListener('mouseup', function () {
    body.style.backgroundColor = 'white';
});
link.addEventListener('mouseover', function () {
    body.style.backgroundColor = 'yellow';
});
link.addEventListener('mouseout', function () {
    body.style.backgroundColor = 'white';
});

/* 7.4. 
Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку. Можуть видалятися всі елементи в будь-якому порядку.
https://user-images.githubusercontent.com/9075641/228462160-e0584c12-eb4a-4973-b598-46e1cde9b941.png
*/
function removeSelected() {
    var select = document.getElementById("mySelect");
    select.remove(select.selectedIndex);
}

/* 7.5. 
Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення 
"I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!", а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".
Приклад роботи:
https://user-images.githubusercontent.com/9075641/228462490-a2ec423a-44e3-40f5-9c0a-7e9d207f2822.png 
*/
const button = document.getElementById('myButton');
button.addEventListener('click', function () {
    alert('I was pressed!');
});
button.addEventListener('mouseenter', function () {
    alert('Mouse on me!');
});
button.addEventListener('mouseleave', function () {
    alert('Mouse is not on me!');
});

/* 7.6. 
Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти) вікна браузера і виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення.
https://user-images.githubusercontent.com/9075641/228463011-5302f615-86e6-41dc-b09a-62bed3564596.png
*/
window.addEventListener('resize', function () {
    let width = window.innerWidth;
    let height = window.innerHeight;
    document.getElementById('dimensions').innerHTML = 'Розміри вікна: ' + width + ' x ' + height;
});

/* 7.7. 
На сторінці потрібно реалізувати 2 випадаючих списки. У першому містяться назви країн, у другому – назви міст. Реалізувати роботу таким чином, щоб коли вибирається з лівого випадаючого списку певна країна - в правому випадаючому  списку з'являлися міста цієї країни. Список міст формується динамічно, через JavaScript. Також потрібно нижче вивести назву обраної країни і місто.
Код HTML-сторінки:
<select name="country" id="country">
        <option value="ger">Germany</option>
        <option value="usa">USA</option>
        <option value="ukr">Ukraine</option>
</select>          
<select name="cities" id="cities"></select>
<p></p> */

const countrySelect = document.getElementById("country");
const citiesSelect = document.getElementById("cities");
const result = document.getElementById("result");

const citiesByCountry = {};

